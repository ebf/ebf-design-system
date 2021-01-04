import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs-form/element/help-text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const id = 'element-id';

    this.set('id', id);
    this.set('text', 'help text');

    await render(hbs`<BsForm::Element::HelpText @id={{this.id}} @text={{this.text}} />`);

    assert.dom(this.element.querySelector('small')).exists();
    assert.dom(this.element.querySelector('small')).hasAttribute('id', id);
    assert.dom(this.element.querySelector('small')).hasClass('form-text');
    assert.dom(this.element.querySelector('small')).hasClass('text-muted');
    assert.dom(this.element.querySelector('small')).containsText('help text');
    
    await render(hbs`<BsForm::Element::HelpText @id={{this.id}} @text={{this.text}} class="my-class" disabled="true" />`);

    assert.dom(this.element.querySelector('small')).exists();
    assert.dom(this.element.querySelector('small')).hasAttribute('id', id);
    assert.dom(this.element.querySelector('small')).hasAttribute('disabled', "true");
    assert.dom(this.element.querySelector('small')).hasClass('form-text');
    assert.dom(this.element.querySelector('small')).hasClass('text-muted');
    assert.dom(this.element.querySelector('small')).hasClass('my-class');
    assert.dom(this.element.querySelector('small')).containsText('help text');
  });
});
