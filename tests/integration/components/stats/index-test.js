import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with yielded row component', async function(assert) {
    await render(hbs`<Stats @inline={{true}} @title="Stats" />`);

    assert.dom(this.element.querySelector('.stats')).hasClass('stats-inline');
    assert.dom(this.element.querySelector('h3')).containsText('Stats');

    await render(hbs`
      <Stats as |stats|>
        <stats.row @label="Label" @value="Value" />
      </Stats>
    `);

    assert.dom(this.element.querySelector('.stats')).hasNoClass('stats-inline');
    assert.dom(this.element.querySelector('.stats-row')).containsText('Label');
    assert.dom(this.element.querySelector('.stats-row')).containsText('Value');
  });
});
