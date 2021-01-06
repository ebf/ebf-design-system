import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | has-permission', function(hooks) {
  setupRenderingTest(hooks);

  test('check missing permission', async function(assert) {
    await render(hbs`{{has-permission "permission"}}`);

    assert.equal(this.element.textContent.trim(), "false");
  });

  test('check permission', async function(assert) {
    const session = this.owner.lookup('service:session');
    session.set('session', {
      principal: { authorities: [{ authority: 'permission' }] },
    });

    await render(hbs`{{has-permission "permission"}}`);

    assert.equal(this.element.textContent.trim(), "true");
  });
});
