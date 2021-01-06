import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DocsProgressComponent extends Component {
  @action next(item) {
    console.log(item, ...arguments);
  }
  
}
