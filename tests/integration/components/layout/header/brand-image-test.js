import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/header/brand-image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Layout::Header::BrandImage />`);

    assert.dom(this.element.querySelector('img')).doesNotExist();
    assert.dom(this.element.querySelector('span')).doesNotExist();

    await render(hbs`
      <Layout::Header::BrandImage
        @src="/image.png"
        @label="Brand"
      />
    `);

    assert.dom(this.element.querySelector('img')).exists()
      .hasAttribute('src', '/image.png')
      .hasAttribute('title', 'Brand')
      .hasAttribute('alt', 'Brand');
    assert.dom(this.element.querySelector('span')).exists().containsText('Brand');
  });
});
