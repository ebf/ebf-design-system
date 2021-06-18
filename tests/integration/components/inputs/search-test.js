import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { blur, click, fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | inputs/search', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the search field and updates the term on blur', async function(assert) {
    this.set('term', 'search term');

    await render(hbs`
      <Inputs::Search
        @placeholder="Enter your search query"
        @value={{this.term}}
        @onChange={{fn (mut this.term)}}
        class="form-group"
      />
    `);

    assert.dom(this.element.querySelector('input')).hasValue(this.term);

    await fillIn('input', 'search term changed');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term');

    await blur('input');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term changed');
  });

  test('it renders the search field and updates the term on enter', async function(assert) {
    this.set('term', 'search term');

    await render(hbs`
      <Inputs::Search
        @placeholder="Enter your search query"
        @value={{this.term}}
        @onChange={{fn (mut this.term)}}
        class="form-group"
      />
    `);

    assert.dom(this.element.querySelector('input')).hasValue(this.term);

    await fillIn('input', 'search term changed');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term');

    await triggerKeyEvent('input', 'keydown', 'Enter');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term changed');
  });

  test('it renders the search field and updates the term on search icon click', async function(assert) {
    this.set('term', 'search term');

    await render(hbs`
      <Inputs::Search
        @placeholder="Enter your search query"
        @value={{this.term}}
        @onChange={{fn (mut this.term)}}
        class="form-group"
      />
    `);

    assert.dom(this.element.querySelector('input')).hasValue(this.term);

    await fillIn('input', 'search term changed');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term');

    await click('i');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term changed');
  });

  test('it can reset the search term', async function(assert) {
    this.set('term', 'search term');

    await render(hbs`
      <Inputs::Search
        @placeholder="Enter your search query"
        @value={{this.term}}
        @onChange={{fn (mut this.term)}}
        @onReset={{fn (mut this.term) null}}
        class="form-group"
      />
    `);

    assert.dom(this.element.querySelector('input')).hasValue(this.term);

    await fillIn('input', 'search term changed');

    assert.dom(this.element.querySelector('input')).hasValue('search term changed');
    assert.equal(this.term, 'search term');

    await click('i.ebf-minus-circle');

    assert.dom(this.element.querySelector('input')).hasNoValue();
    assert.equal(this.term, null);
  });
});
