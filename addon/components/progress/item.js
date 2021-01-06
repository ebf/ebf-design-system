import { noop } from 'lodash';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

export default class ProgressItemComponent extends Component {
  constructor(...args) {
    super(...args);

    assert('Progress step item needs to have a unique name', this.args.name);
  }

  get classNames() {
    const { selected = false, completed = false, disabled = false } = this.args;
    const classNames = ['progress-bar-item'];

    if (selected) {
      classNames.push('selected');
    }

    if (completed) {
      classNames.push('completed');
    }

    if (disabled) {
      classNames.push('disabled');
    }

    return classNames.join(' ');
  }

  @action clicked() {
    const { name, onClick = noop, selected = false, disabled = false } = this.args;

    // no need to call on click when item is currently selected or disabled
    if (selected || disabled) {
      return;
    }

    onClick(name);
  }
  
  @action register() {
    const { name, register = noop, selected = false, completed = false, disabled = false } = this.args;

    register({ name, selected, completed, disabled });
  }

  @action unregister() {
    const { name, unregister = noop } = this.args;

    unregister(name);
  }

}
