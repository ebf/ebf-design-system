import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

// BEGIN-SNIPPET destroyer-demo-component.js
class Model {
  destroyRecord() {
    return timeout(1000);
  }
}

export default class DocsDestroyerComponent extends Component {
  @service destroyer;

  get state() {
    const { state = 'idle' } = this.delete;

    if (state === 'running') {
      return 'pending';
    }

    return 'default';
  }

  @task({ drop: true }) * delete() {
    yield this.destroyer.destroy(new Model());
  }
}
// END-SNIPPET