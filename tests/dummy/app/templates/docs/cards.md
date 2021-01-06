# Cards

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
contextual background colors, and powerful display options.

## Simple

For the full documentation of a simple card layout please refer to the [Bootstrap Docs](https://getbootstrap.com/docs/4.5/components/card/)

{{#docs-demo as |demo|}}
  {{#demo.example name="simple-card.hbs"}}
    <div class="card card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  {{/demo.example}}

  {{demo.snippet "simple-card.hbs"}}
{{/docs-demo}}

## Hover

Use the `Card` component to add additional behaviour to your cards.

{{docs/cards}}

## Summary

Use the `Card::Summary` component to show structured data in your cards.

{{docs/cards/summary}}

## Options

{{docs/cards/option}}

## Products