# Loaders

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-normal.hbs"}}
    <Loader />
  {{/demo.example}}

  {{demo.snippet "loader-normal.hbs"}}
{{/docs-demo}}

You can also pass a `@label` argument to show your custom loading text:

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-label.hbs"}}
    <Loader @label="Loading..." />
  {{/demo.example}}

  {{demo.snippet "loader-label.hbs"}}
{{/docs-demo}}

Or define your custom markup as label:

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-yield.hbs"}}
    <Loader>
      <div class="text-center">
        <h5 class="my-1">Loading state...</h5>
        <p class="my-1 text-muted">Be patient while content is loading</p>
      </div>
    </Loader>
  {{/demo.example}}

  {{demo.snippet "loader-yield.hbs"}}
{{/docs-demo}}

## Promise Loader

Handy component when dealing with asyncronous operations, like HTTP requests, that would show the `<Loader />` component while the Promise
is in a pending state. Depending on the promise state it would either show the `<Errors/>` component if the promise is rejected or it would
render your defined component block template when the promise is fulfilled.

{{#docs-demo as |demo|}}
  {{#demo.example name="promise-loader.hbs"}}
    <div class="btn-group mb-3">
      <BsButton @type="primary" @onClick={{fn this.execute}}>
        Trigger successfull request
      </BsButton>

      <BsButton @type="danger" @onClick={{fn this.execute true}}>
        Trigger unsuccessfull request
      </BsButton>
    </div>

    <PromiseLoader @promise={{this.promise}} as |result|>
      <p>{{result}}</p>
    </PromiseLoader>
  {{/demo.example}}

  {{demo.snippet "promise-loader.hbs"}}
  {{demo.snippet "loaders-controller.js" label="controller.js"}}
{{/docs-demo}}

## Sizes

You can customize the loader size by specifying the `@size` attribute to either `sx`, `sm`, `lg` or `xl`.

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-extra-small.hbs"}}
    <Loader @size="xs" />
  {{/demo.example}}

  {{demo.snippet "loader-extra-small.hbs" label="Extra small loader"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-small.hbs"}}
    <Loader @size="sm" />
  {{/demo.example}}

  {{demo.snippet "loader-small.hbs" label="Small loader"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-large.hbs"}}
    <Loader @size="lg" />
  {{/demo.example}}

  {{demo.snippet "loader-large.hbs" label="Large loader"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="loader-extra-large.hbs"}}
    <Loader @size="xl" />
  {{/demo.example}}

  {{demo.snippet "loader-extra-large.hbs" label="Extra large loader"}}
{{/docs-demo}}