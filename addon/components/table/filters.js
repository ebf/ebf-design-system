import _ from 'lodash';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, get } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { isBlank, typeOf } from '@ember/utils';

const FILTERS = {
  includes: (filter, value) => _.includes(_.toLower(value), _.toLower(filter)),
  equals: (filter, value) => _.isEqual(value, filter) || _.isEqual(value.content, filter),
};

export default class CompanyTableComponent extends Component {
  selectComponent = 'table/select-filter';
  textComponent = 'table/text-filter';

  @tracked filters = {};

  get model() {
    return this.args.model;
  }

  get table() {
    return this.args.table;
  }

  @task({ drop: true }) * filter(options) {
    return yield this.model.filter((row) => {
      let matches = true;

      for (const field in options) {
        if (matches === false) {
          break;
        }

        const { value, type } = get(options, field);

        if (isBlank(value)) {
          // eslint-disable-next-line no-continue
          continue;
        }
        
        if (typeOf(type) === 'string') {
          matches = FILTERS[type](value, get(row, field), field, row, options);
        }

        if (typeOf(type) === 'function') {
          matches = type(value, get(row, field), field, row, options);
        }
      }

      return matches;
    });
  }

  @action async update(name, type, value) {
    this.filters = { ...this.filters, [name]: { type, value } };
    const filtered = await this.filter.perform(this.filters);

    this.table.setRows(filtered);
  }
}
