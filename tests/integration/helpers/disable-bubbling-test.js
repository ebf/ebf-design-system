import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | disable-bubbling', function(hooks) {
  setupRenderingTest(hooks);

  test('it should prevent event bubbling', async function(assert) {
    let event;
    let parentClicked = false;

    this.set('parentHandler', () => { parentClicked = true; });
    this.set('childHandler', (e) => { event = e; });

    await render(hbs`
      <BsButton @type="primary" @onClick={{fn this.parentHandler}}>
        <button id="button" type="button" {{on "click" (disable-bubbling (fn this.childHandler))}}>
          Button
        </button>
      </BsButton>
    `);

    await click('#button');

    assert.ok(!!event);
    assert.false(parentClicked);
    assert.true(event.defaultPrevented);

    event = null;
    parentClicked = false;

    await click('.btn');

    assert.notOk(event);
    assert.true(parentClicked);
  });
});
