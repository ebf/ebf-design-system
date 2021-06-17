# Layout

## Layout::Headline

This component uses `in-element` Ember helper and renders headline component in the `#page-headline` container.

{{#docs-demo as |demo|}}
  {{#demo.example name="layout-component.hbs"}}
    <Layout as |layout|>
      <layout.header />
      <div class="flex-grow-1">
        <Layout::Headline as |headline| >
          <headline.item @title="Item1"/>
          <headline.item @title="Item2"/>
          <headline.item @title="Item3"/>
        </Layout::Headline>
      </div>
    </Layout>
  {{/demo.example}}

  {{demo.snippet "layout-component.hbs"}}
{{/docs-demo}}
