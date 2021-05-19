# Navs

Navigation components with default pills and tabs styles.

This page shows some example usage of the `<BsNav>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Nav.html)

## Small Tabs

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-small-tabs"}}
    <BsNav @type="sm" class="nav-custom-tabs" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          Disabled
        </nav.link-to>
      </nav.item>      
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-small-tabs"}}
{{/docs-demo}}

## Large Tabs

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-large-tabs"}}
    <BsNav @type="lg" class="nav-custom-tabs" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          Disabled
        </nav.link-to>
      </nav.item>      
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-large-tabs"}}
{{/docs-demo}}

## Extra Large Tabs

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-xl-tabs"}}
    <BsNav @type="xl" class="nav-custom-tabs" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          Disabled
        </nav.link-to>
      </nav.item>      
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-xl-tabs"}}
{{/docs-demo}}
