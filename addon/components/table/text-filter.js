import Component from '@glimmer/component';
import { get } from '@ember/object';
import { set } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

const DEBOUNCE_MS = 300;

export default class CompanyTableComponent extends Component {
  get name() {
    return this.args.name;
  }

  get filter() {
    return this.args.filter || 'includes';
  }

  get value() {
    return get(this.args, `filters.${this.name}.value`);
  }

  set value(value) {
    set(this.args, `filters.${this.name}`, { value });
    this.update.perform(value);
  }

  @task({ restartable: true }) * update(value = '') {
    yield timeout(DEBOUNCE_MS);
    return this.args.onChange(this.name, this.filter, value);
  }
}
