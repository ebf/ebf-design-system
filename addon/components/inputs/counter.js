import { noop } from 'lodash';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

/**
 * Component that is used to render a Bootstrap Input group component
 * with a number input field, increment and decrement buttons.
 * 
 * ```handlebars
 * <Inputs::Counter
 *  @label="Size"
 *  @placeholder="Enter your size"
 *  @min="10"
 *  @max="20"
 *  @value={{this.value}}
 *  @onChange={{fn (mut this.value)}}
 * />
 * ```
 *
 * @class InputsCounterComponent
 * @extends Component
 */
export default class InputsCounterComponent extends Component {
  /**
   * Minimum allowed value, defaults to 0
   * 
   * @type Number
   * @property
   */
  get min() {
    return parseInt(this.args.min, 10) || 0;
  }

  /**
   * Maximum allowed value, defaults to `Number.MAX_SAFE_INTEGER`
   * 
   * @type Number
   * @property
   */
  get max() {
    return parseInt(this.args.max, 10) || Number.MAX_SAFE_INTEGER;
  }

  /**
   * Input value, defaults to minimum value
   * 
   * @type Number
   * @property
   */
  get value() {
    return parseInt(this.args.value, 10) || this.min;
  }

  @action increment(value) {
    if (value < this.max) {
      this.update(value + 1);
    }
  }

  @action decrement(value) {
    if (value > this.min) {
      this.update(value - 1);
    }
  }

  @action changed(event = {}) {
    const { value } = event.target || {};
    const number = parseInt(value);

    if (value > this.max) {
      this.update(this.max);
    } else if (value < this.min) {
      this.update(this.min);
    } else {
      this.update(number); 
    }
  }

  update(value) {
    const { onChange = noop } = this.args;
    run(onChange, value);
  }
  
}
