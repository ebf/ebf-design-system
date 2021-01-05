import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | inputs/counter', function(hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(function() {
    this.value = null;
  });

  test('it renders with defaults', async function(assert) {
    await render(hbs`
      <Inputs::Counter
        @label="Size"
        @placeholder="Enter your desired size"
        @value={{this.value}}
        @onChange={{fn (mut this.value)}}
      />
    `);

    assert.dom(this.element.querySelector('input')).exists()
      .hasNoValue()
      .hasAria('label', 'Size')
      .hasAttribute('min', '0')
      .hasAttribute('max', `${Number.MAX_SAFE_INTEGER}`)
      .hasAttribute('placeholder', 'Enter your desired size');

    await fillIn('input', '60');

    assert.equal(this.value, 60);
    assert.dom(this.element.querySelector('input')).hasValue('60');

    await click('.input-group-prepend .btn');

    assert.equal(this.value, 59);
    assert.dom(this.element.querySelector('input')).hasValue('59');

    await click('.input-group-append .btn');

    assert.equal(this.value, 60);
    assert.dom(this.element.querySelector('input')).hasValue('60');
  });

  test('it renders disabled decrement button', async function(assert) {
    this.set('value', 10);

    await render(hbs`
      <Inputs::Counter
        @label="Size"
        @min="10"
        @placeholder="Enter your desired size"
        @value={{this.value}}
        @onChange={{fn (mut this.value)}}
      />
    `);

    assert.dom(this.element.querySelector('.input-group-prepend .btn')).exists()
      .isDisabled()
      .hasAria('disabled', '');

    await click('.input-group-prepend .btn');

    assert.equal(this.value, 10);
    assert.dom(this.element.querySelector('input')).hasValue('10');

    await click('.input-group-append .btn');

    assert.equal(this.value, 11);
    assert.dom(this.element.querySelector('input')).hasValue('11');
    assert.dom(this.element.querySelector('.input-group-prepend .btn')).isNotDisabled();
  });

  test('it renders disabled increment button', async function(assert) {
    this.set('value', 10);

    await render(hbs`
      <Inputs::Counter
        @label="Size"
        @max="10"
        @placeholder="Enter your desired size"
        @value={{this.value}}
        @onChange={{fn (mut this.value)}}
      />
    `);

    assert.dom(this.element.querySelector('.input-group-append .btn')).exists()
      .isDisabled()
      .hasAria('disabled', '');

    await click('.input-group-append .btn');

    assert.equal(this.value, 10);
    assert.dom(this.element.querySelector('input')).hasValue('10');

    await click('.input-group-prepend .btn');

    assert.equal(this.value, 9);
    assert.dom(this.element.querySelector('input')).hasValue('9');
    assert.dom(this.element.querySelector('.input-group-append .btn')).isNotDisabled();
  });

  test('it should update value when it is within range', async function(assert) {
    this.set('value', 15);

    await render(hbs`
      <Inputs::Counter
        @label="Size"
        @min="10"
        @max="20"
        @placeholder="Enter your desired size"
        @value={{this.value}}
        @onChange={{fn (mut this.value)}}
      />
    `);

    assert.dom(this.element.querySelector('input')).hasValue('15');
    assert.dom(this.element.querySelector('.input-group-prepend .btn')).isNotDisabled();
    assert.dom(this.element.querySelector('.input-group-append .btn')).isNotDisabled();

    await fillIn('input', '60');

    assert.dom(this.element.querySelector('input')).hasValue('20');
    assert.dom(this.element.querySelector('.input-group-prepend .btn')).isNotDisabled();
    assert.dom(this.element.querySelector('.input-group-append .btn')).isDisabled();

    await fillIn('input', '9');

    assert.dom(this.element.querySelector('input')).hasValue('10');
    assert.dom(this.element.querySelector('.input-group-prepend .btn')).isDisabled();
    assert.dom(this.element.querySelector('.input-group-append .btn')).isNotDisabled();

    await fillIn('input', '19');

    assert.dom(this.element.querySelector('input')).hasValue('19');
    assert.dom(this.element.querySelector('.input-group-prepend .btn')).isNotDisabled();
    assert.dom(this.element.querySelector('.input-group-append .btn')).isNotDisabled();
  });
});
