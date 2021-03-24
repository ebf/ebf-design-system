import { get } from '@ember/object';
import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
 * The `{{destroy}}` helper provides a quick way to destroy models using the `DestroyerService`
 * from your templates.
 * 
 * ```hbs
 * <button type="link" onclick={{destroy model}}>Delete</button>
 * ```
 *
 * @class DestroyHelper
 * @extends Helper
 */
export default class DestroyHelper extends Helper {
  /**
   * Injected Destroyer service instance
   *
   * @access private
   * @type {PersisterService}
   */
  @service('destroyer') destroyer;

  compute(_, options) {
    return async (model) => {
      let record = model;

      if (options && options.value) {
        record = get(model, options.value);
      }

      return await this.destroyer.destroy(record, { ...options });
    };
  }
}
