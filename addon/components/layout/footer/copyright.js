import Component from '@glimmer/component';

const YEAR = new Date().getFullYear();

export default class LayoutFooterCopyrightComponent extends Component {
  year = YEAR;
}
