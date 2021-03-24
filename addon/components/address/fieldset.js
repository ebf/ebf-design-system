import Component from '@glimmer/component';
import { AVAILABLE_CONTRIES } from '../../constants';

export default class AddressFieldsetComponent extends Component {
  get countries() {
    return this.args.countries || AVAILABLE_CONTRIES;
  }

  get value() {
    return this.args.value || 'DE';
  }
}
