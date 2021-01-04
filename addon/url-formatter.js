import { filter, join, get, isEmpty, isNull, isUndefined, reduce } from 'lodash';

const getValue = (options, key) => {
  let value = get(options, key, null);

  if (isEmpty(value)) {
    value = get(document.location, key);
  }

  return value;
}

const encode = (query, params) => reduce(query, (state, value, name) => {
  // we do not want nulls or undefined values in query
  if (isNull(value) || isUndefined(value)) {
    return state;
  }

  state.append(name, value);

  return state;
}, params)

/**
 * 
 */
export default class URLFormatter {
  /**
   * Attempts to parse the configuration object in order to construct the
   * base URL string that would be used for the final formatted URL.
   * 
   * @static
   * @param {Object} configuration
   * @returns String
   */
  static parse = (configuration = {}) => {
    const protocol = getValue(configuration, 'protocol').replace(':', '');
    const hostname = getValue(configuration, 'hostname');
    const port = getValue(configuration, 'port');

    const host = join(filter([hostname, port], value => !isEmpty(value)), ':');
    return `${protocol}://${host}`;
  }

  /**
   * Encodes the JSON object into a `URLSearchParams` instance.
   *
   * @static
   * @param {Object} query URL Query Parameters object to be encoded
   * @returns URLSearchParams
   */
  static encode = (query = {}) => {
    return encode(query, new URLSearchParams());
  };

  /**
   * Creates a new instance of the `URLFormatter` class that is used to format
   * URL's that would be used by the `AjaxService` when executing requests.
   * 
   * @constructor
   * @param {Object} configuration Base URL configuration object
   * @param {String} configuration.protocol HTTP protocol to be used, (http, https...)
   * @param {String} configuration.hostname Hostname to be used
   * @param {String} configuration.port     HTTP port number to be used
   */
  constructor(configuration) {
    this.host = URLFormatter.parse(configuration)
  }

  /**
   * Formats the given URL argument to an absolute URL string.
   *
   * @param {String} url    URL to be formatted
   * @param {Object} params URL query parameters to be encoded
   * @returns URL
   */
  format(path = '/', params = {}) {
    const url = new URL(path, this.host);
    encode(params, url.searchParams);
    return url;
  }

}