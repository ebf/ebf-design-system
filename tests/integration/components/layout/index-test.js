import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Layout />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Layout as |layout|>
        <layout.header>
          <p>Header</p>
        </layout.header>

        <div class="contents">
          Contents
        </div>

        <layout.footer>
          <p>Footer</p>
        </layout.footer>
      </Layout>
    `);

    assert.dom('.header p').containsText('Header');
    assert.dom('.footer p').containsText('Footer');
    assert.dom('.contents').containsText('Contents');
    assert.dom('.ember-notify-cn').exists();
  });
});
