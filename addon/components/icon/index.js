import { isEmpty } from 'lodash';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class IconComponent extends Component {
  @action clicked(...args) {
    if (this.args.onClick) this.args.onClick(...args);
  }

  get placement() {
    return this.args.placement || 'right';
  }

  get classNames() {
    const { type = null } = this.args;

    if (isEmpty(type)) {
      return 'icon';
    }

    return `icon icon-${type}`;
  }
}
