import { isFunction } from 'lodash';
import { get } from '@ember/object';
import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
 * The `{{persist}}` helper provides a quick and easy way to persist models using the
 * `PersisterService` from your templates.
 * 
 * ```hbs
 * <button type="submit" onclick={{persist model}}>Save</button>
 * ```
 *
 * @class PersistHelper
 * @extends Helper
 */
export default class PersistHelper extends Helper {
  /**
   * Injected Persister service instance
   *
   * @access private
   * @type {PersisterService}
   */
  @service('persister') persister;

  compute(_, options = {}) {
    return async (model) => {
      let record = model;

      if (options && options.value) {
        record = get(model, options.value);
      }

      const { onSuccess, onError } = options;

      try {
        const result = await this.persister.persist(record, options);

        if (isFunction(onSuccess)) {
          onSuccess(result);
        }

        return result;
      } catch (error) {
        if (isFunction(onError)) {
          onError(error);
        }
      }
    };
  }
}
