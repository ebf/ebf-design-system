import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icon/ebf', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the icon', async function(assert) {
    await render(hbs`<Icon::Ebf @icon="icon-name" class="extra-class"/>`);

    assert.dom('i.ebf').exists();
    assert.dom('i.ebf').hasClass('icon-name');
    assert.dom('i.ebf').hasClass('extra-class');
    assert.dom('i.ebf').hasAttribute('role', 'button');
  });

  test('it renders the icon with size', async function(assert) {
    await render(hbs`<Icon::Ebf @icon="icon-name" @size="lg" class="extra-class"/>`);

    assert.dom('i.ebf').exists();
    assert.dom('i.ebf').hasClass('icon-name');
    assert.dom('i.ebf').hasClass('icon-lg');
    assert.dom('i.ebf').hasClass('extra-class');
  });

  test('it renders the icon with type', async function(assert) {
    await render(hbs`<Icon::Ebf @icon="icon-name" @type="primary" class="extra-class"/>`);

    assert.dom('i.ebf').exists();
    assert.dom('i.ebf').hasClass('icon-name');
    assert.dom('i.ebf').hasClass('icon-primary');
    assert.dom('i.ebf').hasClass('extra-class');
  });

  test('it renders the icon with size and type', async function(assert) {
    await render(hbs`<Icon::Ebf @icon="icon-name" @type="danger" @size="5x" />`);

    assert.dom('i.ebf').exists();
    assert.dom('i.ebf').hasClass('icon-name');
    assert.dom('i.ebf').hasClass('icon-danger');
    assert.dom('i.ebf').hasClass('icon-5x');
    assert.dom('i.ebf').hasNoClass('extra-class');
  });
});
