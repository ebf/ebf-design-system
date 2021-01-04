/* eslint-disable ember/no-computed-properties-in-native-classes, ember/no-get */
import { find, isEmpty, map }  from 'lodash';
import debug from 'debug';
import moment from 'moment';
import { run } from '@ember/runloop';
import { computed, get, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';
import Locale from '../locale';

const log = debug('service:locale');

export const DEFAULT_LOCALE = Locale.from('de-de');

/**
 * Service for managing and selecting locales for your application.
 * 
 * Here is an example Language switcher component using the `locale` service:
 * 
 * ```js
 * export default class LanguageSwitcherComponent extends Component {
 *   @service locale;
 *   
 *   // update the active locale
 *   @action update(locale) {
 *     this.locale.active = locale;
 *   }
 * }
 * ```
 * 
 * And it's corresponding template:
 * 
 * ```handlebars
 * <div class="list-group">
 *   {{#each this.locale.available as |locale|}}
 *     <a href="#" class="list-group-item list-group-item-action" {{on "click" (fn this.update locale)}}>
 *      {{t (concat "locales." locale.iso)}}
 *     </a>
 *   {{/each}}
 * </div>
 * ```
 * You would notice that when the locale is selected the translation for the locale would change to the
 * appropriate language as this service is setting the primary locale in the `ember-intl` addon under the hood.
 * 
 * The same applies to `moment`, where all the date labels and formats would be updated if you are using the
 * `ember-moment` helpers.
 *
 * @class LocaleService
 * @extends Service
 */
export default class LocaleService extends Service {
  /**
   * Session storage that is used to extract the current session locale value
   *
   * @type {Object}
   * @public
   */
  @storageFor('session') storage;

  /**
   * Session service instance that is used to retrieve the locale from the currently logged
   * in user preferences.
   *
   * @type {SessionService}
   * @public
   */
  @service() session;

  /**
   * Ember' `intl` service instance that is used to extract available locales that can be
   * used for selection and to update the currently selected locale.
   *
   * @type {Intl}
   * @public
   */
  @service() intl;

  constructor() {
    super(...arguments);

    const setup = () => {
      const locale = this.active;
  
      if (!locale.is(moment.locale())) {
        moment.locale(locale.locale);
      }
  
      if (!locale.is(this.intl.primaryLocale)) {
        this.intl.locale = locale.locale;
      }
    };

    scheduleOnce('actions', this, setup);
  }

  /**
   * Normalizes the locale the string into a `Locale` instance containing the language and country code.
   *
   * @method normalize
   * @param {String} locale Locale string
   * @return {Locale}
   */
  normalize() {
    return Locale.from(...arguments);
  }

  /**
   * Attempts to figure out if the locale from the resolver is supported by the
   * Internationalization service.
   * 
   * @method resolve
   * @param {Function} resolver Resolver function that returns the locale to be selected
   * @return {Locale} Locale for selection or null
   */
  resolve(resolver) {
    const locale = run(resolver);
  
    if (isEmpty(locale)) {
      return null;
    }
  
    return find(this.available, ['language', Locale.from(locale).language]);
  }

  /**
   * An array of available locales that are avaiable for selection.
   *
   * This value is derived from Ember Intl addon. Please check the `ember-intl` addon to see
   * how to configure available locales.
   *
   * @type {Locale[]}
   * @public
   */
  // eslint-disable-next-line ember/require-computed-property-dependencies
  @computed('intl.locales') get available() {
    return map(this.intl.locales, this.normalize);
  }

  /**
   * Currently active locale instance, it would try to resolve it using the following chain:
   * 
   * - Preferred User Account Locale
   * - Stored Locale in the currently active session
   * - Primary locale from the `ember-intl` service
   * - Browser's current settings
   * - Defaults to `de-de`
   *
   * @type {Locale}
   * @public
   */
  @computed('available', 'storage.locale', 'intl.primaryLocale', 'session.user.locale') get active() {
    let locale = this.resolve(() => get(this.session, 'user.locale'));

    if (!locale) {
      locale = this.resolve(() => get(this.storage, 'locale'));
    }

    if (!locale) {
      locale = this.resolve(() => get(this.intl, 'primaryLocale'));
    }

    if (!locale) {
      locale = this.resolve(() => navigator.language || navigator.userLanguage);
    }

    if (!locale) {
      locale = DEFAULT_LOCALE;
    }

    return locale;
  }

  set active(locale) {
    const normalized = this.normalize(locale);

    if (this.active.is(normalized)) {
      return;
    }

    log('Setting locale to:', normalized.iso);

    // update moments locale in order to update it's labels and formats
    moment.locale(normalized.locale);

    // update `ember-intl` current locale in order to update rendered translations
    set(this.intl, 'locale', normalized.locale);

    // store the selected locale in the session storage
    set(this.storage, 'locale', normalized.locale);
  }
}
