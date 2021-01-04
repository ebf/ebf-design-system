import Component from '@glimmer/component';

export default class ErrorsPageComponent extends Component {
  get status() {
    return this.args.status || 500;
  }

  get errors() {
    return this.args.errors || [];
  }
}
