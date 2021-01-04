import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default class ErrorsComponent extends Component {
  @service('error-resolver') resolver;

  @action resolve(error) {
    if (isPresent(error)) {
      return this.resolver.resolve(error);
    }
    return null;
  }
}
