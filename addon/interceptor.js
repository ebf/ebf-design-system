import EmberObject from '@ember/object';

/**
 * Request interceptor that is used by the AJAX service to customize the
 * Fetch requests and responses.
 * 
 * @class RequestInterceptor
 * @extends EmberObject
 */
export default class RequestInterceptor extends EmberObject {
  /**
   * Similar to Ember Initializiers you can also sort request interceptors. This property
   * defines after which interceptors should this interceptor be ran.
   * 
   * @type {String[]|String}
   */
  after = null;

  /**
   * Similar to Ember Initializiers you can also sort request interceptors. This property
   * defines before which interceptors should this interceptor be ran.
   * 
   * @type {String[]|String}
   */
  before = null;

  /**
   * Name of the Request interceptor. If this property is `null` or empty the name of the file is used.
   * It is important that the name of the interceptor is unique across the application.
   * 
   * @type {String}
   */
  name = null;

  /**
   * Hook used before the Request is executed by the AJAX service.
   * 
   * @param {Request} request Fetch Request object
   */
  request(request) {
    return request;
  }

  /**
   * Hook used after the Request is executed and the Response is obtained.
   * 
   * @param {Request} request Fetch Request object
   * @param {Request} response Fetch Response object
   */
  response(request, response) {
    return response;
  }

}