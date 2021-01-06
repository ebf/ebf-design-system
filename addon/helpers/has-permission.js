import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
 * Helper class that checks if the currently logged in user, which is extracted
 * from the sesson service, contains a list of given permissions.
 * 
 * ```hbs
 * {{#if (has-permission "important-permission")}}
 *    <p>Something important</p>
 * {{/if}}
 * ```
 * 
 * @class HasPermissionHelper
 * @extends Helper
 */
export default class HasPermissionHelper extends Helper {
  /**
   * Injected Session service instance
   *
   * @access private
   * @type {SessionService}
   */
  @service() session;

  compute([value]) {
    return this.session.hasPermission(value);
  }

}