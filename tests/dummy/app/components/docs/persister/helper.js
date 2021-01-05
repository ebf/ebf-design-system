import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';

// BEGIN-SNIPPET persister-demo-helper.js
class Model {
  @tracked email = 'john.doe@acme.com';
  @tracked password = null;

  save() {
    return timeout(1000);
  }
}

export default class DocsPersisterHelperComponent extends Component {
  model = new Model();
}
// END-SNIPPET