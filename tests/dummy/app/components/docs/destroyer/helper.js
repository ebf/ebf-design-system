import Component from '@glimmer/component';
import { timeout } from 'ember-concurrency';

// BEGIN-SNIPPET destroyer-demo-helper.js
class Model {
  destroyRecord() {
    return timeout(1000);
  }
}

export default class DocsDestroyerHelperComponent extends Component {
  model = new Model();
}
// END-SNIPPET