import { A } from '@ember/array';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProgressComponent extends Component {
  @tracked steps = A([]);

  get size() {
    const size = this.steps.length;
    return size > 0 ? size - 1 : 0;
  }

  get selected() {
    return this.steps.findBy('selected', true) || this.steps.firstObject;
  }

  get completed() {
    return this.steps.filterBy('completed', true);
  }

  get progress() {
    return this.completed.length;
  }

  @action register(item) {
    this.steps = A([...this.steps, item]);
  }

  @action unregister(item) {
    this.steps = this.steps.filter(i => i !== item);
  }
  
}
