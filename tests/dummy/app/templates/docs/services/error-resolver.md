# Error resolver

Ember Service used to transform caught runtime errors into meaningfull messages that can be shown to the user.

This service is usually used in Ember Routes to handle `error` actions. Best place for it would be in your
Application Route where it would catch all `error` actions and show an error notifications using the `ember-notify` addon.

<BsAlert @type="default" @dismissible={{false}}>
  The Ember notify container component is included by default in the `<Layout />` component. If you do not use this component then you would
  need to add this to your `application.hbs` template.
</BsAlert>

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="error-resolver-example.hbs"}}
    <BsButton @onClick={{fn this.trigger}}>
      Trigger error
    </BsButton>

    <BsButton @onClick={{fn this.trigger "errors.not-found"}}>
      Trigger not found error
    </BsButton>

    <BsButton @onClick={{fn this.trigger "Custom error message"}}>
      Trigger custom error
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "error-resolver-example.hbs"}}
  {{demo.snippet "application-error-route.js" label="application.js"}}
  {{demo.snippet "error-resolver-route.js" label="controller.js"}}
{{/docs-demo}}