/* eslint-disable ember/no-computed-properties-in-native-classes, ember/no-get, no-underscore-dangle */
import { defaults, each, reduce } from 'lodash';
import RSVP from 'rsvp';
import debug from 'debug';
import Ember from 'ember';
import { getOwner } from '@ember/application';
import { computed, get } from '@ember/object';
import Service, { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import fetch, { Headers, Request } from 'fetch';
import { CONTENT_TYPES } from '../constants';
import RequestError from '../request-error';
import URLFormatter from '../url-formatter';

const log = debug('service:ajax');

const REQUEST_INTERCEPTOR_TYPE = 'interceptor';

// Fetch default parameters
const DEFAULTS = {
  progress: true,
  mode: 'cors',
  method: 'GET',
  cache: 'no-cache',
  credentials: 'include',
  contentType: CONTENT_TYPES.JSON,
};

/**
 * Utility class used to safely extract the JSON payload from the remote server response.
 *
 * @param {Response} response Fetch Response instance
 * @returns {Object}
 */
async function toJSON(response, lenient = true) {
  // return an empty json object in case the response contains no body
  if (response.ok && (response.status >= 202 && response.status <= 205)) {
    return {};
  }

  // try to extract a json response
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }

  // try to extract a json response from a text response
  try {
    const text = await response.text();
    return JSON.parse(text);
  } catch (e) {
    if (lenient) {
      log('Error while serializing response to JSON', e);
    } else {
      throw e;
    }
  }

  return {};
}

// run the interceptor promise reducer...
const intercept = (interceptors, reducer, initial) => reduce(interceptors, (state, { name, interceptor }) => state.then((result) => reducer(result, interceptor)).then(result => {
  assert(`Interceptor ${name} returned an empty state from one of it's hook. Please make sure that each hook returns a request or response`, isPresent(result));
  return result;
}), RSVP.resolve(initial));

// execute the fetch request with interceptors
const execute = async (interceptors, initial) => {
  // run the before interceptors
  const request = await intercept(interceptors, (state, interceptor) => interceptor.request(state), initial);

  // execute the fetch request
  const response = await fetch(request);

  // execute the after interceptors
  return await intercept(interceptors, (state, interceptor) => interceptor.response(request, state), response);
}

/**
 * Service that is used to execute AJAX requests accross the application.
 *
 * ```javascript
 * export default class MyController extends Controller {
 *    @service() ajax;
 *
 *    @task() fetch * () {
 *      return yield this.ajax.json('/api/endpoint'); // uses the default host
 *    }
 *
 *    @task() external * () {
 *      return yield this.ajax.json('https://external.com/api/endpoint'); // uses defined host
 *    }
 * }
 * ```
 *
 * @access public
 * @class AjaxService
 * @extends {Service}
 */
export default class AjaxService extends Service {
  /**
   * Locale service instance used to apply the currently active `Locale` to the request.
   *
   * @access private
   * @type {LocaleService}
   */
  @service() locale;

  /**
   * Cookes service instance used to perform Cookie sync after each completed request.
   *
   * @access cookies
   * @type {CookiesService}
   */
  @service() cookies;

  /**
   * Progress service instance used to manage the `NProgress` loading indicator
   *
   * @access private
   * @type {ProgressService}
   */
  @service() progress;

  constructor() {
    super(...arguments);

    this.config = getOwner(this).factoryFor('config:environment').class;
    this.formatter = new URLFormatter(this.config.API);
  }

  /**
   * List of available Request Interceptors that are defined in the application.
   *
   * Request Interceptors should be placed inside the `interceptors` folder in order
   * to be registered by Ember Container Registry.
   *
   * @property {RequestInterceptor[]} interceptors
   */
  @computed get interceptors() {
    const { default: DAG } = Ember.__loader.require('dag-map');

    const interceptors = [];
    const graph = new DAG();
    const owner = getOwner(this);
    const registry = get(owner, '__registry__');

    // lookup all registered interceptor types
    each(registry.knownForType(REQUEST_INTERCEPTOR_TYPE), (known, type) => {
      // skip unknown types...
      if (known !== true) {
        return;
      }

      const name = type.split(':')[1];
      const interceptor = owner.lookup(type);

      if (isPresent(interceptor)) {
        graph.add(interceptor.name || name, interceptor, interceptor.before, interceptor.after);
      }
    });

    // run the topologic sort of interceptors and them to an array
    graph.each((name, interceptor) => {
      if (isPresent(interceptor)) {
        interceptors.push({ name, interceptor });
      } else {
        log(`Could not find Request Interceptor with name: ${name}.`);
      }
    });

    // freeze the interceptor array in order to make sure that is immutable
    Object.freeze(interceptors);

    return interceptors;
  }

