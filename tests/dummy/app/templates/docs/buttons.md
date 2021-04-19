# Buttons

Custom button styles for actions in forms, dialogs, and more. Button sizes are constant and resized only on mobile. 

This page shows some example usage of the `<BsButton>` component. 


## Primary Buttons
<!-- {{docs/buttons/example}} -->

<button type="button" class="btn btn-primary">Primary</button>

### Primary Button With Icon

<button type="button" class="btn btn-primary">
  <i class="ebf ebf-download pr-2"></i>
  Primary with icon
</button>

### Primary Button Icon Only

<button type="button" class="btn btn-primary icon-only">
  <i class="ebf ebf-download"></i>  
</button>

### Primary Button Round

<button type="button" class="btn btn-primary icon-only round-button">
  <i class="ebf ebf-download"></i>  
</button>


## Outline Buttons

<button type="button" class="btn btn-outline-variant">Outline</button>

### Outline Button with Icon

<button type="button" class="btn btn-outline-variant">
  <i class="ebf ebf-download pr-2"></i>
  Outline
</button>

### Outline Button With Icon Only

<button type="button" class="btn btn-outline-variant icon-only">
  <i class="ebf ebf-download"></i>
</button>

### Outline Button Round

<button type="button" class="btn btn-outline-variant icon-only round-button">
  <i class="ebf ebf-download"></i>
</button>


## Outline Buttons White

<div class="bg-gray-1200 py-2 px-2">
  <button type="button" class="btn btn-outline-variant-white">Outline</button>
</div>

### Outline Button with Icon

<div class="bg-gray-1200 py-2 px-2">
  <button type="button" class="btn btn-outline-variant-white">
    <i class="ebf ebf-download pr-2"></i>
    Outline
  </button>
</div>

### Outline Button With Icon Only

<div class="bg-gray-1200 py-2 px-2">
  <button type="button" class="btn btn-outline-variant-white icon-only">
    <i class="ebf ebf-download"></i>
  </button>
</div>

### Outline Button Round

<div class="bg-gray-1200 py-2 px-2">
  <button type="button" class="btn btn-outline-variant-white icon-only round-button">
    <i class="ebf ebf-download"></i>
  </button>
</div>


## Ghost Buttons

<button type="button" class="btn btn-ghost">Outline</button>

### Ghost Button with Icon

<button type="button" class="btn btn-ghost">
  <i class="ebf ebf-download pr-2"></i>
  Outline
</button>

### Ghost Button With Icon Only

<button type="button" class="btn btn-ghost icon-only">
  <i class="ebf ebf-download"></i>
</button>

### Ghost Button Round

<button type="button" class="btn btn-ghost icon-only round-button">
  <i class="ebf ebf-download"></i>
</button>


<!-- ### Available types
{{docs/buttons}} -->
<!-- 
### Outline buttons

For a lighter touch, Buttons also come in outline-* variants with no background color.

{{docs/buttons outline=true}} -->
<!-- 
{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @outline={{true}}>
    primary
  </BsButton>
{{/docs-snippet}} -->
<!-- 
### Sizing

Fancy larger or smaller buttons? Add classes "btn-sm", "btn-lg" for additional sizes. -->
<!-- 
{{docs/buttons types=(array "primary" "secondary") size="sm"}}

{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @size="sm">
    primary
  </BsButton>
{{/docs-snippet}} -->
<!-- 
{{docs/buttons types=(array "primary" "secondary") size="lg"}}

{{#docs-snippet name="your-snippet-name.hbs"}}
  <BsButton @type="primary" @size="lg">
    primary
  </BsButton>
{{/docs-snippet}} -->

## Submit button

Used internaly by the `<ChangesetForm />` to display the submit button, but you can use in as you seem fit.
It builds upon the `<BsButton />` aggregated state where the `<Loader />` is rendered when the state is `pending`.

{{docs/buttons/loading}}