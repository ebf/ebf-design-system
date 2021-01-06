import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/description', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Card::Description @value="Description"/>`);

    assert.equal(this.element.textContent.trim(), 'Description');

    await render(hbs`
      <Card::Description>Description</Card::Description>
    `);

    assert.equal(this.element.textContent.trim(), 'Description');
  });
});