  /**
   * Executes an AJAX request using Fetch polyfill and returns a JSON Object from the response.
   *
   * It could throw a `RequestError` in case the server responds with a non-ok status code or if
   * the response data could not be parsed into a JSON object.
   *
   * Usage:
   *
   * ```js
   * try {
   *    const users = await this.ajax.json('/api/users');
   * } catch (e) {
   *    console.error('Failed to fetch users from the API', e);
   * }
   * ```
   *
   * @param {String} url     Request path or an absolute URL
   * @param {Object} options Request options
   * @param {String} options.progress    Should the service increment or decrement progress counter, defaults to `true`
   * @param {String} options.contentType Defines a content type header for the request, defaults to `application/json`
   * @param {String} options.cache       Contains the cache mode of the request (e.g., `default`, `reload`, `no-cache`).Defaults to `no-cache`
   * @param {String} options.mode        Defines the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, `navigate`.). Defaults to `cors`
   * @param {String} options.credentials Contains the credentials of the request (e.g., `omit`, `same-origin`, `include`). Defaults to `include`
   * @return {Promise<Object|Array, RequestError>}
   */
  async json(url, options = {}) {
    const response = await this.request(url, options);
    return await toJSON(response, false);
  }

  /**
   * Executes an AJAX request using Fetch polyfill and returns a raw `Response` instance.
   *
   * It could throw a `RequestError` in case the server responds with a non-ok status code or if
   * the response data could not be parsed into a JSON object.
   *
   * Usage:
   *
   * ```js
   * try {
   *    const response = await this.ajax.json('/api/users');
   *    const users = await response.json();
   * } catch (e) {
   *    console.error('Failed to fetch users from the API', e);
   * }
   * ```
   *
   * @param {String} url     Request path or an absolute URL
   * @param {Object} options Request options
   * @param {String} options.progress    Should the service increment or decrement progress counter, defaults to `true`
   * @param {String} options.contentType Defines a content type header for the request, defaults to `application/json`
   * @param {String} options.cache       Contains the cache mode of the request (e.g., `default`, `reload`, `no-cache`).Defaults to `no-cache`
   * @param {String} options.mode        Defines the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, `navigate`.). Defaults to `cors`
   * @param {String} options.credentials Contains the credentials of the request (e.g., `omit`, `same-origin`, `include`). Defaults to `include`
   * @return {Promise<Response, RequestError>}
   */
  async request(url, options = {}) {
    const response = await this.execute(url, options);

    if (response.ok || response.type === 'opaqueredirect') {
      return response;
    }

    const error = await toJSON(response);

    log(`Remote Server responded with an HTTP Error response with status code: ${response.status} and error body:`, error);

    throw new RequestError(error, response.status);
  }

  execute(url, options = {}) {
    const progress = options.progress || true;

    if (progress) {
      this.progress.start();
    }

    const request = this._toRequest(url, options);

    return new RSVP.Promise((resolve, reject) => {
      execute(this.interceptors, request)
        .then(resolve, reject)
        .finally(() => this.cookies.sync()) // sync cookies
        .finally(() => progress && this.progress.done()); // update progress
    }, `AJAX: ${request.method} - ${request.url}`);
  }

  /**
   * Creates a URL instance out of a given url or path.
   * It also tries to encode the supplied query parameters in the final URL.
   *
   * @param {String} url   URL to be built, it can be an absolute URL or a relative path
   * @param {Object} query Query parameters to be encoded in the final URL
   */
  buildURL(url, query = {}) {
    return this.formatter.format(url, query);
  }

  _toRequest(url, options) {
    const hash = defaults(options, DEFAULTS);
    hash.headers = this._toHeaders(options);

    return new Request(this.formatter.format(url), hash);
  }

  _toHeaders(options = {}) {
    const locale = get(this.locale, 'active.locale');

    return new Headers(defaults(options.headers, {
      'accept-language': locale,
      'content-type': options.contentType,
    }));
  }

}
