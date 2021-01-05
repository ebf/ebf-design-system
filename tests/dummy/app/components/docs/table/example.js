/* eslint-disable ember/no-computed-properties-in-native-classes */
import { includes, lowerCase } from 'lodash';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';

// BEGIN-SNIPPET table-example.js
export default class TableComponent extends Component {
  @tracked sortBy = ['name:desc'];

  columns = [{
    label: 'Name',
    valuePath: 'name',
    sorted: true,
  }, {
    label: 'Email',
    valuePath: 'email',
    sortable: true,
  }, {
    label: 'Link',
    valuePath: 'link',
    sortable: true,
    cellComponent: 'table/link-cell'
  }, {
    label: 'Founded',
    valuePath: 'founded',
    sortable: true,
    cellComponent: 'table/date-cell',
    dateFormat: 'LL'
  }];

  @sort('model', 'sortBy') sorted;

  get model() {
    return [{
      name: 'Facebook',
      email: 'email@facebook.com',
      link: 'https://facebook.com',
      founded: '2004-02-04',
      dateFormat: 'LLL'
    }, {
      name: 'Apple',
      email: 'email@apple.com',
      link: 'https://apple.com',
      founded: '1976-04-01',
    }, {
      name: 'Google',
      email: 'email@google.com',
      link: 'https://google.com',
      founded: '1998-09-04',
    }];
  }

  @action
  onSort(property, ascending, table) {
    this.sortBy = [`${property}:${ascending ? 'asc' : 'desc'}`];
    table.setRows(this.sorted);
  }

  @action filterByEmail(value, email) {
    const lowercased = lowerCase(value);
    return includes(lowerCase(email), lowercased);
  }

  @action
  onSelected() {}
}
// END-SNIPPET