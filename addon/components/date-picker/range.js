import { noop } from 'lodash';
import moment from 'moment';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

const DEFAULT_RANGES = {
  'date-ranges.yesterday': {
    start: moment().subtract(1, 'days'),
    end: moment().subtract(1, 'days'),
  },
  'date-ranges.last-7-days': {
    start: moment().subtract(6, 'days'),
    end: moment(),
  },
  'date-ranges.last-30-days': {
    start: moment().subtract(29, 'days'),
    end: moment(),
  },
  'date-ranges.this-month': {
    start: moment().startOf('month'),
    end: moment(),
  },
  'date-ranges.last-month': {
    start: moment().subtract(1, 'month').startOf('month'),
    end: moment().subtract(1, 'month').endOf('month'),
  },
};

export default class DatePickerRangeComponent extends Component {
  get ranges() {
    return this.args.ranges || DEFAULT_RANGES;
  }

  @action select(value, id) {
    const { onSelect = noop } = this.args;

    run(onSelect, { ...value, id });
  }
}
