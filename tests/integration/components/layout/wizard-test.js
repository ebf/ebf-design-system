import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/wizard', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <div id="page-wizard"></div>

      <Layout::Wizard>
        <p>Contents</p>
      </Layout::Wizard>
    `);

    assert.dom('#page-wizard p').hasText('Contents');
  });

  test('it renders with Layout', async function(assert) {
    await render(hbs`
      <Layout as |layout|>
        <layout.header>
          <p>Header</p>
        </layout.header>

        <layout.wizard>
          <p>Contents</p>
        </layout.wizard>
      </Layout>
    `);

    assert.dom('.header p').containsText('Header');
    assert.dom('#page-wizard p').hasText('Contents');
  });
});
