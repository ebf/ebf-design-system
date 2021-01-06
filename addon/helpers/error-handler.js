import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { w } from '@ember/string';

/**
 * Helper class that handles error using the `ErrorResolver` service and shows the
 * error message using the `Notify` service from the `ember-notify` addon.
 * 
 * ```hbs
 * <SomeComponent @onError={{error-handler}} />
 * ```
 * 
 * @class ErrorHandlerHelper
 * @extends Helper
 */
export default class ErrorHandlerHelper extends Helper {
  /**
   * Injected error resolver instance
   *
   * @access private
   * @type {ErrorResolver}
   */
  @service('error-resolver') resolver;

  compute(_, hash = {}) {
    const options = {
      id: hash.id || null,
      classNames: w(hash.class || ''),
    };

    return (error) => this.resolver.notify(error, options);
  }

}
