import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with simple text', async function(assert) {
    await render(hbs`
      <Layout::Footer @fluid={{true}}>
        Footer text
      </Layout::Footer>
    `);

    assert.dom('.container-fluid').exists();
    assert.dom('.footer').hasText('Footer text');
  });

  test('it renders with fluid container and default columns', async function(assert) {
    await render(hbs`
      <Layout::Footer
        @fluid={{true}}
        @copyright="EBG GmbH"
        @logo="/ebf-logo.png"
        @version="1.0.0"
        class="shadow"
      />
    `);

    assert.dom('.container-fluid').exists();
    assert.dom('.footer').containsText('EBG GmbH');
    assert.dom('.footer').containsText('1.0.0');
    assert.dom('.footer img').hasAttribute('src', '/ebf-logo.png')
      .hasAttribute('alt', 'EBG GmbH')
      .hasAttribute('title', 'EBG GmbH');
  });
});
