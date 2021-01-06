import moment from 'moment';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | date-picker/field', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(() => {
    moment.locale('en-us');
  });

  test('it renders a date field and opens the calendar dropdown', async function(assert) {
    await render(hbs`<DatePicker::Field
      @dateFormat="YYYY-MM-DD"
      @value={{this.value}}
      @onChange={{fn (mut this.value)}}
    />`);

    assert.dom(this.element.querySelector('.date-input-group')).exists();
    assert.dom(this.element.querySelector('input[type="text"]')).exists().hasNoValue();
    assert.dom(this.element.querySelector('.ember-power-calendar')).doesNotExist();

    await click('input');

    assert.dom(this.element.querySelector('.ember-power-calendar')).exists();

    const date = moment().add(3, 'd').format('YYYY-MM-DD');
    await click(`[data-date="${date}"]`);

    assert.equal(this.value.format('YYYY-MM-DD'), date);
    assert.dom(this.element.querySelector('input[type="text"]')).exists().hasValue();
  });
});
