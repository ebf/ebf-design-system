import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET error-demo-controller.js
export default class DocsErrorsController extends Controller {
  @service('error-resolver') resolver;

  get error() {
    return { code: 'errors.not-found', status: 404 };
  }

  get resolved() {
    return this.resolver.resolve(this.error);
  }
}
// END-SNIPPET