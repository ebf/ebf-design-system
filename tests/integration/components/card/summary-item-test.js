import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/summary-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card::SummaryItem />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Card::SummaryItem>
        template block text
      </Card::SummaryItem>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders with label and value arguments', async function(assert) {
    await render(hbs`<Card::SummaryItem @label="Label" @value="Value" />`);

    assert.dom('span').hasText('Label');
    assert.dom(this.element).containsText('Value');
  });

  test('it renders with label and value as HTML', async function(assert) {
    await render(hbs`
      <Card::SummaryItem @label="Label">
        <p>Value</p>
      </Card::SummaryItem>
    `);

    assert.dom('span').hasText('Label');
    assert.dom('p').hasText('Value');
  });
});
