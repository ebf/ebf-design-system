import { noop } from 'lodash';
import moment from 'moment';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { run } from '@ember/runloop';

export default class DatePickerFieldComponent extends Component {
  @tracked center;

  @action selected(event = {}) {
    const { onChange = noop } = this.args;
    const { date = null } = event;

    if (date == null) {
      run(onChange, null);
    } else {
      run(onChange, moment(date));
    }
  }

  @action centered(event = {}) {
    const { date = null } = event;

    if (date == null) {
      this.center = date
    }
  }
}
