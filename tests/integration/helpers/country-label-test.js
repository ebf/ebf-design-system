import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | country-label', function(hooks) {
  setupRenderingTest(hooks);

  test('it translates a country label', async function(assert) {
    this.set('country', 'DE');

    await render(hbs`{{country-label this.country}}`);

    assert.equal(this.element.textContent.trim(), 'Germany');
  });

  test('it fails to translate a country label', async function(assert) {
    this.set('country', 'ZI');

    await render(hbs`{{country-label this.country}}`);

    assert.equal(this.element.textContent.trim(), 'Missing translation "countries.ZI" for locale "en-us"');
  });
});
