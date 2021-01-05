# Header

Main header for the application

This component expects `@label`, `@logo` for branding.
`@logo` is a path or url to the logo image.
`@label` is the brand name to be displayed next to the logo.

Additional content, such as navigation in the example bellow, is optional.

This page shows some example usage of the `<BsNav>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Nav.html)

{{#docs-demo as |demo|}}
  {{#demo.example name="header.hbs"}}
    <Layout::Header
      @fluid={{true}}
      @label="Device cycle suite"
      @logo="/ebf-logo.png"
      as |header|
    >
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
    </Layout::Header> 
  {{/demo.example}}

  {{demo.snippet "header.hbs"}}
{{/docs-demo}}
