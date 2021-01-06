import debug from 'debug';
import Service from '@ember/service';
import { isPresent, isEmpty } from '@ember/utils';
import { get, indexOf, trim, chain } from 'lodash';

const STATE = Symbol('STATE');
const COOKIES = Symbol('COOKIES');

const log = debug('ebf-design-system:service:cookies');

const reducer = (cookies, { name, value }) => {
  try {
    return { ...cookies, [name]: JSON.parse(value) };
  } catch (e) {
    return { ...cookies, [name]: value };
  }
};

const parse = cookie => {
  const i = indexOf(cookie, '=');

  // invalid cookie definition, return null
  if (i === -1) {
    return null;
  }

  const name = cookie.substring(0, i);

  // cookie has no name, return null
  if (isEmpty(name)) {
    return null;
  }

  const value = cookie.substring(i + 1);

  // has no value, return null
  if (isEmpty(value)) {
    return { name, value: null };
  }

  // has a value, URL decode it
  return { name, value: decodeURIComponent(value) };
}

const deserialize = () => {
  return chain(CookiesService.cookies())
    .split(';')
    .map(entry => trim(entry)) // trim the split cookie values
    .filter(entry => !isEmpty(entry)) // check if they are not empty
    .map(entry => parse(entry)) // parse the cookie into a JSON
    .filter(entry => isPresent(entry)) // check if the parsed cookie is not null
    .reduce(reducer, {}) // reduce the list of cookies into a key/value object state
    .value();
}

/**
 * Cookie service that provides access to cookies in the browser.
 * 
 * @class CookiesService
 * @extends Service
 */
export default class CookiesService extends Service {
  constructor() {
    super(...arguments);
    this.sync(); // force initial state
  }

  /**
   * Reads the cookie with the given name, returns its value as a `String`
   * 
   * @method read
   * @param {String} name
   * @returns {String} cookie value or `null` if it does not exist
   */
  read(name) {
    return get(this[COOKIES], name, null);
  }

  /**
   * Synchronizes the state of the service with the current cookies in the browser.
   * 
   * @method sync
   */
  sync() {
    this[STATE] = CookiesService.cookies();
    this[COOKIES] = deserialize();

    log('Synced cookie state with: ', this[COOKIES]);
  }

}

// setup document reference, use _document for tests
CookiesService.cookies = () => window._document && window._document.cookie || window.document.cookie;