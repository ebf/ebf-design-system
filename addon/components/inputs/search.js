import { noop } from 'lodash';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';
import { isEmpty } from '@ember/utils';

export default class InputsSearchComponent extends Component {
  input = null;

  @action submit() {
    const { value = null, onChange = noop } = this.args;

    if (value === this.input?.value) {
      return;
    }

    run(onChange, isEmpty(this.input?.value) ? value : this.input.value);
  }

  @action inserted(element) {
    this.input = element;
  }

  @action removed() {
    this.input = null;
  }

  @action onKeyDown(e = {}) {
    const { keyCode = null } = e;

    if (keyCode === 13) {
      run(this.submit);
    }
  }
}
