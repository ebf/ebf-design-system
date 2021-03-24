import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
 * Helper used to display the translated country name from a country code
 *
 * @class CountryLabelHelper
 * @extends Helper
 */
export default class CountryLabelHelper extends Helper {
  @service intl;

  compute([country = 'DE']) {
    return this.intl.t(`countries.${country}`);
  }
}
