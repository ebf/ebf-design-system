import Component from '@glimmer/component';
import { BOOTSTRAP_TYPES } from '../../../constants';

const TYPES = [...BOOTSTRAP_TYPES, 'link'];

export default class DocsButtonsComponent extends Component {
  get types() {
    return this.args.types || TYPES;
  }
}