import { helper } from '@ember/component/helper';

/**
 * Helper that is used to stop event propagation.
 *
 * You can use this helper on Ember `on` helper action callback:
 * ```hbs
 * <a href {{on "click" (disable-bubling this.action)}}>
 *  Some link
 * </a>
 * ```
 * 
 * Or directly on an HTML element as an event listener:
 * ```hbs
 * <button type="button" onclick={{fn (disable-bubling this.action)}}>
 *  Button
 * </button>
 * ```
 *
 * @class DisableBubblingHelper
 * @extends Helper
 */
export function disableBubbling([action]) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();
    return action(event);
  };
}

export default helper(disableBubbling);