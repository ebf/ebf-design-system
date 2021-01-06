import Column from 'ember-light-table/components/columns/base';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class TableColumn extends Column {
  @service() intl;

  get label() {
    const label = this.column.label;

    if (isEmpty(label)) {
      return label;
    }

    if (this.intl.exists(label)) {
      return this.intl.t(label);
    }

    return label;
  }
}


