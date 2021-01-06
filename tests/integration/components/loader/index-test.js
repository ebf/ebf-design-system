import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a spinner without label', async function(assert) {
    await render(hbs`<Loader />`);

    assert.dom(this.element.querySelector('.loading-spinner')).exists();
    assert.equal(this.element.querySelector('p'), null);
  });

  test('it renders a spinner with label', async function(assert) {
    await render(hbs`<Loader @label="Loading label"/>`);

    assert.dom(this.element.querySelector('.loading-spinner')).exists();
    assert.dom(this.element.querySelector('p')).hasText('Loading label');
  });

  test('it renders a spinner with yield', async function(assert) {
    await render(hbs`<Loader>
      <p class="yielded">Yielding Loading label</p>
    </Loader>`);

    assert.dom(this.element.querySelector('.loading-spinner')).exists();
    assert.dom(this.element.querySelector('.yielded')).hasText('Yielding Loading label');
  });
});
