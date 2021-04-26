# Buttons

Custom button styles for actions in forms, dialogs, and more. Button sizes are constant and resized only on mobile. 

This page shows some example usage of the `<BsButton>` component. 


## Primary Buttons
<!-- {{docs/buttons/example}} -->

{{#docs-demo as |demo|}}
  {{#demo.example name="primary-button.hbs"}}
  <BsButton @type="primary">
    Primary 
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "primary-button.hbs"}}
{{/docs-demo}}

### Primary Button With Icon

{{#docs-demo as |demo|}}
  {{#demo.example name="primary-button-icon.hbs"}}
  <BsButton @type="primary">
    <i class="ebf ebf-download pr-2"></i>
    Primary 
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "primary-button-icon.hbs"}}
{{/docs-demo}}

### Primary Button Icon Only

{{#docs-demo as |demo|}}
  {{#demo.example name="primary-button-icon-only.hbs"}}
  <BsButton @type="primary" class="btn-icon">
    <i class="ebf ebf-download"></i> 
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "primary-button-icon-only.hbs"}}
{{/docs-demo}}

### Primary Button Round

{{#docs-demo as |demo|}}
  {{#demo.example name="simple-icon-round-button.hbs"}}
  <BsButton @type="primary" class="btn-icon btn-round">
    <i class="ebf ebf-download"></i>  
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "simple-icon-round-button.hbs"}}
{{/docs-demo}}


## Outline Buttons

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-button.hbs"}}
  <BsButton @type="outline">
    Outline 
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-button.hbs"}}
{{/docs-demo}}

### Outline Button with Icon

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-button-icon.hbs"}}
  <BsButton @type="outline">
    <i class="ebf ebf-download pr-2"></i>
    Outline
  </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-button-icon.hbs"}}
{{/docs-demo}}

### Outline Button With Icon Only

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-button-icon-only.hbs"}}
    <BsButton @type="outline" class="btn-icon">
      <i class="ebf ebf-download"></i>
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-button-icon-only.hbs"}}
{{/docs-demo}}

### Outline Button Round

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-button-icon-round.hbs"}}
    <BsButton @type="outline"  class="btn-icon btn-round">
      <i class="ebf ebf-download"></i>
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-button-icon-round.hbs"}}
{{/docs-demo}}


## Outline Buttons White

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-white.hbs" class="bg-gray-1200"}}
    <BsButton @type="white" @outline={{true}}>
      Outline White
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-white.hbs"}}
{{/docs-demo}}


### Outline Button with Icon

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-white-icon.hbs" class="bg-gray-1200"}}
    <BsButton @type="white" @outline={{true}}>
      <i class="ebf ebf-download mr-2"></i>
      Outline White
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-white-icon.hbs"}}
{{/docs-demo}}

### Outline Button With Icon Only

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-white-icon-only.hbs" class="bg-gray-1200"}}
    <BsButton @type="white" @outline={{true}} class="btn-icon">
      <i class="ebf ebf-download"></i>  
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-white-icon-only.hbs"}}
{{/docs-demo}}

### Outline Button Round

{{#docs-demo as |demo|}}
  {{#demo.example name="outline-white-icon-round-button.hbs" class="bg-gray-1200"}}
    <BsButton @type="white" @outline={{true}} class="btn-icon btn-round">
      <i class="ebf ebf-download"></i>  
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "outline-white-icon-round-button.hbs"}}
{{/docs-demo}}


## Ghost Buttons

{{#docs-demo as |demo|}}
  {{#demo.example name="ghost-button.hbs"}}
    <BsButton @type="ghost">
      Ghost  
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "ghost-button.hbs"}}
{{/docs-demo}}

### Ghost Button with Icon


{{#docs-demo as |demo|}}
  {{#demo.example name="ghost-button-icon.hbs"}}
    <BsButton @type="ghost">
      <i class="ebf ebf-download pr-2"></i>
      Ghost  
    </BsButton>
  {{/demo.example}}
  {{demo.snippet "ghost-button-icon.hbs"}}
{{/docs-demo}}


### Ghost Button With Icon Only

{{#docs-demo as |demo|}}
  {{#demo.example name="ghost-button-icon-only.hbs"}}
    <BsButton @type="ghost" class="btn-icon">
      <i class="ebf ebf-download"></i>        
    </BsButton>
  {{/demo.example}}
  {{demo.snippet "ghost-button-icon-only.hbs"}}
{{/docs-demo}}

### Ghost Button Round

{{#docs-demo as |demo|}}
  {{#demo.example name="ghost-button-icon-only-round.hbs"}}
    <BsButton @type="ghost" class="btn-icon btn-round">
      <i class="ebf ebf-download"></i>        
    </BsButton>
  {{/demo.example}}
  {{demo.snippet "ghost-button-icon-only-round.hbs"}}
{{/docs-demo}}


## Submit button

Used internaly by the `<ChangesetForm />` to display the submit button, but you can use in as you seem fit.
It builds upon the `<BsButton />` aggregated state where the `<Loader />` is rendered when the state is `pending`.

{{docs/buttons/loading}}
