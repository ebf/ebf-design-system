/* eslint-disable ember/no-get */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';
import { isEmpty, typeOf } from '@ember/utils';
import Sort, { SORT_DIRECTIONS } from '../../sort';

export const STATES = {
  LOADING: 'loading',
  DEFAULT: 'default',
  EMPTY: 'empty',
}

export const COLUMN_DEFAULTS = {
  width: 'auto',
  sortBy: null,
  sortDir: SORT_DIRECTIONS.ASC,
  cellComponent: null,
};

/**
 * Component used to render the Ember easy-table component
 *
 * @class TableComponent
 * @extends Component
 */
export default class TableComponent extends Component {
  get columns() {
    const { columns = [] } = this.args;
    return columns.map(column => ({ ...COLUMN_DEFAULTS, ...column }));
  }

  get rows() {
    return this.args.rows || [];
  }

  /**
   * Parses the sort query parameter that comes from the controller into a `Sort`
   * instance that contains the name of the column and the current sort direction.
   * 
   * @type {Sort}
   */
  get sort() {
    const { sort = null } = this.args;

    if (isEmpty(sort)) {
      return null;
    }

    const [column, direction = SORT_DIRECTIONS.ASC] = sort.split(',');

    if (isEmpty(column)) {
      return null;
    }

    return new Sort(column, direction);
  }

  get state() {
    const { isLoading = false } = this.args;

    if (isLoading) {
      return STATES.LOADING;
    }

    if (isEmpty(this.rows)) {
      return STATES.EMPTY;
    }

    return STATES.DEFAULT;
  }

  get isLoading() {
    return this.state === STATES.LOADING;
  }

  get isEmpty() {
    return this.state === STATES.EMPTY;
  }

  @action onRowClick(...args) {
    const { onRowClick } = this.args;

    if (typeOf(onRowClick) === 'function') {
      run(onRowClick, ...args);
    }
  }
}
