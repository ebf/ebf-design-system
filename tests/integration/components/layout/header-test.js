import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Layout::Header />`);

    assert.dom('.header').exists();
    assert.dom('#page-headline').exists();
    assert.dom('#page-wizard').exists();

    // Template block usage:
    await render(hbs`
      <Layout::Header as |header|>
        <header.brander />
        <header.navbar />
      </Layout::Header> 
    `);

    assert.dom('.navbar').exists();
    assert.dom('.navbar-light').exists();
  });
});
