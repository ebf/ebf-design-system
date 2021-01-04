import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
 * Component that renders the Language switcher as a Bootstrap Dropdown component.
 * 
 * It uses the `locale` service under the hood to extract the list of available locales,
 * the currently active locale and to update it.
 * 
 * The component is rendered without any arguments, everything is already taken care for you.
 *
 * ```hbs
 * <LanguageSwitcher />
 * ```
 */
export default class LanguageSwitcherComponent extends Component {
  @service('locale') service;

  get active() {
    return this.service.active;
  }

  get available() {
    return this.service.available;
  }

  @action select(locale) {
    this.service.active = locale;
  }
}
