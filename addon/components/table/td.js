import Component from '@glimmer/component';
import { get } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';

export default class TableCellComponent extends Component {
  get cellComponent() {
    return this.args.column?.cellComponent || null;
  }

  get value() {
    const { row = {}, column = {} } = this.args;
    const { valuePath = null } = column;

    if (isEmpty(valuePath)) {
      return row;
    }

    if (isPresent(row)) {
      return get(row, valuePath);
    }

    return null;
  }
}
