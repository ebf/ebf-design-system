import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SubmitButtonComponent extends Component {
  get block() {
    return this.args.block || false;
  }

  @action inserted(element) {
    this.button = element;
  }

  @action clicked() {
    const { onClick = () => {} } = this.args;

    const width = this.button.offsetWidth;
    this.button.style.minWidth = `${width}px`;

    onClick(...arguments);
  }
}
