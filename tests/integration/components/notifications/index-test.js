import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const notifications = [{
  icon: 'ebf-apple',
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

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).doesNotExist();
    assert.dom(this.element.querySelector('.dropdown-toggle')).containsText('Notifications');
    assert.dom(this.element.querySelector('.ebf-badge-notification')).hasNoClass('badge-danger');

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).exists();
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

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).doesNotExist();
    assert.dom(this.element.querySelector('.dropdown-toggle')).containsText('Notifications');
    assert.dom(this.element.querySelector('.ebf-badge-notification')).hasClass('badge-danger');

    await click('a.dropdown-toggle');

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.dropdown-item:last-child')).containsText('Clear');
    assert.dom(this.element.querySelector('.dropdown-item:first-child')).exists();
    assert.dom(this.element.querySelector('.ebf-notification')).exists();

    await click('.dropdown-item:last-child');

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.ebf-notification')).doesNotExist();
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
    assert.dom(this.element.querySelector('.ebf-notification')).exists();

    await click('.dropdown-item:first-child');

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).doesNotExist();
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
    assert.dom(this.element.querySelector('.ebf-notification .ebf-notification-close i')).exists();

    await click('.ebf-notification-close i');

    assert.dom(this.element.querySelector('.ebf-notification-dropdown-menu')).exists();
    assert.dom(this.element.querySelector('.dropdown-item')).containsText('All done here!');
  });
});
