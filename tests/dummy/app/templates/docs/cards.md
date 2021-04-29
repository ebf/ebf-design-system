# Cards

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
contextual background colors, and powerful display options.

## Primary Card

For the full documentation of a card layout please refer to the [Bootstrap Docs](https://getbootstrap.com/docs/4.5/components/card/)

This type of card should always be kept in a grid as shown in Card Grid below

{{#docs-demo as |demo|}}
  {{#demo.example name="primary-card.hbs"}}
  <div class="col mb-4">
    <div class="card card-primary">
      <div class="card-body">
        <div class="card-image">
          <img src="https://dummyimage.com/48x48/7c7c7c/ffffff.png" alt="Card Image">
        </div>
        <div class="card-title">Card title</div>
        <div class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>                
      </div>
    </div>
  </div>
  {{/demo.example}}

  {{demo.snippet "primary-card.hbs"}}
{{/docs-demo}}

### Primary Card Grid

To fit cards in a seamless grid, you should fit them inside container as showed in example

In order to change number of grid columns, you need to alter parent element classes which are in the same time responsive breakpoint rules <code>row-cols-1 row-cols-md-2 row-cols-lg-3</code>


{{#docs-demo as |demo|}}
  {{#demo.example name="primary-card-grid.hbs"}}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div class="col mb-4">
      <div class="card card-primary">
        <div class="card-body">
          <div class="card-image">
            <img src="https://dummyimage.com/48x48/7c7c7c/ffffff.png" alt="Card Image">
          </div>
          <div class="card-title">Card title</div>
          <div class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>                
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card card-primary">
        <div class="card-body">
          <div class="card-image">
            <img src="https://dummyimage.com/48x48/7c7c7c/ffffff.png" alt="Card Image">
          </div>
          <div class="card-title">Card title</div>
          <div class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>                
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card card-primary">
        <div class="card-body">
          <div class="card-image">
            <img src="https://dummyimage.com/48x48/7c7c7c/ffffff.png" alt="Card Image">
          </div>
          <div class="card-title">Card title</div>
          <div class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>                
        </div>
      </div>
    </div>    
  </div>
  
  {{/demo.example}}

  {{demo.snippet "primary-card-grid.hbs"}}
{{/docs-demo}}

## Secondary Card

Basically the same as Primary Card, excluding the image. 

{{#docs-demo as |demo|}}
  {{#demo.example name="secondary-card.hbs"}}
  <div class="col mb-4">
    <div class="card card-secondary">
      <div class="card-body">
        <div class="card-title">Card title</div>
        <div class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
      </div>
    </div>
  </div>
  {{/demo.example}}

  {{demo.snippet "secondary-card.hbs"}}
{{/docs-demo}}

### Secondary Card Grid

Refer to the same principles that apply to Main Cards


## Hover

Use the `Card` component to add additional behaviour to your cards.

{{docs/cards}}

## Summary

Use the `Card::Summary` component to show structured data in your cards.

{{docs/cards/summary}}

## Options

{{docs/cards/option}}

## Products

Bulletproff markup for the Product card

For grid building, same general method is used as in the Primary and Secondary Card examples.

{{#docs-demo as |demo|}}
  {{#demo.example name="product-card.hbs"}}
  <div class="card card-product card-hover">
    <div class="card-body">
      <div class="row">
        <!-- Card Product Image -->
        <div class="card-product-image col-lg-5 col-md-5 col-sm-12 mb-lg-0 mb-md-0 mb-sm-4">
          <img class="img-fluid" src="https://www.telekom.de/resources/images/480464/apple-iphone-11-gruen-vorne.png" alt="...">
        </div>
        <!-- Card Product Body-->
        <div class="card-product-body col-lg-7 col-md-7 col-sm-12">
          <!-- Title -->
          <h5 class="card-title">Apple iPhone 11 schwarz Lorem ipsum dolor sin amet</h5>
          <!-- Availability -->
          <div class="card-availability">
            <i class="ebf ebf-check-mark-circle-full text-success"></i>
            <p>Vorrätig</p>
          </div>
          <!-- Descripion -->
          <p class="card-text">Apple iPhone SE 64 GB Schwarz Lieferumfang - iPhone mit iOS 13 - EarPods mit Lightning Anschluss - Lightning auf USB Kabel - USB Power Adapter - Dokumentation</p>
          <!-- Price -->
          <div class="card-price">
            <strong class="price">ab 116,93 €</strong>
            <i class="ebf ebf-info popover-trigger">
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BsPopover @title="Mengenabhängige Preisstaffel:" @triggerElement=".popover-trigger" @triggerEvents="hover">
    <ul>
      <li>1 - 100 Geräte XY€</li>
      <li>101 - 300 Geräte XY€</li>
      <li>ab 301 Geräte XY€ </li>
    </ul>
  </BsPopover>
  {{/demo.example}}

  {{demo.snippet "product-card.hbs"}}
{{/docs-demo}}
