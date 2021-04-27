# Forms

Main form component exposed by the addon is the `<ChangesetForm />` that builds upon `<BsForm />` component and `ember-changeset` and
`ember-changeset-validations` addons. In this page you can take a look at the examples and usage guidelines for form control styles,
layout options, and validations for creating a wide variety of forms.

You might also want to take a look first how forms are structured by Bootstrap be referring to the [Bootstrap Form Docs](https://getbootstrap.com/docs/4.5/components/forms/).

To know more how `<BsForm />` component works and what are the options please refer to the
[Ember Bootstrap API Docs](https://www.ember-bootstrap.com/api/classes/Components.Alert.html)

Concepts behind `ember-changeset` and how validations can be configured, please refer to the following docs:

* [Changeset](https://github.com/poteto/ember-changeset)
* [Changeset validations](https://github.com/poteto/ember-changeset-validations)

## Simple form

{{#docs-demo as |demo|}}
  {{#demo.example name="simple-form.hbs"}}
    <ChangesetForm
      @model={{hash email="john.doe@acme.com" password="" remember=false}}
      as |changeset form|
    >
        <form.element
          @controlType="email"
          @label="Email"
          @helpText="We'll never share your email with anyone else."
          @property="email"
          as |el|
        >
          <el.control name="email" placeholder="Enter your email address" />
        </form.element>
        <form.element
          @controlType="password"
          @label="Password"
          @property="password"
          as |el|
        >
          <el.control name="password" placeholder="Enter your password" />
        </form.element>
        <form.element
          @controlType="checkbox"
          @label="Remember me"
          @property="remember"
          as |el|
        >
          <el.control name="remember" />
        </form.element>
    </ChangesetForm>
  {{/demo.example}}

  {{demo.snippet "simple-form.hbs"}}
{{/docs-demo}}

## Basic Inputs

<form>
  <div class="form-group">
    <label class="form-label" for="formBasic">Label</label>
    <input placeholder="Placeholder text" type="text" id="formBasic" class="form-control">
  </div>
  <div class="form-group input-success">
    <label class="form-label" for="formBasic">Label</label>
    <input placeholder="Placeholder text" type="text" id="formBasic" class="form-control">
  </div>
  <div class="form-group input-error">
    <label class="form-label" for="formBasic">Label</label>
    <input placeholder="Placeholder text" type="text" id="formBasic" class="form-control">
  </div>
  <div class="form-group input-disabled">
    <label class="form-label" for="formBasic">Label</label>
    <input placeholder="Placeholder text" type="text" id="formBasic" class="form-control" disabled>
  </div>  
</form>

<form>
  <div class="custom-control custom-checkbox mb-4">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
    <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
  </div>
</form>
<form>
  <div class="custom-control custom-radio mb-4">
    <input type="radio" class="custom-control-input" id="customRadio4" name="example4" value="customEx">
    <label class="custom-control-label" for="customRadio4">Custom radio</label>
  </div>
</form>
<form>
  <div class="custom-control custom-switch mb-4">
    <input type="checkbox" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
  </div>
</form>