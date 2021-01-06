import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Template block usage:
    await render(hbs`
      <Card as |card|>
        <card.icon @icon="icon-name" />
        <card.title @title="Title" />
        <card.description @value="Description" />
      </Card>
    `);

    assert.dom('.ebf-card-icon').hasClass('icon-name');
    assert.dom('.card-title').hasText('Title');
    assert.dom('.card-text').hasText('Description');
  });
});
