# Modals

Add dialogs to your site for lightboxes, user notifications, or completely custom content.

This page shows some example usage of the `<BsModal>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Modal.html)

## Simple

{{#docs-demo as |demo|}}
  {{#demo.example name="simple-modal"}}
    <BsModal
      @open={{if this.simple true false}}
      @onSubmit={{fn (mut this.simple) false}}
      @onHidden={{fn (mut this.simple) false}}
      as |modal|
    >
      <modal.header>
        <h4 class="modal-title"><i class="glyphicon glyphicon-alert"></i> Alert</h4>
      </modal.header>
      <modal.body>
        Are you absolutely sure you want to do that???
      </modal.body>
      <modal.footer as |footer|>
        <BsButton @onClick={{fn modal.close}} @type="link">Oh no, forget it!</BsButton>
        <BsButton @onClick={{fn modal.submit}} @type="primary">Yeah!</BsButton>
      </modal.footer>
    </BsModal>

    <BsButton @type="primary" @onClick={{fn (mut this.simple) true}}>
      Open modal
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "simple-modal"}}
{{/docs-demo}}

## Fullscreen

{{#docs-demo as |demo|}}
  {{#demo.example name="fullscreen-modal"}}
    <BsModal
      @size="fullscreen"
      @open={{if this.fullscreen true false}}
      @onSubmit={{fn (mut this.fullscreen) false}}
      @onHidden={{fn (mut this.fullscreen) false}}
      as |modal|
    >
      <modal.header>
        <h4 class="modal-title"><i class="glyphicon glyphicon-alert"></i> Alert</h4>
      </modal.header>
      <modal.body>
        Are you absolutely sure you want to do that???
      </modal.body>
      <modal.footer as |footer|>
        <BsButton @onClick={{fn modal.close}} @type="link">Oh no, forget it!</BsButton>
        <BsButton @onClick={{fn modal.submit}} @type="primary">Yeah!</BsButton>
      </modal.footer>
    </BsModal>

    <BsButton @type="primary" @onClick={{fn (mut this.fullscreen) true}}>
      Open fullscreen modal
    </BsButton>
  {{/demo.example}}

  {{demo.snippet "fullscreen-modal"}}
{{/docs-demo}}
