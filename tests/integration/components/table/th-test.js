import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Sort from '@ebf/design-system/sort';

const column = {
  label: 'Name',
  valuePath: 'name',
  width: '500px',
};

module('Integration | Component | table/column', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a table header without any sort options', async function(assert) {
    this.set('column', { ...column });

    await render(hbs`<Table::Th @column={{this.column}} />`);

    assert.dom(this.element).containsText(column.label);
    assert.dom(this.element.querySelector('th')).exists();
    assert.dom(this.element.querySelector('th')).hasStyle({ minWidth: '500px' });
    assert.dom(this.element.querySelector('a')).doesNotExist();
  });

  test('it renders a table header with a sort option that is not this column', async function(assert) {
    this.set('column', { ...column, sortBy: 'name' });
    this.set('sort', new Sort('email'));

    await render(hbs`<Table::Th @column={{this.column}} @sort={{this.sort}} />`);

    assert.dom(this.element).containsText(column.label);
    assert.dom(this.element.querySelector('th')).exists();
    assert.dom(this.element.querySelector('th')).hasStyle({ minWidth: '500px' });
    assert.dom(this.element.querySelector('i')).doesNotExist();
    assert.dom(this.element.querySelector('a')).exists();
  });

  test('it renders a table header with a sort option that is not this column', async function(assert) {
    this.set('column', { ...column, sortBy: 'name' });
    this.set('sort', new Sort('name'));

    await render(hbs`<Table::Th @column={{this.column}} @sort={{this.sort}} />`);

    assert.dom(this.element).containsText(column.label);
    assert.dom(this.element.querySelector('th')).exists();
    assert.dom(this.element.querySelector('th')).hasStyle({ minWidth: '500px' });
    assert.dom(this.element.querySelector('i.ebf-arr-up-dots')).exists();
    assert.dom(this.element.querySelector('a')).exists();

    this.set('sort', new Sort('name', 'desc'));

    assert.dom(this.element.querySelector('i.ebf-arr-down-dots')).exists();
  });

  test('it renders a table header with a translated label', async function(assert) {
    this.set('column', { label: 'forms.labels.save' });

    await render(hbs`<Table::Th @column={{this.column}} />`);

    assert.dom(this.element).containsText('Save');
    assert.dom(this.element.querySelector('th')).exists();
    assert.dom(this.element.querySelector('i')).doesNotExist();
    assert.dom(this.element.querySelector('a')).doesNotExist();
  });

  test('it does not render a yielded block', async function(assert) {
    this.set('column', { ...column });
    
    await render(hbs`
      <Table::Th @column={{this.column}}>
        <p>template block text</p>
      </Table::Th>
    `);

    assert.dom(this.element).containsText(column.label);
    assert.dom(this.element.querySelector('th')).exists();
    assert.dom(this.element.querySelector('p')).doesNotExist();
  });
});
