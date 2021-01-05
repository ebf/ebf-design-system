import { map } from 'lodash';
import Component from '@glimmer/component';
import { get, action } from '@ember/object';
import { run } from '@ember/runloop';
import { typeOf } from '@ember/utils';
import Table from 'ember-light-table';

const createColumns = columns => map(columns, column => ({
  ...column, type: 'intl'
}));

/**
 * Component used to render the Ember easy-table component
 *
 * @class TableComponent
 * @extends Component
 */
export default class TableComponent extends Component {

  /**
   * Height of the table. The default value is 65vh
   *
   * @type String
   */
  height = null;

  constructor() {
    super(...arguments);

    this.height = this.args.height || '65vh';

    this.table = Table.create({
      columns: createColumns(this.args.columns),
      rows: Table.createRows(this.args.model),
    });
  }

  get columns() {
    return this.args.columns || [];
  }

  get model() {
    return this.args.model || [];
  }

  @action columnClicked(column) {
    const { onSort } = this.args;
    const key = get(column, 'valuePath');

    if (column.sorted && onSort) {
      run(null, onSort, key, get(column, 'ascending'), this.table, column);
    }
  }

  @action scrolledToBottom() {
    const { onLoadMore } = this.args;

    if (typeOf(onLoadMore) === 'function') {
      run(null, onLoadMore);
    }
  }
}
