/**
 * Class return by the `ErrorResolver` once the error is properly resolved.
 * 
 * @class ResolvedError
 */
export default class ResolvedError {
  /**
   * Array of translated objects with title and detail HTML safe strings
   * 
   * @type {Object[]}
   */
  errors = []

  /**
   * HTTP Status code that is resolved from the original cause
   * 
   * @type {Number}
   */
  status = 500;

  /**
   * Cause of the error that led to the resolved error
   * 
   * @type {Error|String|Object}
   */
  cause = null;

  constructor(errors = [], status = 500, cause = null) {
    this.errors = errors;
    this.status = status;
    this.cause = cause;
  }
}