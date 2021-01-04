import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';
import { assert } from '@ember/debug';

/**
 * Component that renders the progress items.
 * 
 * @class ProgressComponent
 * @extends Component
 */
export default class ProgressBarComponent extends Component {
  get value() {
    const value = parseInt(this.args.value || this.min, 10);
    assert(`Passed value argument of ${value} must be greater or equal to defined min: ${this.min}`, value >= this.min);
    assert(`Passed value argument of ${value} must be less or equal to defined max: ${this.max}`, value <= this.max);

    return value;
  }

  get min() {
    return parseInt(this.args.min || 0, 10);
  }

  get max() {
    return parseInt(this.args.max || 100, 10);
  }

  get percentage() {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  get width() {
    return `${this.percentage}%`;
  }

  get height() {
    return this.args.height || '1rem';
  }

  get style() {
    return htmlSafe(`width: ${this.width}; height: ${this.height}`);
  }
}
