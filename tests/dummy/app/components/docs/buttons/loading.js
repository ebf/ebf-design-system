import Component from '@glimmer/component';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

// BEGIN-SNIPPET submit-button-example.js
export default class DocsButtonsLoadingComponent extends Component {
  @tracked state = 'default';

  @action clicked() {
    this.state = 'pending';

    later(() => {
      this.state = 'fulfilled';
    }, 1000);
  }
}
// END-SNIPPET