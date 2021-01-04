# Buttons

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

This page shows some example usage of the `<BsButton>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Button.html)

### Simple example
{{docs/buttons/example}}

### Available types
{{docs/buttons}}

### Outline buttons

For a lighter touch, Buttons also come in outline-* variants with no background color.

{{docs/buttons outline=true}}

{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @outline={{true}}>
    primary
  </BsButton>
{{/docs-snippet}}

### Sizing

Fancy larger or smaller buttons? Add classes "btn-sm", "btn-lg" for additional sizes.

{{docs/buttons types=(array "primary" "secondary") size="sm"}}

{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @size="sm">
    primary
  </BsButton>
{{/docs-snippet}}

{{docs/buttons types=(array "primary" "secondary") size="lg"}}

{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @size="lg">
    primary
  </BsButton>
{{/docs-snippet}}

### Submit button

Used internaly by the `<ChangesetForm />` to display the submit button, but you can use in as you seem fit.
It builds upon the `<BsButton />` aggregated state where the `<Loader />` is rendered when the state is `pending`.

{{docs/buttons/loading}}