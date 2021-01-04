import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, clearRender, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progress/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a completed item and select it on click', async function(assert) {
    this.set('clicked', name => this.set('selected', name));

    await render(hbs`<Progress::Item
      @name="first"
      @label="Step"
      @selected={{eq this.selected "first"}}
      @completed={{true}}
      @onClick={{this.clicked}}
    />`);

    assert.dom(this.element.querySelector('.progress-bar-item')).exists()
      .hasAttribute('role', 'button')
      .hasAttribute('aria-label', 'Step')
      .hasNoAttribute('aria-selected')
      .hasNoAttribute('aria-disabled')
      .hasClass('completed')
      .hasNoClass('selected')
      .hasNoClass('disabled');
    assert.dom(this.element.querySelector('.progress-label')).exists().hasText('Step');
    assert.dom(this.element.querySelector('.progress-dot')).exists().hasNoText();

    await click('.progress-bar-item');

    assert.equal(this.selected, 'first');
    assert.dom(this.element.querySelector('.progress-bar-item')).exists()
      .hasAttribute('aria-selected')
      .hasClass('selected');
  });

  test('it renders a disabled item that should not be clickable', async function(assert) {
    this.set('clicked', null);
    this.set('clicked', name => this.set('selected', name));

    await render(hbs`<Progress::Item
      @name="first"
      @label="Step"
      @disabled={{true}}
      @onClick={{this.clicked}}
    />`);

    assert.dom(this.element.querySelector('.progress-bar-item')).exists()
      .hasClass('disabled')
      .hasAttribute('aria-disabled')
      .hasNoAttribute('aria-selected');

    await click('.progress-bar-item');

    assert.equal(this.selected, null);
  });

  test('it should register and unregister an item', async function(assert) {
    this.set('register', item => this.set('registered', item));
    this.set('unregister', name => this.set('unregistered', name));

    await render(hbs`<Progress::Item
      @name="first"
      @label="Step"
      @register={{this.register}}
      @unregister={{this.unregister}}
    />`);

    assert.notOk(this.unregistered);
    assert.equal(this.registered.name, 'first');
    assert.false(this.registered.selected);
    assert.false(this.registered.disabled);
    assert.false(this.registered.completed);

    await clearRender();

    assert.equal(this.unregistered, 'first');
  });
});
