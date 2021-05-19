# Footer

The `Layout::Footer` uses a Bootstrap container to render child elements, if you wish to have a fluid `.container` you pass a `@fluid={{true}}` argument to the component. Same applies to the dark and light skin `@dark={{true}}`.

{{#docs-demo as |demo|}}
  {{#demo.example name="footer.hbs"}}
    <Layout::Footer
      @fluid={{true}}
      @dark={{false}}
      @copyright="Deutsche Telekom AG"
      @logo="/telekom-logo-magenta.svg"
      @label="Deutsche Telekom AG"
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
    <Layout::Footer
    @fluid={{true}}
    @dark={{true}} as |footer|>
      <div class="row justify-content-between">
        <div class="col-6 col-md-6 col-sm-5 d-flex flex-wrap align-content-center text-left justify-content-start mr-auto">
          <a href="#" class="footer-brand">
            <Layout::Footer::Logo @url="/telekom-logo-white.svg" @label="Deutsche Telekom AG" />
          </a>
        </div>  
        <div class="col-6 col-md-6 col-sm-7 d-flex flex-wrap align-content-center text-right justify-content-end">
          <span class="label">Erleben, was verbindet.</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <hr>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-md-4 col-sm-12 d-flex flex-wrap align-content-center text-left justify-content-start mb-lg-0 mb-md-0 mb-sm-3">
          <Layout::Footer::Copyright @label="Deutsche Telekom AG"/>
        </div>  
        <div class="col-md-8 col-sm-12 d-flex flex-wrap text-right justify-content-lg-end justify-content-sm-start justify-content-md-end">
          <BsNav
            @justified={{false}}
            @stacked={{false}}
            @fill={{false}}
            class="justify-content-md-end" as |nav|
          >
            <nav.item>
              <nav.link-to @route="index">Kontakt</nav.link-to>
            </nav.item>
            <nav.item>
              <nav.link-to @route="index">AGB</nav.link-to>
            </nav.item>
            <nav.item>
              <nav.link-to @route="index">Datenschutz</nav.link-to>
            </nav.item>
            <nav.item>
              <nav.link-to @route="index">Impressum</nav.link-to>
            </nav.item>
          </BsNav>          
        </div>
      </div>
    </Layout::Footer>
  {{/demo.example}}

  {{demo.snippet "advanced-footer.hbs"}}
{{/docs-demo}}