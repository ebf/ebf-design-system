import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const address = {
  address: 'Baker Street 221B',
  additionalAddress: 'Holmes apartment',
  postalCode: 'NW1 6XE',
  state: 'Marylebone',
  city: 'London',
  country: 'UK'
};

module('Integration | Component | address/fieldset', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders basic address fields', async function(assert) {
    this.set('model', address);

    await render(hbs`
      <ChangesetForm @model={{this.model}} as |changeset form|>
        <Address::Fieldset @form={{form}} @changeset={{changeset}} />
      </ChangesetForm>
    `);

    assert.ok(this.element.querySelector('input[name="address"]'));
    assert.ok(this.element.querySelector('input[name="postal-code"]'));
    assert.ok(this.element.querySelector('input[name="city"]'));    
    assert.ok(this.element.querySelector('input[name="country"]'));
    assert.notOk(this.element.querySelector('input[name="additional-address"]'));
    assert.notOk(this.element.querySelector('input[name="state"]'));
    assert.notOk(this.element.querySelector('legend'));

    assert.equal(this.element.querySelector('input[name="address"]').value, address.address);
    assert.equal(this.element.querySelector('input[name="postal-code"]').value, address.postalCode);
    assert.equal(this.element.querySelector('input[name="city"]').value, address.city);
    assert.equal(this.element.querySelector('input[name="country"]').value, address.country);
  });

  test('it renders additional address fields', async function(assert) {
    this.set('model', address);

    await render(hbs`
      <ChangesetForm @model={{this.model}} as |changeset form|>
        <Address::Fieldset
          @legend="Address"
          @form={{form}}
          @changeset={{changeset}}
          @additional={{true}}
          @state={{true}}
        />
      </ChangesetForm>
    `);

    assert.ok(this.element.querySelector('input[name="address"]'));
    assert.ok(this.element.querySelector('input[name="postal-code"]'));
    assert.ok(this.element.querySelector('input[name="city"]'));    
    assert.ok(this.element.querySelector('input[name="country"]'));
    assert.ok(this.element.querySelector('input[name="additional-address"]'));
    assert.ok(this.element.querySelector('input[name="state"]'));
    assert.ok(this.element.querySelector('legend'));

    assert.dom(this.element.querySelector('legend')).hasText('Address');
    assert.equal(this.element.querySelector('input[name="address"]').value, address.address);
    assert.equal(this.element.querySelector('input[name="additional-address"]').value, address.additionalAddress);
    assert.equal(this.element.querySelector('input[name="postal-code"]').value, address.postalCode);
    assert.equal(this.element.querySelector('input[name="city"]').value, address.city);
    assert.equal(this.element.querySelector('input[name="state"]').value, address.state);
    assert.equal(this.element.querySelector('input[name="country"]').value, address.country);
  });
});
