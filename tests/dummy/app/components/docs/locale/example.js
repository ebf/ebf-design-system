import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET locale-demo-component.js
export default class DocsServiceLocaleComponent extends Component {
  @service locale;

  get current() {
    return this.locale.active;
  }

  get available() {
      return this.locale.available;
  }
}
// END-SNIPPET