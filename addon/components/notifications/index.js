import { noop } from 'lodash';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

export default class NotificationsComponent extends Component {
  @action select(notification, { closeDropdown = noop }) {
    const { onClick = noop } = this.args;

    run(onClick, notification);
    run(closeDropdown);
  }
}
