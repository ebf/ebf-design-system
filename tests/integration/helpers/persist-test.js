import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | persist', function(hooks) {
  setupRenderingTest(hooks);
  
  hooks.afterEach(function() {
    const notify = this.owner.lookup('service:notify');
    notify.pending = [];
  });

  test('should invoke save', async function(assert) {
    const notify = this.owner.lookup('service:notify');

    const model = {
      save: () => { model.saved = true; },
    };

    this.set('model', model);

    await render(hbs`<button type="button" {{on "click" (fn (persist) this.model) }}>Save</button>`);
    await click('button');

    assert.equal(model.saved, true);
    assert.equal(notify.pending.length, 1);
  });
});
