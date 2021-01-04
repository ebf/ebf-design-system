import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progress/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const registered = [];

    this.set('register', item => registered.push(item));

    await render(hbs`<Progress @register={{this.register}} />`);

    console.log(registered);
    console.log(this.element.innerHTML);

    assert.equal(registered.length, 1);
  });
});
