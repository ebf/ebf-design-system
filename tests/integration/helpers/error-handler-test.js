import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | error-handler', function(hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(function() {
    const notify = this.owner.lookup('service:notify');
    notify.pending = [];
  });

  test('it should notify an error on click', async function(assert) {
    const notify = this.owner.lookup('service:notify');

    this.set('error', new Error('Ooops'));

    await render(hbs`
      <button type="button" {{on "click" (fn (error-handler id="message-id" class="custom-class another-class") this.error)}}>
        Click me
      </button>
    `);

    assert.equal(notify.pending.length, 0);

    await click('button');

    assert.equal(notify.pending.length, 1);

    const alert = notify.pending[0];
    
    assert.ok(alert);
    assert.ok(alert.html);
    assert.ok(alert.detail);
    assert.equal(alert.id, 'message-id');
    assert.equal(alert.type, 'error');
    assert.equal(alert.level, 'danger');
    assert.deepEqual(alert.classNames, ['custom-class', 'another-class'])
  });
});
