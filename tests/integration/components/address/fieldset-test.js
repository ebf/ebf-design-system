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

    assert.ok(this.element.querySelector('[name="address"]'));
    assert.ok(this.element.querySelector('[name="zip"]'));
    assert.ok(this.element.querySelector('[name="city"]'));    
    assert.ok(this.element.querySelector('[name="country"]'));
    assert.notOk(this.element.querySelector('[name="additional-address"]'));
    assert.notOk(this.element.querySelector('[name="state"]'));

    assert.equal(this.element.querySelector('[name="address"] input').value, address.address);
    assert.equal(this.element.querySelector('[name="zip"] input').value, address.postalCode);
    assert.equal(this.element.querySelector('[name="city"] input').value, address.city);
    assert.equal(this.element.querySelector('[name="country"] input').value, address.country);
  });

  test('it renders additional address fields', async function(assert) {
    this.set('model', address);

    await render(hbs`
      <ChangesetForm @model={{this.model}} as |changeset form|>
        <Address::Fieldset @form={{form}} @changeset={{changeset}} @additional={{true}} @state={{true}}/>
      </ChangesetForm>
    `);

    assert.ok(this.element.querySelector('[name="address"]'));
    assert.ok(this.element.querySelector('[name="zip"]'));
    assert.ok(this.element.querySelector('[name="city"]'));    
    assert.ok(this.element.querySelector('[name="country"]'));
    assert.ok(this.element.querySelector('[name="additional-address"]'));
    assert.ok(this.element.querySelector('[name="state"]'));

    assert.equal(this.element.querySelector('[name="address"] input').value, address.address);
    assert.equal(this.element.querySelector('[name="additional-address"] input').value, address.additionalAddress);
    assert.equal(this.element.querySelector('[name="zip"] input').value, address.postalCode);
    assert.equal(this.element.querySelector('[name="city"] input').value, address.city);
    assert.equal(this.element.querySelector('[name="state"] input').value, address.state);
    assert.equal(this.element.querySelector('[name="country"] input').value, address.country);
  });
});
