// BEGIN-SNIPPET ordered-interceptor.js
import RequestInterceptor from '@ebf/ember-cli-design-system/interceptor';

export default class OrderedRequestInterceptor extends RequestInterceptor {
  name = 'ordered'; // defines the interceptor name, uses the file name as a fallback
  before = 'logging'; // execute the interceptor before the logging one
  after = 'other-interceptor'; // execute the interceptor after the `other-interceptor` one

  request(request) {
    return request;
  }

  response(request, response) {
    return response;
  }
} 
// END-SNIPPET