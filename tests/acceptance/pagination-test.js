import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | pagination', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /docs/pagination and updating page query params', async function(assert) {
    await visit('/docs/pagination');

    assert.equal(currentURL(), '/docs/pagination');

    await click('.page-item:nth-child(4) a');
    assert.equal(currentURL(), '/docs/pagination?page=2');

    await click('.page-previous a');
    assert.equal(currentURL(), '/docs/pagination');

    await click('.page-first a');
    assert.equal(currentURL(), '/docs/pagination');

    await click('.page-next a');
    assert.equal(currentURL(), '/docs/pagination?page=2');

    await click('.page-last a');
    assert.equal(currentURL(), '/docs/pagination?page=3');

    await click('.page-previous a');
    assert.equal(currentURL(), '/docs/pagination?page=2');
  });
});
