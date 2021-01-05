import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | language-switcher', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with flags', async function(assert) {
    const service = this.owner.lookup('service:locale');
    service.active = 'de-de';

    await render(hbs`<LanguageSwitcher @showFlags={{true}} />`);

    assert.equal(service.active.iso, 'de_DE');
    assert.dom(this.element.querySelector('.dropdown-toggle img')).exists()
      .hasAttribute('title', 'Deutsch')
      .hasAttribute('alt', 'Deutsch')
      .hasAttribute('src', '/images/countries/de.svg');

    await click('.dropdown-toggle');

    assert.dom(this.element.querySelector('.dropdown-item')).exists();
    assert.dom(this.element.querySelector('.dropdown-item.active')).exists();
    assert.dom(this.element.querySelector('.dropdown-item:not(.active)')).exists();
    assert.equal(this.element.querySelectorAll('.dropdown-item').length, service.available.length);

    await click('.dropdown-item:not(.active)');

    assert.equal(service.active.iso, 'en_US');
    assert.dom(this.element.querySelector('.dropdown-toggle img')).exists()
      .hasAttribute('title', 'English US')
      .hasAttribute('alt', 'English US')
      .hasAttribute('src', '/images/countries/us.svg');
  });

  test('it renders without flags', async function(assert) {
    const service = this.owner.lookup('service:locale');
    service.active = 'de-de';

    await render(hbs`<LanguageSwitcher />`);

    assert.equal(service.active.iso, 'de_DE');
    assert.dom(this.element.querySelector('.dropdown-toggle img')).doesNotExist()

    await click('.dropdown-toggle');

    assert.dom(this.element.querySelector('.dropdown-item')).exists();
    assert.dom(this.element.querySelector('.dropdown-item.active')).exists();
    assert.dom(this.element.querySelector('.dropdown-item:not(.active)')).exists();
    assert.equal(this.element.querySelectorAll('.dropdown-item').length, service.available.length);

    await click('.dropdown-item:not(.active)');

    assert.equal(service.active.iso, 'en_US');
    assert.dom(this.element.querySelector('.dropdown-toggle img')).doesNotExist()
  });
});
