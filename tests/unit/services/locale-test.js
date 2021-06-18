import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { scheduleOnce } from '@ember/runloop';
import Locale from '@ebf/design-system/locale';
import resetStorages from 'ember-local-storage/test-support/reset-storage';

const en = Locale.from('en_US');
const de = Locale.from('de_DE');
const rs = Locale.from('sr_RS');

module('Unit | Service | locale', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    if (window.localStorage) {
      window.localStorage.clear();
    }

    resetStorages();
  });

  test('it resolves to a default locale from intl service', function(assert) {
    const service = this.owner.lookup('service:locale');
    const moment = this.owner.lookup('service:moment');
    const intl = this.owner.lookup('service:intl');

    assert.ok(service.active);
    assert.true(service.active.is(Locale.from(intl.locale)));
    assert.deepEqual(moment.locale, service.active.language);
  });

  test('it resolves to a locale from session storage', function(assert) {
    if (window.localStorage) {
      window.localStorage.setItem('storage:session', JSON.stringify({ locale: de.iso }));
    } else {
      return assert.ok(true);
    }

    const service = this.owner.lookup('service:locale');
    const moment = this.owner.lookup('service:moment');
    const intl = this.owner.lookup('service:intl');

    assert.ok(service.active);
    assert.true(service.active.is(de));
    assert.deepEqual(moment.locale, de.language);

    // eslint-disable-next-line ember/no-incorrect-calls-with-inline-anonymous-functions
    scheduleOnce('actions', () => assert.true(Locale.from(intl.locale).is(de.iso)));
  });

  test('it resolves to a locale from intl when session storage locale is not supported', function(assert) {
    if (window.localStorage) {
      window.localStorage.setItem('storage:session', JSON.stringify({ locale: rs.iso }));
    } else {
      return assert.ok(true);
    }

    const service = this.owner.lookup('service:locale');
    const moment = this.owner.lookup('service:moment');
    const intl = this.owner.lookup('service:intl');

    assert.ok(service.active);
    assert.true(service.active.is(Locale.from(intl.locale)));
    assert.deepEqual(moment.locale, service.active.language);
  });

  test('it defaults to de_DE if neither storage nor browser locales are supported', function(assert) {
    if (window.localStorage) {
      window.localStorage.setItem('storage:session', JSON.stringify({ locale: rs.iso }));
    } else {
      return assert.ok(true);
    }

    const service = this.owner.lookup('service:locale');
    const moment = this.owner.lookup('service:moment');

    assert.ok(service.active);
    assert.true(service.active.is(Locale.from('de_DE')));
    assert.deepEqual(moment.locale, 'de');
  });

  test('it should update the locale from the session:restored event', function(assert) {
    const intl = this.owner.lookup('service:intl');
    intl.setLocale(en.iso);

    const service = this.owner.lookup('service:locale');
    const moment = this.owner.lookup('service:moment');

    assert.true(service.active.is(en));

    service.session.trigger('session:restored', { session: { principal: { locale: 'de-de' } } });

    assert.true(service.active.is(de));
    assert.true(Locale.from(intl.locale).is(de.iso));
    assert.deepEqual(moment.locale, de.language);
  });

  test('it should not update the locale from the session:restored event when locale is in session', function(assert) {
    const service = this.owner.lookup('service:locale');
    service.active = en;

    const moment = this.owner.lookup('service:moment');
    const intl = this.owner.lookup('service:intl');

    assert.true(service.active.is(en));

    service.session.trigger('session:restored', { session: { principal: { locale: 'de-de' } } });

    assert.true(service.active.is(en));
    assert.true(Locale.from(intl.locale).is(en.iso));
    assert.deepEqual(moment.locale, en.language);
  });

  test('it should not use unsupported locales to update the state', function(assert) {
    const service = this.owner.lookup('service:locale');
    service.active = rs;

    assert.ok(service.active);
    assert.true(service.active.is(en));
  });

  test('it should trigger locale event on update', function(assert) {
    const service = this.owner.lookup('service:locale');
    service.active = en;

    service.on('locale', locale => assert.true(de.is(locale)));
    service.active = de;
  });
});
