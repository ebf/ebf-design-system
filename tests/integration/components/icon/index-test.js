import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icon/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.equal(true, true);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // await render(hbs`<Icon::Index />`);

    // assert.equal(this.element.textContent.trim(), '');

    // // Template block usage:
    // await render(hbs`
    //   <Icon::Index>
    //     template block text
    //   </Icon::Index>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
