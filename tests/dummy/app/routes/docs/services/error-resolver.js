import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET application-error-route.js
export default class ApplicationRoute extends Route {
  @service('error-resolver') errorResolver;

  @action error(error, transition = null) {
    // check if this error occurred during the transition, if thas the case we should
    // render an error page with the transformed error messages, otherwise show a notification alert
    if (transition && transition.isTransition) {
        return this.intermediateTransitionTo('error', this.errorResolver.resolve(error));
    }
    
    // show the error notification of the resolved error
    return this.errorResolver.notify(error);
  }
}
// END-SNIPPET