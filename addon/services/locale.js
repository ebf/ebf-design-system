/* eslint-disable ember/no-computed-properties-in-native-classes, ember/no-get */
import { find, map }  from 'lodash';
import debug from 'debug';
import { get, set } from '@ember/object';
import Evented from '@ember/object/evented';
import Service, { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { storageFor } from 'ember-local-storage';
import Locale from '../locale';

const log = debug('ebf-design-system:service:locale');

const defaultLocale = 'de-DE';
export const DEFAULT_LOCALE = Locale.from(defaultLocale);

/**
 * Resolves the initial state for the locale service from the locale
 * stored in the session storage object.
 *
 * If locale is present, it would override the default locale coming from
 * the Intl Service.
 *
 * @param {LocaleService} service Locale service
 */
 const resolveInitialLocaleState = (service) => {
  const locale = get(service.storage, 'locale') || navigator.language;

  // session locale is not set or not supported, default to `defaultLocale`
  if (!service.isSupported(locale)) {
    service._active = Locale.from(defaultLocale);
    service.intl.setLocale(defaultLocale);
    service.moment.setLocale(defaultLocale);
    return;
  }

  // session locale is set, set it to be the active one and update the intl service to force
  // rerender of `t` helper.
  // NOTE: do not use `active` setter as it would trigger computation errors
  service._active = Locale.from(locale);
  scheduleOnce('actions', service.intl, 'setLocale', service.active.locale);
}

/**
 * Resolves the state for the locale service when the session has been restored.
 *
 * If the principal is present and he has a preffered locale set, we should use this one
 * in case the session storage does not have a locale.
 *
 * @param {LocaleService} service Locale service
 */
 const resolveSessionLocaleState = (service, session = {}) => {
  log('Attempting to set locale from session:', session);

  const locale = get(service.storage, 'locale');

  // session locale is set, it has precendence over the one from the user
  if (isPresent(locale)) {
    return;
  }

  const { principal = {} } = session;

  // principal is either not present or it has no valid locale set, do not update locale state
  if (!service.isSupported(principal.locale)) {
    return;
  }

  // session locale is set, set it to be the active one and update the intl service to force
  // rerender of `t` helper.
  // NOTE: do not use `active` setter as it would trigger computation errors
  service._active = Locale.from(principal.locale);
  service.intl.setLocale(service.active.locale);
  service.moment.setLocale(service.active.language);
}

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
 * @uses Evented
 */
/* istanbul ignore next */
export default class LocaleService extends Service.extend(Evented) {
  /**
   * Session storage that is used to extract the current session locale value
   *
   * @type {Object}
   * @public
   */
   @storageFor('session') storage;

   /**
    * Session service instance that is used to extract the configured locale from the
    * currently logged in user account.
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

   /**
    * Ember's `moment` service instance that is used to format dates.
    *
    * @type {Moment}
    * @public
    */
   @service() moment;

   /**
    * An array of available locales that are avaiable for selection.
    *
    * This value is derived from Ember Intl addon. Please check the `ember-intl` addon to see
    * how to configure available locales.
    *
    * @type {Locale[]}
    * @public
    */
   available = map(this.intl.locales, this.normalize);

   /**
    * Currently active locale instance.
    *
    * @type {Locale}
    * @private
    */
   @tracked _active = null;

   constructor() {
     super(...arguments);

     // setup initial locale state...
     resolveInitialLocaleState(this);

     // setup moment locale format
     this.moment.setLocale(this.active.language);

     // setup locale state when session is restored...
     const onSessionRestored = (event) => resolveSessionLocaleState(this, event.session);
     this.session.on('session:restored', this, onSessionRestored);
   }

   /**
    * Normalizes the locale the string into an Object containg the language and country code.
    *
    * @method normalize
    * @param {String} locale Locale string
    * @return {Locale}
    */
   normalize() {
     return Locale.from(...arguments);
   }

   isSupported(locale) {
     return isPresent(locale) && find(this.available, ['iso', Locale.from(locale).iso]);
   }

   get active() {
     return this._active;
   }

   set active(locale) {
    if (!this.isSupported(locale)) {
       return;
     }

     const normalized = Locale.from(locale);

     log('Setting locale to:', normalized.iso);

     this.intl.setLocale(normalized.locale);
     this.moment.setLocale(normalized.language);

     set(this.storage, 'locale', normalized.locale);

     this._active = normalized;

     this.trigger('locale', normalized);
   }
}
