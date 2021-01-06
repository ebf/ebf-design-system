import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

// BEGIN-SNIPPET persister-demo-component.js
class Model {
  save() {
    return timeout(1000);
  }
}

export default class DocsPersisterComponent extends Component {
  @service persister;

  get state() {
    const { state = 'idle' } = this.save;

    if (state === 'running') {
      return 'pending';
    }

    return 'default';
  }

  @task({ drop: true }) * save() {
    yield this.persister.persist(new Model());
  }
}
// END-SNIPPET