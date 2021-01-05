import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | destroy', function(hooks) {
  setupRenderingTest(hooks);
  
  hooks.afterEach(function() {
    const notify = this.owner.lookup('service:notify');
    notify.pending = [];
  });

  test('should invoke destroy', async function(assert) {
    const notify = this.owner.lookup('service:notify');

    const model = {
      destroyRecord: () => { model.destroyed = true; },
    };

    this.set('model', model);

    await render(hbs`<button type="button" {{on "click" (fn (destroy showConfirmation=false) this.model) }}>Destroy</button>`);
    await click('button');

    assert.equal(model.destroyed, true);
    assert.equal(notify.pending.length, 1);
  });
});
