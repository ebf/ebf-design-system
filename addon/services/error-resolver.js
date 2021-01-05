import debug from 'debug';
import {
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InvalidError,
  TimeoutError,
} from '@ember-data/adapter/error';
import { get, isEmpty, isString, pick } from 'lodash';
import Service, { inject as service } from '@ember/service';
import { isHTMLSafe } from '@ember/string';
import ResolvedError from '../resolved-error';

const log = debug('service:error-resolver');

const GENERAL_ERROR_MESSAGE = 'errors.general';

/**
 * Tries to resolve the status code for an error, defaults to `500 Internal Server Error` status.
 * 
 * @param {Error} error
 * @returns {Number} HTTP status code
 */
function statusCodeForError(error) {
  if (error instanceof UnauthorizedError) {
    return 401; 
  }
  if (error instanceof ForbiddenError) {
    return 403; 
  }
  if (error instanceof NotFoundError) {
    return 404; 
  }
  if (error instanceof TimeoutError) {
    return 503;
  }
  if (error instanceof InvalidError) {
    return 422;
  }

  return parseInt(get(error, 'status', 500), 10) || 500;
}

function attemptTranslation(intl, key, options = {}) {
  if (intl.exists(key)) {
    return intl.t(key, { htmlSafe: true, ...options });
  }
  return key;
}

function normalize(error) {
  if (isEmpty(error)) {
    return { detail: GENERAL_ERROR_MESSAGE };
  }
  if (isString(error) || isHTMLSafe(error)) {
    return { detail: error };
  }
  return pick(error, 'title', 'detail');
}

function toHTMLSafeString(value, formatter) {
  return isEmpty(value) ? '' : isHTMLSafe(value) ? value : formatter(value);
}

function toErrorMessage(e, severity) {
  const title = toHTMLSafeString(e.title, value => `<h5>${value}</h5>`);
  const detail = toHTMLSafeString(e.detail, value => `<p>${value}</p>`);
  return { ...severity, ...e, html: `${title}${detail}` };
}

function toSeverity(status) {
  switch (status) {
    case 422:
    case 424:
      return { type: 'warning', level: 'warning' };
    default: return { type: 'error', level: 'danger' };
  }
}

/**
 * Ember Service used to transform caught runtime errors into meaningfull messages that can be shown to the user.
 * 
 * This service is usually used in Ember Routes to handle `error` actions. Best place for it would be in your
 * Application Route where it would catch all `error` actions and show an error notifications using the `ember-notify` addon.
 * 
 * ```js
 * export default class ApplicationRoute extends Route {
 *   @service('error-resolver') errorResolver;
 *
 *   @action error(error, transition = null) {
 *     // check if this error occurred during the transition, if thas the case we should
 *     // render an error page with the transformed error messages, otherwise show a notification alert
 *     if (transition && transition.isTransition) {
 *       return this.intermediateTransitionTo('error', this.errorResolver.resolve(error));
 *    }
 *
 *     // show the error notification of the resolved error
 *     return this.errorResolver.notify(error);
 *   }
 * }
 * ```
 *
 * @class ErrorResolverService
 * @extends Service
 */
export default class ErrorResolverService extends Service {
  @service() intl;
  @service('notify') notifications;

  /**
   * Tries to resolve an error object into a `ResolvedError` that contains the
   * translated messages and status code related to it.
   *
   * @param {Error|Object|String} error 
   * @returns {ResolvedError}
   */
  resolve(error) {
    log('Resolving error', error);

    const status = statusCodeForError(error);
    const severity = toSeverity(status);

    let errors = [];

    if (isString(error)) {
      errors = [attemptTranslation(this.intl, error)];
    }

    if (error.isAdapterError) {
      errors = get(error, 'errors');
    }

    if (isEmpty(errors)) {
      errors = get(error, 'response.errors', []);
    }

    if (isEmpty(errors) && isString(error.code)) {
      errors = [attemptTranslation(this.intl, error.code)];
    }

    if (isEmpty(errors)) {
      errors = [attemptTranslation(this.intl, GENERAL_ERROR_MESSAGE)];
    }

    errors = errors
      .map(e => normalize(e))
      .map((e) => toErrorMessage(e, severity));

    log(`Resolved Error with status code ${status}`, { errors, error });

    return new ResolvedError(errors, status, error);
  }

  /**
   * Resolves an error using the `#resolve` method and for each resolved error it would try to show the
   * the error notification using the `ember-notify` service.
   *
   * @param {Error|Object|String} error   Error that needs to be resolved and shown as a notification
   * @param {Object}              options Options object for the `ember-notify` service
   */
  notify(error, options = {}) {
    const resolved = this.resolve(error);

    resolved.errors.forEach(({ type, ...error }) => this.notifications.show(type, { ...options, ...error }));
  }

}
