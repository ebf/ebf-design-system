import Component from '@glimmer/component';
import { get } from '@ember/object';
import { 
  BOOTSTRAP_BLUE_COLORS,
  BOOTSTRAP_GRAY_COLORS,
  BOOTSTRAP_ORANGE_COLORS,
  BOOTSTRAP_RED_COLORS,
  BOOTSTRAP_YELLOW_COLORS,
  BOOTSTRAP_GREEN_COLORS,
  BOOTSTRAP_PURPLE_COLORS,
 } from '../../../constants';

const PALLETES = {
  grays: BOOTSTRAP_GRAY_COLORS,
  blues: BOOTSTRAP_BLUE_COLORS,
  oranges: BOOTSTRAP_ORANGE_COLORS,
  reds: BOOTSTRAP_RED_COLORS,
  yellows: BOOTSTRAP_YELLOW_COLORS,
  greens: BOOTSTRAP_GREEN_COLORS,
  purples: BOOTSTRAP_PURPLE_COLORS,
};

export default class DocsColorsComponent extends Component {
  get palletes() {
    const { type } = this.args || {};
    const palletes = get(PALLETES, type);
    return palletes || [];
  }
}