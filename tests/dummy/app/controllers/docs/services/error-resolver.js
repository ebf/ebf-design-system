import Controller from '@ember/controller';
import { action } from '@ember/object';

// BEGIN-SNIPPET error-resolver-route.js
export default class DocsServicesErrorResolverController extends Controller {
  @action trigger(code = 'errors.general', status = 500 ) {
    this.send('error', { code, status });
  }
}
// END-SNIPPET