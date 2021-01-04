/**
 * Custom Error type that is thrown when an AJAX request fails with 
 * a non-ok status code.
 *
 * This class contains the `Response` object that can be used to extract the
 * error payload in order to show more details about the error in the UI.
 *
 * @class RequestError
 * @extends Error
 */
export default class RequestError extends Error {
  constructor(response, status = 500, message = 'An error occurred while executing request') {
    super(message);
    this.status = status;
    this.response = response;
  }
}