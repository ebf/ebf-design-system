import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Card::Title @title="Title"/>`);

    assert.equal(this.element.textContent.trim(), 'Title');

    // Template block usage:
    await render(hbs`
      <Card::Title>Title</Card::Title>
    `);

    assert.equal(this.element.textContent.trim(), 'Title');
  });
});
