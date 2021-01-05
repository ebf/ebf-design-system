// BEGIN-SNIPPET logging-interceptor.js
import RequestInterceptor from '@ebf/design-system/interceptor';

export default class LoggingRequestInterceptor extends RequestInterceptor {
  request(request) {
    console.log('Request:', request);
    return request;
  }

  response(request, response) {
    console.log('Response:', response);
    return response;
  }
} 
// END-SNIPPET