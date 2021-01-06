# Breadcrumbs

This addon uses a template based breadcrumb management implemented by the `ember-breadcrumbs` addon.
For the full documentation please refer to the [addon docs](https://github.com/Bagaar/ember-breadcrumbs).

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="breadcrumbs.hbs"}}
    <Layout::Breadcrumbs />

    <BreadcrumbsItem>
      <LinkTo @route="index">Home</LinkTo>
    </BreadcrumbsItem>

    <BreadcrumbsItem>
      <LinkTo @route="docs">Documentation</LinkTo>
    </BreadcrumbsItem>

    <BreadcrumbsItem>
      <LinkTo @route="docs.breadcrumbs">Breadcrumbs</LinkTo>
    </BreadcrumbsItem>
  {{/demo.example}}

  {{demo.snippet "breadcrumbs.hbs"}}
{{/docs-demo}}