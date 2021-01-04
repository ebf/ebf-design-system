/**
 * Thrown by the Session Service when this User Account is not logged in yet.
 *
 * @class UnauthenticatedError
 * @extends Error
 */
export default class UnauthenticatedError extends Error {
  /**
   * Returns the HTTP status code of the error. It is always `401`
   *
   * @type {Number}
   */
  get status() {
    return 401;
  }
}