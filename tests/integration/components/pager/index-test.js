import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pager/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders pager and updates the page links', async function(assert) {
    this.set('page', 1);

    await render(hbs`<Pager @page={{this.page}} @pages={{10}} @total={{20}} />`);

    assert.equal(this.element.querySelectorAll('.page-page a').length, 5);
    assert.dom(this.element.querySelector('.page-first a')).hasAttribute('disabled');
    assert.dom(this.element.querySelector('.page-previous a')).hasAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[0]).containsText('1').hasAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[1]).containsText('2').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[2]).containsText('3').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[3]).containsText('4').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[4]).containsText('5').hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-total')).containsText(20);
    assert.dom(this.element.querySelector('.page-next a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-last a')).hasNoAttribute('disabled');

    this.set('page', 6);

    assert.equal(this.element.querySelectorAll('.page-page a').length, 5);
    assert.dom(this.element.querySelector('.page-first a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-previous a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[0]).containsText('4').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[1]).containsText('5').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[2]).containsText('6').hasAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[3]).containsText('7').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[4]).containsText('8').hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-total')).containsText(20);
    assert.dom(this.element.querySelector('.page-next a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-last a')).hasNoAttribute('disabled');

    this.set('page', 10);

    assert.equal(this.element.querySelectorAll('.page-page a').length, 5);
    assert.dom(this.element.querySelector('.page-first a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelector('.page-previous a')).hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[0]).containsText('6').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[1]).containsText('7').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[2]).containsText('8').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[3]).containsText('9').hasNoAttribute('disabled');
    assert.dom(this.element.querySelectorAll('.page-page a')[4]).containsText('10').hasAttribute('disabled');
    assert.dom(this.element.querySelector('.page-total')).containsText(20);
    assert.dom(this.element.querySelector('.page-next a')).hasAttribute('disabled');
    assert.dom(this.element.querySelector('.page-last a')).hasAttribute('disabled');
  });
});
