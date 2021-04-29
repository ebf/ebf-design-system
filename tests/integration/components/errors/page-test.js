import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { htmlSafe } from '@ember/string';

module('Integration | Component | errors/page', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the status code and error messages', async function(assert) {
    assert.equal(true, true);
    this.set('status', 404);
    this.set('errors', [{
      html: htmlSafe('<p class="first-error-message">First error message</p>'),
    }, {
      html: htmlSafe('<p class="second-error-message">Second error message</p>'),
    }]);

    await render(hbs`<Errors::Page @status={{this.status}} @errors={{this.errors}} />`);

    assert.dom('p.display-2').hasText('404');
    assert.dom('h1.display-4').hasText('Houston!? We have a problem!');
    assert.dom('p.first-error-message').exists().hasText('First error message');
    assert.dom('p.second-error-message').exists().hasText('Second error message');
  });
});
