# Navs

Navigation components with default pills and tabs styles.

This page shows some example usage of the `<BsNav>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Nav.html)

## Horizontal

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-horizontal-dots"}}
    <BsNav @type="dots" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-list" /> Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-horizontal-dots"}}
{{/docs-demo}}

## Vertical

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-vertical-dots"}}
    <BsNav @type="dots" @stacked={{true}} class="vertical-nav" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-list" /> Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-vertical-dots"}}
{{/docs-demo}}

## Simple Tabs

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-simple-tabs"}}
    <BsNav @type="simple-tabs" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-shopping-bag" /> Shop
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-simple-tabs"}}
{{/docs-demo}}

## Tabs

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-tabs"}}
    <BsNav @type="tabs" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-list" /> Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-tabs"}}
{{/docs-demo}}

## Pills

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-pills"}}
    <BsNav @type="pills" as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-list" /> Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-pills"}}
{{/docs-demo}}

## Justified

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="navs-justified-pills"}}
    <BsNav @type="pills" @justified={{true}} as |nav|>
      <nav.item>
        <nav.link-to @route="index">
          <Icon::Ebf @icon="ebf-grid" /> Home
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.navs">
          <Icon::Ebf @icon="ebf-list" /> Navs
        </nav.link-to>
      </nav.item>
      <nav.item>
        <nav.link-to @route="docs.alerts" @disabled={{true}}>
          <Icon::Ebf @icon="ebf-cancel" /> Disabled
        </nav.link-to>
      </nav.item>
      <nav.dropdown as |dd|>
        <dd.toggle>
          Dropdown <span class="caret"></span>
        </dd.toggle>
        <dd.menu as |ddm|>
          <ddm.item>
            <ddm.link-to @route="index">Home</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs">Nav</ddm.link-to>
          </ddm.item>
          <ddm.item>
            <ddm.link-to @route="docs.navs" @disabled={{true}}>Disabled</ddm.link-to>
          </ddm.item>
        </dd.menu>
      </nav.dropdown>
    </BsNav>
  {{/demo.example}}

  {{demo.snippet "navs-justified-pills"}}
{{/docs-demo}}