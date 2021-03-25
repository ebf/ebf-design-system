import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { isEmpty, isPresent } from '@ember/utils';
import { SORT_DIRECTIONS } from '../../sort';
import { STATES } from './index';

export default class TableColumnComponent extends Component {
  @service intl;

  get column() {
    return this.args.column || {};
  }

  get sort() {
    const { sortBy = null, sortDir = SORT_DIRECTIONS.ASC } = this.column;

    if (isEmpty(sortBy)) {
      return null;
    }

    const { sort = null } = this.args;

    if (sort?.column === sortBy) {
      return sort.reversed;
    }

    return `${sortBy},${sortDir}`;
  }

  get styles() {
    const { width = 'auto' } = this.column;
    return `min-width: ${width}`;
  }

  get sortable() {
    const { state = STATES.DEFAULT } = this.args;

    // do not show sortable links when the table state is empty or loading
    if (state === STATES.LOADING || state === STATES.EMPTY) {
      return false;
    }

    return isPresent(this.column.sortBy);
  }

  get label() {
    const { label } = this.column;

    // should we throw an error when there is no label? according to A11Y
    // we need to have a column label, even if it should be hidden.
    if (isEmpty(label)) {
      return null;
    }

    if (this.intl.exists(label)) {
      return this.intl.t(label);
    }

    return label;
  }
}
