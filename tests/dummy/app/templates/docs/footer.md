# Footer

The `Layout::Footer` uses a Bootstrap container to render child elements, if you wish to have a fluid `.container` you pass
a `@fluid={{true}}` argument to the component.

{{#docs-demo as |demo|}}
  {{#demo.example name="footer.hbs"}}
    <Layout::Footer
      @fluid={{true}}
      @copyright="EBG GmbH"
      @logo="/ebf-logo.png"
      @version="1.0.0"
      class="shadow"
    />
  {{/demo.example}}

  {{demo.snippet "footer.hbs"}}
{{/docs-demo}}

## Advanced usage

You can also choose to customize your own markup and contents for the footer

{{#docs-demo as |demo|}}
  {{#demo.example name="advanced-footer.hbs"}}
    <Layout::Footer as |footer|>
      <div class="row border-bottom">
        <div class="col-3">
          <p class="mb-1">Phone</p>
          <p>(123) 456 789</p>
        </div>
        <div class="col-3">
          <p class="mb-1">Email</p>
          <p>john.doe@ebf.com</p>
        </div>
        <div class="col-6">
          <p class="mb-1">Address</p>
          <p>123 Fake Street, Berlin, Germany</p>
        </div>
      </div>
      <div class="row mt-3">
        <Layout::Footer::Copyright @label="EBF GmbH All Rights Reserved" class="col text-left" />
      </div>
    </Layout::Footer>
  {{/demo.example}}

  {{demo.snippet "advanced-footer.hbs"}}
{{/docs-demo}}