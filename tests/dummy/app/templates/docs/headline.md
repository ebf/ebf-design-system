# Headline

Simple component that would render the `<h1/>` headline element with a subtitle.

## Simple usage

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="headline-simple.hbs"}}
    <Headline @title="My headline" />
  {{/demo.example}}

  {{demo.snippet "headline-simple.hbs"}}
{{/docs-demo}}

## Subtitle example

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="headline-subtitle.hbs"}}
    <Headline @title="My headline" @subtitle="Some additional text" />
  {{/demo.example}}

  {{demo.snippet "headline-subtitle.hbs"}}
{{/docs-demo}}

## Sizes

You can configure the size of the headline by supplying the `@as` argument to any HTML headline element, like `h3`.

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="headline-size.hbs"}}
    <Headline @as="h3" @title="My headline" @subtitle="Some additional text" />
  {{/demo.example}}

  {{demo.snippet "headline-size.hbs"}}
{{/docs-demo}}

Or you can specify it as a simple paragraph.

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="headline-paragraph.hbs"}}
    <Headline @as="p" @title="My headline" @subtitle="Some additional text" />
  {{/demo.example}}

  {{demo.snippet "headline-paragraph.hbs"}}
{{/docs-demo}}