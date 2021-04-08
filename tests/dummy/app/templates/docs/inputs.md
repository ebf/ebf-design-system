# Inputs

Page contanining various input form components

## Counter

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="counter-simple.hbs"}}
    <Inputs::Counter
      @label="Size"
      @placeholder="Enter your desired size"
      @min="10"
      @max="20"
      @value={{this.value}}
      @onChange={{fn (mut this.value)}}
    />
  {{/demo.example}}

  {{demo.snippet "counter-simple.hbs"}}
{{/docs-demo}}

### Sizing

Simply pass the `input-group-sm` or `input-group-xl` class to the component to size the counter component

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="counter-size.hbs"}}
    <Inputs::Counter
      class="input-group-sm my-3"
      @label="Size"
      @placeholder="Enter your desired size"
      @min="10"
      @max="20"
      @value={{this.value}}
      @onChange={{fn (mut this.value)}}
    />

    <Inputs::Counter
      class="input-group-lg my-3"
      @label="Size"
      @placeholder="Enter your desired size"
      @min="10"
      @max="20"
      @value={{this.value}}
      @onChange={{fn (mut this.value)}}
    />
  {{/demo.example}}

  {{demo.snippet "counter-size.hbs"}}
{{/docs-demo}}

## Search field

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="search-simple.hbs"}}
    <Inputs::Search
      @placeholder="Enter your search query"
      @value={{this.search}}
      @onChange={{fn (mut this.search)}}
      class="form-group"
    />

    <p>Search term: {{this.search}}</p>
  {{/demo.example}}

  {{demo.snippet "search-simple.hbs"}}
{{/docs-demo}}

### With reset button

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="search-reset.hbs"}}
    <Inputs::Search
      @placeholder="Enter your search query"
      @value={{this.search}}
      @onChange={{fn (mut this.search)}}
      @onReset={{fn (mut this.search) null}}
      class="form-group"
    />

    <p>Search term: {{this.search}}</p>
  {{/demo.example}}

  {{demo.snippet "search-reset.hbs"}}
{{/docs-demo}}