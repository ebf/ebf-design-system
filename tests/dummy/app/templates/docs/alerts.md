# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

This page shows some example usage of the `<BsAlert>` component. For the full documentation please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Alert.html)

## Simple example
<!-- {{docs/alerts/example}} -->
<div class="notification w-100 d-flex flex-row mb-4 fade show" role="alert">
  <div class="border-success">
    <div class="icon-container notification-success d-flex h-100 justify-content-center align-items-center w-100 h-100 px-2">
      <i class="ebf ebf-check-mark-circle-full fs-5"></i>
    </div>
  </div>
  <div class="px-3 py-3 border-top border-bottom">
    <h6 class="font-weight-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
    <p class="fs-2 ">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis. </p>    
  </div>
  <div class="text-center py-3 pr-3 border-top border-right border-bottom">
    <button class="ebf ebf-cancel close"></button>
  </div>              
</div>

## Available types

### Success

<div class="notification w-100 d-flex flex-row mb-4 fade show" role="alert">
  <div class="border-success">
    <div class="icon-container notification-success d-flex h-100 justify-content-center align-items-center w-100 h-100 px-2">
      <i class="ebf ebf-check-mark-circle-full fs-5"></i>
    </div>
  </div>
  <div class="px-3 py-3 border-top border-bottom">
    <h6 class="font-weight-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
    <p class="fs-2 ">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis. </p>
    <button class="btn btn-outline-variant">Button Test</button>
  </div>
  <div class="text-center py-3 pr-3 border-top border-right border-bottom">
    <button class="ebf ebf-cancel close"></button>
  </div>              
</div>

### Error

<div class="notification w-100 d-flex flex-row mb-4 fade show" role="alert">
  <div class="border-error">
    <div class="icon-container notification-error d-flex h-100 justify-content-center align-items-center w-100 h-100 px-2">
      <i class="ebf ebf-cancel-circle fs-5"></i>
    </div>
  </div>
  <div class="px-3 py-3 border-top border-bottom">
    <h6 class="font-weight-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
    <p class="fs-2 mb-0">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis. </p>
  </div>
  <div class="text-center py-3 pr-3 border-top border-right border-bottom">
    <button class="ebf ebf-cancel close"></button>
  </div>              
</div>


### Info

<div class="notification w-100 d-flex flex-row mb-4 fade show" role="alert">
  <div class="border-info">
    <div class="icon-container notification-info d-flex h-100 justify-content-center align-items-center w-100 h-100 px-2">
      <i class="ebf ebf-info fs-5"></i>
    </div>
  </div>
  <div class="px-3 py-3 border-top border-bottom">
    <h6 class="font-weight-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
    <p class="fs-2 mb-0">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis. </p>
  </div>
  <div class="text-center py-3 pr-3 border-top border-right border-bottom">
    <button class="ebf ebf-cancel close"></button>
  </div>              
</div>

### Warning

<div class="notification w-100 d-flex flex-row mb-4 fade show" role="alert">
  <div class="border-warning">
    <div class="icon-container notification-warning d-flex h-100 justify-content-center align-items-center w-100 h-100 px-2">
      <i class="ebf ebf-alert-wide fs-5"></i>
    </div>
  </div>
  <div class="px-3 py-3 border-top border-bottom">
    <h6 class="font-weight-bold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
    <p class="fs-2 mb-0">Quisque tellus turpis, iaculis ullamcorper dui sed, porta interdum ligula. Nam a velit mattis, placerat quam eu, ullamcorper magna. Maecenas ultrices consequat lorem sed dapibus. Vivamus a justo et lectus malesuada consequat eget in ligula. Phasellus rhoncus purus vel lectus ultricies auctor. Vestibulum rhoncus risus sit amet arcu vehicula aliquam. Duis elementum nec massa vel mattis. </p>
  </div>
  <div class="text-center py-3 pr-3 border-top border-right border-bottom">
    <button class="ebf ebf-cancel close"></button>
  </div>              
</div>

<!-- {{docs/alerts}} -->