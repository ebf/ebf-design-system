import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | changeset-form/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render form with changeset and validations', async function(assert) {
    const model = { email: 'john.doe@acme.com', password: null, remember: false };

    this.set('model', model);
    this.set('submit', (changeset) => changeset.save());

    await render(hbs`<ChangesetForm
      @model={{this.model}}
      @validators="login"
      @onSubmit={{this.submit}}
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
    </ChangesetForm>`);

    assert.dom(this.element.querySelector('input[name="email"]')).exists().hasValue('john.doe@acme.com');
    assert.dom(this.element.querySelector('input[name="password"]')).exists().hasNoValue();
    assert.dom(this.element.querySelector('input[name="remember"]')).exists().isNotChecked();
    assert.dom(this.element.querySelector('.btn-submit')).containsText('Save');

    await click('.btn-submit');

    assert.dom(this.element.querySelector('input[name="email"]')).hasClass('is-valid');
    assert.dom(this.element.querySelector('input[name="password"]')).hasClass('is-invalid');
    assert.dom(this.element.querySelector('input[name="remember"]')).hasClass('is-valid');

    await fillIn('input[name="email"]', 'jane.doe@acme.com');
    await fillIn('input[name="password"]', 'Secret');
    await click('input[name="remember"]');

    assert.dom(this.element.querySelector('input[name="email"]')).hasClass('is-valid').hasValue('jane.doe@acme.com');
    assert.dom(this.element.querySelector('input[name="password"]')).hasClass('is-valid').hasValue('Secret');
    assert.dom(this.element.querySelector('input[name="remember"]')).hasClass('is-valid').isChecked();

    await click('.btn-submit');

    assert.equal(model.email, 'jane.doe@acme.com');
    assert.equal(model.password, 'Secret');
    assert.equal(model.remember, true);
  });
});
