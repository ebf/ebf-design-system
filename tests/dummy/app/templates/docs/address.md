# Address

## Form fieldset

Component that can be used when you wish to render common address fields in your `<ChangesetForm />` or `<BsForm />` components.

<div class="d-flex">
  <div class="w-50 form-group form-check mb-0">
    <Input id="additional" @type="checkbox" @checked={{this.additional}} name="additional" />
    <label for="additional" class="form-check-label">Show additional address field</label>
  </div>
  <div class="w-50 form-group form-check mb-0">
    <Input id="state" @type="checkbox" @checked={{this.state}} name="state" class="form-check-input" />
    <label for="state" class="form-check-label">Show state field</label>
  </div>
</div>

{{date-picker/range selected=this.range.id onSelect=(fn (mut this.range)) }}
{{log this.range}}

{{date-picker/field value=this.value onChange=(fn (mut this.value)) }}
{{log this.value}}

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="address-fieldset.hbs"}}
    <ChangesetForm
      @model={{this.model}}
      @validators="address"
      @onSubmit={{fn this.save}}
      as |changeset form|
    >
      <Address::Fieldset
        @form={{form}}
        @legend="Delivery address"
        @state={{this.state}}
        @additional={{this.additional}}
      />
    </ChangesetForm>
  {{/demo.example}}

  {{demo.snippet "address-fieldset.hbs"}}
  {{demo.snippet "address-demo-controller.js" label="controller.js"}}
  {{demo.snippet "address-demo-validations.js" label="validations/address.js"}}
{{/docs-demo}}

## Card

{{#docs-demo as |demo|}}
  {{#demo.example name="address-card.hbs"}}
    <Address::Card
      @label="Delivery address"
      @recipient="John doe"
      @address="Fake street 123"
      @city="NYC"
      @postalCode="12345"
      @country="USA"
    />
  {{/demo.example}}

  {{demo.snippet "address-card.hbs"}}
{{/docs-demo}}

This component can also accept an address object, like so:

{{#docs-demo as |demo|}}
  {{#demo.example name="address-card-hash.hbs"}}
    <Address::Card
      @label="Delivery address"
      @address={{hash
        label="Delivery address"
        recipient="John doe"
        address="Fake street 123"
        city="NYC"
        postalCode="12345"
        country="USA"
      }}
    />
  {{/demo.example}}

  {{demo.snippet "address-card-hash.hbs"}}
{{/docs-demo}}