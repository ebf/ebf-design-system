import RequestInterceptor from '@ebf/design-system/interceptor';

export default class <%= classifiedModuleName %>RequestInterceptor extends RequestInterceptor {
  name = <%= camelizedModuleName %>;

  request(request) {
    // include your before request logic
    return request;
  }

  response(request, response) {
    // include your logic when a request response is ready
    return response;
  }
}