import Component from '@glimmer/component';
import { get } from '@ember/object';
import { 
  BOOTSTRAP_PRIMARY_COLORS,
  BOOTSTRAP_BLUE_COLORS,
  BOOTSTRAP_GRAY_COLORS,
  BOOTSTRAP_ORANGE_COLORS,
  BOOTSTRAP_YELLOW_COLORS,
  BOOTSTRAP_GREEN_COLORS,
  BOOTSTRAP_FUNCTION_COLORS,
  BOOTSTRAP_LINK_COLORS,
 } from '../../../constants';

const PALLETES = {
  primary_colors: BOOTSTRAP_PRIMARY_COLORS,
  grays: BOOTSTRAP_GRAY_COLORS,
  blues: BOOTSTRAP_BLUE_COLORS,
  oranges: BOOTSTRAP_ORANGE_COLORS,
  yellows: BOOTSTRAP_YELLOW_COLORS,
  greens: BOOTSTRAP_GREEN_COLORS,
  function_colors: BOOTSTRAP_FUNCTION_COLORS,
  link_colors: BOOTSTRAP_LINK_COLORS,
};

export default class DocsColorsComponent extends Component {
  get palletes() {
    const { type } = this.args || {};
    const palletes = get(PALLETES, type);
    return palletes || [];
  }
}