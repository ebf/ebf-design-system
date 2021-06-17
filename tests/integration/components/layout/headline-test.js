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

  test('it renders #page-headline with Layout::Headline component that has three items', async function(assert) {
    await render(hbs`
      <Layout as |layout|>
        <layout.header />
        <div class="flex-grow-1">
          <Layout::Headline as |headline| >
            <headline.item @title="Item1"/>
            <headline.item @title="Item2"/>
            <headline.item @title="Item3"/>
          </Layout::Headline>
        </div>
      </Layout>
    `);
    assert.dom('#page-headline div:nth-child(1) h6').hasText('Item1');
    assert.dom('#page-headline div:nth-child(2) h6').hasText('Item2');
    assert.dom('#page-headline div:nth-child(3) h6').hasText('Item3');
  });
});
