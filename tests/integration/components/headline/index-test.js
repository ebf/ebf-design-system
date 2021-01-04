import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | headline', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders title and subtitle', async function(assert) {
    await render(hbs`<Headline />`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      <Headline @title="Title"/>
    `);

    assert.dom(this.element).hasText('Title');

    await render(hbs`
      <Headline @title="Title" @subtitle="subtitle" class="custom-class" aria-label="label" />
    `);

    const element = this.element.querySelector('h1');

    assert.dom(element).includesText('Title');
    assert.dom(element).includesText('subtitle');
    assert.dom(element).hasClass('custom-class');
    assert.dom(element).hasAttribute('aria-label', 'label');
  });
});
