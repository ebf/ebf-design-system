import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/headline', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders inside a defined element', async function(assert) {
    await render(hbs`
      <div id="page-headline"></div>

      <Layout::Headline>
        <p>Contents</p>
      </Layout::Headline>
    `);

    assert.dom('#page-headline p').hasText('Contents');
  });

  test('it renders with Layout component', async function(assert) {
    await render(hbs`
      <Layout as |layout|>
        <layout.header>
          <p>Header</p>
        </layout.header>
    
        <layout.headline>
          <p>Contents</p>
        </layout.headline>
      </Layout>
    `);

    assert.dom('.header p').containsText('Header');
    assert.dom('#page-headline p').hasText('Contents');
  });
});
