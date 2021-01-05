import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Layout::Header
        @fluid={{true}}
        @label="Test label"
        @logo="/ebf-logo.png"
      />`);

    assert.dom('.header').hasText('TEST LABEL EN', 'without content displays correctly');

    // Template block usage:
    await render(hbs`
      <Layout::Header
        @fluid={{true}}
        @label="Test label"
        @logo="/ebf-logo.png"
        as |header|
      >
        Test content
      </Layout::Header> 
    `);

    assert.dom('.header').hasText('TEST LABEL EN Test content', 'with content displays correctly');
  });
});
