# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

This page shows some example usage of the `<BsAlert>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Alert.html)

## Available types

### Success

{{#docs-demo as |demo|}}
  {{#demo.example name="success-alert.hbs"}}
  <BsAlert @type="success">
    <div class="alert-icon-container">
      <div class="icon">
        <i class="ebf ebf-check-mark-circle-full"></i>
      </div>
    </div>
    <div class="alert-body">
      <h6 class="alert-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
      <p class="alert-text">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis.</p>
    </div>
  </BsAlert>
  {{/demo.example}}
  {{demo.snippet "success-alert.hbs"}}
{{/docs-demo}}

### Error

{{#docs-demo as |demo|}}
  {{#demo.example name="error-alert.hbs"}}
  <BsAlert @type="error">
    <div class="alert-icon-container">
      <div class="icon">
        <i class="ebf ebf-cancel-circle"></i>
      </div>
    </div>
    <div class="alert-body">
      <h6 class="alert-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
      <p class="alert-text">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis.</p>
    </div>
  </BsAlert>
  {{/demo.example}}
  {{demo.snippet "error-alert.hbs"}}
{{/docs-demo}}


### Info

{{#docs-demo as |demo|}}
  {{#demo.example name="info-alert.hbs"}}
  <BsAlert @type="info">
    <div class="alert-icon-container">
      <div class="icon">
        <i class="ebf ebf-info"></i>
      </div>
    </div>
    <div class="alert-body">
      <h6 class="alert-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
      <p class="alert-text">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis.</p>
    </div>
  </BsAlert>
  {{/demo.example}}
  {{demo.snippet "info-alert.hbs"}}
{{/docs-demo}}

### Warning

{{#docs-demo as |demo|}}
  {{#demo.example name="warning-alert.hbs"}}
  <BsAlert @type="warning">
    <div class="alert-icon-container">
      <div class="icon">
        <i class="ebf ebf-alert-wide"></i>
      </div>
    </div>
    <div class="alert-body">
      <h6 class="alert-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
      <p class="alert-text">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis.</p>
    </div>
  </BsAlert>
  {{/demo.example}}
  {{demo.snippet "warning-alert.hbs"}}
{{/docs-demo}}


<!-- {{docs/alerts}} -->