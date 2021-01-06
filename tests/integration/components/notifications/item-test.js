import moment from 'moment';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | notifications/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders default icon', async function(assert) {
    await render(hbs`<Notifications::Item />`);

    assert.dom(this.element.querySelector('.ebf-notification-icon .icon')).exists();
    assert.dom(this.element.querySelector('.ebf-notification-icon .icon')).hasClass('ebf-bell');
  });

  test('it renders a defined icon', async function(assert) {
    await render(hbs`<Notifications::Item @icon="ebf-user" />`);

    assert.dom(this.element.querySelector('.ebf-notification-icon .icon')).exists();
    assert.dom(this.element.querySelector('.ebf-notification-icon .icon')).hasClass('ebf-user');
    assert.dom(this.element.querySelector('.ebf-notification-icon .icon')).hasNoClass('ebf-bell');
  });

  test('it renders with title and text', async function(assert) {
    await render(hbs`<Notifications::Item
      @title="Title"
      @text="Notification"
    />`);

    assert.dom(this.element.querySelector('.ebf-notification-details p:first-child')).containsText('Title');
    assert.dom(this.element.querySelector('.ebf-notification-details p:last-child')).containsText('Notification');
  });

  test('it should not render date', async function(assert) {
    await render(hbs`<Notifications::Item />`);

    assert.dom(this.element.querySelector('small')).doesNotExist();
  });

  test('it should render formatted date', async function(assert) {
    const date = moment();
    this.set('date', date);

    await render(hbs`<Notifications::Item @date={{this.date}} />`);

    assert.dom(this.element.querySelector('small')).exists();
    assert.dom(this.element.querySelector('small')).containsText(date.format('LLL'));
  });

  test('it should not render close icon', async function(assert) {
    await render(hbs`<Notifications::Item />`);

    assert.dom(this.element.querySelector('.ebf-notification-close')).doesNotExist();
  });


  test('it should render close icon and call handler', async function(assert) {
    this.set('clicked', false);

    await render(hbs`<Notifications::Item @onDismiss={{fn (mut this.clicked) true}} />`);

    assert.dom(this.element.querySelector('.ebf-notification-close')).exists();
    assert.dom(this.element.querySelector('.ebf-notification-close .ebf-plus')).exists();

    await click('.ebf-notification-close .ebf-plus');

    assert.true(this.clicked);
  });
});
