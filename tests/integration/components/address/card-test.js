import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const address = {
  label: 'Mistery house',
  recipient: 'Sherlock Holmes',
  address: 'Baker Street 221B',
  additionalAddress: 'Holmes apartment',
  postalCode: 'NW1 6XE',
  state: 'Marylebone',
  city: 'London',
  country: 'UK'
};

module('Integration | Component | address/card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a card with address argument', async function(assert) {
    this.set('model', address);

    await render(hbs`
      <Address::Card @label={{this.model.label}} @address={{this.model}} />
    `);

    assert.dom(this.element.querySelector('.card-title')).containsText(address.label);
    assert.dom(this.element.querySelectorAll('p')[0]).containsText(address.recipient);
    assert.dom(this.element.querySelectorAll('p')[1]).containsText(address.address);
    assert.dom(this.element.querySelectorAll('p')[1]).containsText(address.additionalAddress);
    assert.dom(this.element.querySelectorAll('p')[2]).containsText(address.city);
    assert.dom(this.element.querySelectorAll('p')[2]).containsText(address.postalCode);
    assert.dom(this.element.querySelectorAll('p')[3]).containsText(address.state);
    assert.dom(this.element.querySelectorAll('p')[3]).containsText(address.country);

  });

  test('it renders a card with specific arguments', async function(assert) {
    this.set('model', address);

    await render(hbs`
      <Address::Card
        @label={{this.model.label}}
        @recipient={{this.model.recipient}}
        @address={{this.model.address}}
        @additionalAddress={{this.model.additionalAddress}}
        @postalCode={{this.model.postalCode}}
        @country={{this.model.country}}
        @state={{this.model.state}}
        @city={{this.model.city}}
      />
    `);

    assert.dom(this.element.querySelector('.card-title')).containsText(address.label);
    assert.dom(this.element.querySelectorAll('p')[0]).containsText(address.recipient);
    assert.dom(this.element.querySelectorAll('p')[1]).containsText(address.address);
    assert.dom(this.element.querySelectorAll('p')[1]).containsText(address.additionalAddress);
    assert.dom(this.element.querySelectorAll('p')[2]).containsText(address.city);
    assert.dom(this.element.querySelectorAll('p')[2]).containsText(address.postalCode);
    assert.dom(this.element.querySelectorAll('p')[3]).containsText(address.state);
    assert.dom(this.element.querySelectorAll('p')[3]).containsText(address.country);
  });
});
