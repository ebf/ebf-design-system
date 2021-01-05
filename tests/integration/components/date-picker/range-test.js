import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | date-picker/range', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders default range list', async function(assert) {
    await render(hbs`
      <DatePicker::Range
        @selected={{this.selected.id}}
        @onSelect={{fn (mut this.selected)}}
      />
    `);

    assert.dom(this.element.querySelector('.nav')).exists()
      .hasAttribute('role', 'navigation')
      .hasAria('label', 'Date ranges');

    assert.equal(this.element.querySelectorAll('.nav-link').length, 5);
    assert.dom(this.element.querySelector('.nav-link.active')).doesNotExist();

    await click('.nav-link:nth-child(2)');

    assert.dom(this.element.querySelector('.nav-link:nth-child(2)')).exists()
      .hasClass('active')
      .hasAria('selected', '');
  });
});
