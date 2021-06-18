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
      @dark={{true}}
      @copyright="Deutsche Telekom AG"
      @logo="/telekom-logo-magenta.svg"
      @label="Deutsche Telekom AG"
      @version="1.0.0"
      class="shadow" 
    />
    `);

    assert.dom('.container-fluid').exists();
    assert.dom('.footer').containsText('Deutsche Telekom AG');
    assert.dom('.footer').containsText('1.0.0');
    assert.dom('.footer img').hasAttribute('src', '/telekom-logo-magenta.svg')
      .hasAttribute('alt', 'Deutsche Telekom AG')
      .hasAttribute('title', 'Deutsche Telekom AG');
  });
});
