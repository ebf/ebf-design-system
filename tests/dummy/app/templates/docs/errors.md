# Errors

This addon comes with two components and an `error-resolver` service that can help you handle application runtime error
and show user friendly error messages.

## Error display component

Usualy used to display raw errors that would be resolved using the `error-resolver`. 

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="error-simple.hbs"}}
    <Errors @error={{this.error}} />
  {{/demo.example}}

  {{demo.snippet "error-simple.hbs"}}
  {{demo.snippet "error-demo-controller.js" label="controller.js"}}
{{/docs-demo}}

## Error page

Component that should be used in the application error route where the model needs to be an instance of `ResolvedError`

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="error-page.hbs"}}
    <Errors::Page
      @status={{this.resolved.status}}
      @errors={{this.resolved.errors}}
    />
  {{/demo.example}}

  {{demo.snippet "error-page.hbs"}}
  {{demo.snippet "error-demo-controller.js" label="controller.js"}}
{{/docs-demo}}

### Display additional links

Usualy on error pages that should be a link that would redirect the user to the customer support page. To do this you can simply pass
a `@support` argument with the Ember route name value of the support page.

Apart from the support you can also pass an `@home` argument with the Ember route name to render a home link.

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="error-page-links.hbs"}}
    <Errors::Page
      @home="docs.errors"
      @support="docs.errors"
      @status={{this.resolved.status}}
      @errors={{this.resolved.errors}}
    />
  {{/demo.example}}

  {{demo.snippet "error-page-links.hbs"}}
{{/docs-demo}}