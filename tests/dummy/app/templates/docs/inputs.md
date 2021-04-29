# Inputs

Page contanining various input form components

## Counter

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="counter-simple.hbs"}}
    <Inputs::Counter
      @label="Size"
      @placeholder="Enter your desired amount"
      @min="1"
      @max="999"
      @value={{this.value}}
      @onChange={{fn (mut this.value)}}
    />
  {{/demo.example}}

  {{demo.snippet "counter-simple.hbs"}}
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

    <p class="mt-4">Search term: <span class="text-success">{{this.search}}</span></p>
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

    <p class="mt-4">Search term: <span class="text-success">{{this.search}}</span></p>
  {{/demo.example}}

  {{demo.snippet "search-reset.hbs"}}
{{/docs-demo}}