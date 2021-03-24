/** 
 * HTTP Content Types
 * 
 * ```js
 * import { CONTENT_TYPES } from 'ember-cli-commons/constants';
 * 
 * CONTENT_TYPES.JSON === 'application/json; charset=utf-8';
 * CONTENT_TYPES.URL === 'application/x-www-form-urlencoded';
 * ```
 */
export const CONTENT_TYPES = {
  JSON: 'application/json; charset=utf-8',
  URL: 'application/x-www-form-urlencoded',
};

/**
 * Absolute URL RegExp instance
 *
 * @type {RegExp}
 */
export const ABSOLUTE_URL_REGEX = /^(http|https)/;

/**
 * List of available country codes for selection
 *
 * @type {String[]}
 */
export const AVAILABLE_CONTRIES = ['AT', 'BE', 'CH', 'DE', 'FR', 'LU', 'NL', 'RS', 'UK', 'US'];