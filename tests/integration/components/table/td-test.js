import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const column = {
  label: 'Name',
  valuePath: 'name',
};

const row = {
  name: 'Zed',
};

module('Integration | Component | table/cell', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a basic row value', async function(assert) {
    this.set('column', { ...column });
    this.set('row', { ...row });

    await render(hbs`<Table::Td @column={{this.column}} @row={{this.row}} />`);

    assert.dom(this.element).containsText(row.name);
    assert.dom(this.element.querySelector('td')).exists();
  });

  test('it renders a customer component for row value', async function(assert) {
    this.set('column', { ...column, cellComponent: 'table/link-cell' });
    this.set('row', { ...row });

    await render(hbs`<Table::Td @column={{this.column}} @row={{this.row}} />`);

    assert.dom(this.element.querySelector('td')).exists();
    assert.dom(this.element.querySelector('a')).exists();
    assert.dom(this.element.querySelector('a')).containsText(row.name);
    assert.dom(this.element.querySelector('a')).hasAttribute('href', row.name);
  })

  test('it renders a value without setting the value path', async function(assert) {
    this.set('column', { ...column, valuePath: null });
    this.set('row', row.name);

    await render(hbs`<Table::Td @column={{this.column}} @row={{this.row}} />`);

    assert.dom(this.element).containsText(row.name);
  })

  test('it does not render a yielded block', async function(assert) {
    this.set('column', { ...column });
    this.set('row', { ...row });

    await render(hbs`
      <Table::Td @column={{this.column}} @row={{this.row}}>
        <p>template block text</p>
      </Table::Td>
    `);

    assert.dom(this.element).containsText(row.name);
    assert.dom(this.element.querySelector('td')).exists();
    assert.dom(this.element.querySelector('p')).doesNotExist();
  });
});
