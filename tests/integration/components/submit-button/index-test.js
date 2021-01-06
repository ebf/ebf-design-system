import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | submit-button/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the loading indicator', async function(assert) {
    this.set('state', 'default');
    this.set('clicked', () => this.set('state', 'pending'));

    await render(hbs`<SubmitButton @state={{this.state}} @label="Save" @onClick={{this.clicked}} />`);

    assert.dom(this.element.querySelector('button')).containsText('Save');
    assert.dom(this.element.querySelector('.loading-icon')).doesNotExist();

    await click('button');

    assert.dom(this.element.querySelector('button')).hasNoText();
    assert.dom(this.element.querySelector('.loading-icon')).exists();

    this.set('state', 'fullfilled');

    assert.dom(this.element.querySelector('button')).containsText('Save');
    assert.dom(this.element.querySelector('.loading-icon')).doesNotExist();
  });
});
