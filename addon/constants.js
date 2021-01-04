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