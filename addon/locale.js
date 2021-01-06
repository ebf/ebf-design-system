/* eslint-disable ember/no-computed-properties-in-native-classes */
import {
  memoize,
  split,
  toLower,
  toUpper,
}  from 'lodash';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';

const LOCALE_REGEXP = /-|_/;

const normalize = memoize((locale) => {
  assert('Locale can not be null or empty', !!locale);

  if (locale instanceof Locale) {
    return locale;
  }

  let [language, country] = split(locale, LOCALE_REGEXP);
  language = toLower(language);
  country = toUpper(country);

  return new Locale(language, country);
});

/**
 * Locale type that contains the language and country code information.
 * 
 * ```js
 * const locale = Locale.from('en-us');
 * locale.language // prints en
 * locale.country // prints US
 * locale.iso // prints en_US
 * locale.locale // prints en-US
 * ```
 * 
 * @class Locale
 */
export default class Locale {

  /**
   * Creates a new `Locale` instance out of a given ISO locale string.
   * 
   * ```js
   * Locale.from('de-de); // Locale { country: 'DE' language: 'de' }
   * Locale.from('en_GB); // Locale { country: 'GB' language: 'en' }
   * ```
   *
   * @static
   * @param {String} locale locale
   * @returns {Locale}
   */
  static from(locale) {
    return normalize(locale);
  }

  /**
   * Locale's language code, eg: `en`
   *
   * @property {String} language 
   */
  @tracked language = null;

  /**
   * Locale's country code, eg: `US`
   *
   * @property {String} country
   */
  @tracked country = null;

  constructor(language, country) {
    this.language = language;
    this.country = country;
  }

  /**
   * ISO locale string, eq: `en_US`
   * 
   * @property {String} iso
   */
  get iso() {
    return `${this.language}_${this.country}`;
  }

  /**
   * Javascript locale string, eq: `en-US`
   *
   * @property {String} locale
   */
  get locale() {
    return `${this.language}-${this.country}`;
  }

  /**
   * Checks if this instance is the same as the given `Locale` or locale string.
   *
   * @param {String|Locale} locale locale to check
   * @returns {Boolean}
   */
  is(locale = null) {
    if (locale === null) {
      return false;
    }

    const normalized = Locale.from(locale);
    return this.iso === normalized.iso;
  }

}