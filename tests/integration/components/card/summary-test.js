import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/summary', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Card::Summary />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Card::Summary>
        template block text
      </Card::Summary>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders summary items', async function(assert) {
    await render(hbs`
      <Card::Summary as |summary|>
        <summary.item @label="item label" @value="item value" />
      </Card::Summary>
    `);

    assert.dom('li').containsText('item label');
    assert.dom('li').containsText('item value');
  });
});
