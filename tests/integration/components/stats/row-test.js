import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/row', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with stats row component', async function(assert) {
    await render(hbs`<Stats::Row @label="Label" @value="Value" />`);

    assert.dom(this.element.querySelector('.stats-row')).containsText('Label');
    assert.dom(this.element.querySelector('.stats-row')).containsText('Value');
    assert.dom(this.element.querySelector('.col-6')).exists();
    assert.dom(this.element.querySelector('.col-12')).doesNotExist();

    await render(hbs`<Stats::Row @inline={{true}} @label="Label" @value="Value" />`);

    assert.dom(this.element.querySelector('.stats-row')).containsText('Label');
    assert.dom(this.element.querySelector('.stats-row')).containsText('Value');
    assert.dom(this.element.querySelector('.col-12')).doesNotExist();
    assert.dom(this.element.querySelector('.col-6')).exists();

    await render(hbs`
      <Stats::Row @label="Label">
        <p>Value</p>
      </Stats::Row>
    `);

    assert.dom(this.element.querySelector('.stats-row')).containsText('Label');
    assert.dom(this.element.querySelector('.stats-row p')).containsText('Value');
  });
});
