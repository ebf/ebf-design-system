import moment from 'moment';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import Locale from '@ebf/design-system/locale';
import resetStorages from 'ember-local-storage/test-support/reset-storage';

const en = new Locale('en', 'US');
const de = new Locale('de', 'DE');

module('Unit | Service | locale', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    // setup initial locale to DE for intl
    const intl = this.owner.lookup('service:intl');
    intl.set('locale', de.iso);
  });

  hooks.afterEach(function() {
    const service = this.owner.lookup('service:locale');

    if (window.localStorage) {
      window.localStorage.clear();
    }

    service.session.set('session', null);
    service.storage.set('locale', null);

    resetStorages();
  });

  test('it resolves the locale from the intl service', function(assert) {
    const service = this.owner.lookup('service:locale');
    const intl = this.owner.lookup('service:intl');

    assert.ok(service.active);
    assert.true(service.active.is(intl.primaryLocale));
  });

  test('it resolves the locale from the session', function(assert) {
    const service = this.owner.lookup('service:locale');

    assert.true(service.active.is(de));

    run(() => service.session.set('session', { principal: { locale: 'en-us' } }));

    assert.ok(service.active);
    assert.true(service.active.is(en));
  });

  test('it resolves the locale from the local storage', function(assert) {
    const service = this.owner.lookup('service:locale');

    assert.true(service.active.is(de));

    run(() => service.storage.set('locale', 'en-us'));

    assert.ok(service.active);
    assert.true(service.active.is(en));
  });

  test('it should not use not supported locale', function(assert) {
    const service = this.owner.lookup('service:locale');

    assert.true(service.active.is(de));

    run(() => service.storage.set('locale', 'sr-RS'));

    assert.ok(service.active);
    assert.false(service.active.is('sr-RS'));
    assert.true(service.active.is(de));
  });

  test('it should set active locale', function(assert) {
    const service = this.owner.lookup('service:locale');

    assert.true(service.active.is(de));

    service.active = en;

    assert.ok(service.active);
    assert.true(service.active.is(en));
    assert.true(en.is(service.intl.primaryLocale));
    assert.true(en.is(service.storage.get('locale')));
    assert.equal(en.language, moment.locale());
  });
});
