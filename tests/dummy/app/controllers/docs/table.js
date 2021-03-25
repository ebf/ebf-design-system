import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

// BEGIN-SNIPPET table-demo-controller.js
export default class DocsTableController extends Controller {
  queryParams = ['page', 'size', 'sort'];

  @service employees;

  @tracked page = 1;
  @tracked size = 10;
  @tracked sort = 'id';

  columns = [{
    label: 'Email',
    valuePath: 'email',
    sortBy: 'email',
    width: '320px',
  }, {
    label: 'First name',
    valuePath: 'firstName',
    sortBy: 'firstName',
    width: '200px',
  }, {
    label: 'Last name',
    valuePath: 'lastName',
    sortBy: 'lastName',
    width: '200px',
  },{
    label: 'Company',
    width: '220px',
    valuePath: 'company',
  }, {
    label: 'Phone',
    valuePath: 'phone',
    width: '180px',
  }, {
    label: 'Address',
    valuePath: 'address',
    width: '240px',
  }, {
    label: 'Registered',
    valuePath: 'registered',
    cellComponent: 'table/date-cell',
    dateFormat: 'LL',
    width: '220px',
  }];

  @task({ drop: true }) *fetch() {
    yield timeout(400);
    this.model = this.employees.query(this.page, this.size, this.sort);
  }

  @task({ drop: true }) *empty() {
    yield timeout(1000);
  }

}
// END-SNIPPET