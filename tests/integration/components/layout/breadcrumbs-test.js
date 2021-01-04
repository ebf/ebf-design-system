import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/breadcrumbs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders breadcrumbs and it\'s items', async function(assert) {
    await render(hbs`<Layout::Breadcrumbs />`);

    assert.dom(this.element.querySelector('.breadcrumb')).exists();
    assert.dom(this.element.querySelector('.breadcrumb-item')).doesNotExist();

    await render(hbs`
      <Layout::Breadcrumbs />

      <BreadcrumbsItem class="first">
        First breadcrumb
      </BreadcrumbsItem>

      <BreadcrumbsItem class="second">
        Second breadcrumb
      </BreadcrumbsItem>
    `);

    assert.dom(this.element.querySelector('.breadcrumb')).exists();
    assert.dom(this.element.querySelector('.breadcrumb-item')).exists();

    assert.dom(this.element.querySelector('.first')).exists();
    assert.dom(this.element.querySelector('.first')).hasText('First breadcrumb');

    assert.dom(this.element.querySelector('.second')).exists();
    assert.dom(this.element.querySelector('.second')).hasText('Second breadcrumb');
  });
});
