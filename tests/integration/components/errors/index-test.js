import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { htmlSafe } from '@ember/string';
import ResolvedError from '@ebf/ember-cli-design-system/resolved-error';

module('Integration | Component | errors/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it resolves the error and renders the error message', async function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const original = service.resolve;

    service.resolve = () => new ResolvedError([{
      level: 'warn',
      html: htmlSafe('<p class="error-message">Resolved error message</p>'),
    }]);

    this.set('error', new Error('Ooops'));

    await render(hbs`<Errors @error={{this.error}} />`);

    assert.dom('.text-warn').exists();
    assert.dom('.error-message').exists().hasText('Resolved error message');

    service.resolve = original;
  });
});
