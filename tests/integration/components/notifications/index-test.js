import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const notifications = [{
  icon: 'ebf-device-smartphone',
  title: 'Title',
  text: 'Notification',
}];

module('Integration | Component | notifications/index', function(hooks) {
  setupRenderingTest(hooks);

  test('it render an empty notifications dropdown list', async function(assert) {
    this.set('notifications', []);

    await render(hbs`<Notifications
      @notifications={{this.notifications}}
    />`);

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).doesNotExist();
    assert.dom(this.element.querySelector('.dropdown-toggle')).containsText('Notifications');
    assert.dom(this.element.querySelector('.badge-notification')).hasNoClass('badge-danger');

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.dropdown-item')).containsText('All done here!');
  });

  test('it render an notifications dropdown list and clear it', async function(assert) {
    this.set('notifications', [...notifications]);
    this.set('clear', () => this.set('notifications', []));

    await render(hbs`<Notifications
      @notifications={{this.notifications}}
      @onClear={{this.clear}}
      @onClick={{fn (mut this.selected)}}
      as |item notifcations|>
        <notifcations.item
          @title={{item.title}}
          @text={{item.text}}
        />
    </Notifications>`);

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).doesNotExist();
    assert.dom(this.element.querySelector('.dropdown-toggle')).containsText('Notifications');
    assert.dom(this.element.querySelector('.badge-notification')).hasClass('badge-danger');

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.dropdown-item:last-child')).containsText('Clear');
    assert.dom(this.element.querySelector('.dropdown-item:first-child')).exists();
    assert.dom(this.element.querySelector('.notification-custom')).exists();

    await click('.dropdown-item:last-child');

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.notification-custom')).doesNotExist();
    assert.dom(this.element.querySelector('.dropdown-item')).containsText('All done here!');
  });

  test('it render an notifications dropdown list and select an item', async function(assert) {
    this.set('notifications', [...notifications]);
    this.set('clear', () => this.set('notifications', []));

    await render(hbs`<Notifications
      @notifications={{this.notifications}}
      @onClear={{this.clear}}
      @onClick={{fn (mut this.selected)}}
      as |item notifcations|>
        <notifcations.item
          @title={{item.title}}
          @text={{item.text}}
        />
    </Notifications>`);

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.dropdown-item:first-child')).exists();
    assert.dom(this.element.querySelector('.notification-custom')).exists();

    await click('.dropdown-item:first-child');

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).doesNotExist();
    assert.equal(this.selected, notifications[0]);
  });

  test('it render an notifications dropdown list and dismiss it', async function(assert) {
    this.set('notifications', [...notifications]);
    this.set('clear', () => this.set('notifications', []));
    this.set('dismiss', () => this.set('notifications', []));

    await render(hbs`<Notifications
      @notifications={{this.notifications}}
      @onClear={{this.clear}}
      @onClick={{fn (mut this.selected)}}
      as |item notifcations|>
        <notifcations.item
          @title={{item.title}}
          @text={{item.text}}
          @onDismiss={{fn this.dismiss}}
        />
    </Notifications>`);

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.dropdown-item:first-child')).exists();
    assert.dom(this.element.querySelector('.notification-custom .notification-close i')).exists();

    await click('.notification-close i');

    assert.dom(this.element.querySelector('.notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.dropdown-item')).containsText('All done here!');
  });
});
