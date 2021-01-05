import Component from '@glimmer/component';
import { action, get } from '@ember/object';

export default class CompanyTableComponent extends Component {
  get name() {
    return this.args.name;
  }

  get filter() {
    return this.args.filter || 'equals';
  }

  get value() {
    return get(this.args, `filters.${this.name}.value`);
  }

  @action selected(value) {
    return this.args.onChange(this.name, this.filter, value);
  }
}
