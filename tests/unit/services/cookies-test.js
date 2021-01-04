import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | cookies', function(hooks) {
  setupTest(hooks);

  /* setup document cookie mocks */
  hooks.beforeEach(() => { window._document = {}; });
  hooks.afterEach(() => { window._document = null; });

  test('it reads cookes', function(assert) {
    window._document.cookie = 'cookie=value%20of%20a%20cookie;ga=123';
    const service = this.owner.lookup('service:cookies');

    assert.equal(service.read('cookie'), 'value of a cookie');
    assert.equal(service.read('ga'), '123');
    assert.equal(service.read('missing'), null);
  });

  test('it should update state when cookies change', function(assert) {
    window._document.cookie = 'cookie=value';
    const service = this.owner.lookup('service:cookies');

    assert.equal(service.read('cookie'), 'value');
    assert.equal(service.read('ga'), null);

    window._document.cookie = 'cookie=changed;ga=456';
    service.sync();

    assert.equal(service.read('cookie'), 'changed');
    assert.equal(service.read('ga'), '456');
  });
});
