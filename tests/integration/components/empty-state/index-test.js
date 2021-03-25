import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | empty-state/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with a label and icon', async function(assert) {
    await render(hbs`<EmptyState @icon="user" @label="Empty state" />`);

    assert.dom(this.element.querySelector('img')).doesNotExist();
    assert.dom(this.element.querySelector('.ebf.user')).exists();
    assert.dom(this.element.querySelector('h4')).containsText('Empty state');

    await render(hbs`
      <<EmptyState @icon="user" @label="Empty state" >
        <p>Additional text</p>
      </EmptyState>
    `);

    assert.dom(this.element.querySelector('img')).doesNotExist();
    assert.dom(this.element.querySelector('.ebf.user')).exists();
    assert.dom(this.element.querySelector('h4')).containsText('Empty state');
    assert.dom(this.element.querySelector('p')).containsText('Additional text');
  });

  test('it renders with a label and an image', async function(assert) {
    await render(hbs`<EmptyState @image="image.png" @label="Empty state" />`);

    assert.dom(this.element.querySelector('img')).exists();
    assert.dom(this.element.querySelector('img')).hasAttribute('src', 'image.png');
    assert.dom(this.element.querySelector('img')).hasAttribute('alt', 'Empty state');
    assert.dom(this.element.querySelector('img')).hasNoAttribute('height');
    assert.dom(this.element.querySelector('img')).hasNoAttribute('width');
    assert.dom(this.element.querySelector('h4')).containsText('Empty state');
    assert.dom(this.element.querySelector('.icon')).doesNotExist();

    await render(hbs`
      <<EmptyState @image="image.png" @height="200" @width="120" @label="Empty state" >
        <p>Additional text</p>
      </EmptyState>
    `);

    assert.dom(this.element.querySelector('img')).exists();
    assert.dom(this.element.querySelector('img')).hasAttribute('src', 'image.png');
    assert.dom(this.element.querySelector('img')).hasAttribute('alt', 'Empty state');
    assert.dom(this.element.querySelector('img')).hasAttribute('height', '200');
    assert.dom(this.element.querySelector('img')).hasAttribute('width', '120');
    assert.dom(this.element.querySelector('h4')).containsText('Empty state');
    assert.dom(this.element.querySelector('p')).containsText('Additional text');
    assert.dom(this.element.querySelector('.icon')).doesNotExist();
  });

  test('it should not render an icon if image is defined', async function(assert) {
    await render(hbs`<EmptyState @image="image.png" @icon="user" />`);

    assert.dom(this.element.querySelector('img')).exists();
    assert.dom(this.element.querySelector('.icon')).doesNotExist();
  });
});
