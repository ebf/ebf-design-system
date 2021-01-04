import { isEmpty, isString } from 'lodash';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import Component from '@glimmer/component';

/**
 * Component that yields a `Changeset` instance of the underlying model that would
 * be passed as a model argument to BS Form component.
 *
 * It looks up any validations for the changeset defined by the `validators` parameter.
 * 
 * Simple usage of this component may look like this:
 *
 * ```handlebars
 *  <ChangesetForm
 *    @model={{this.model}}
 *    @onSubmit={{fn this.save}}
 * as |changeset form|>
 *   <form.element
 *     @name="username"
 *     @label="Enter username"
 *   />
 * </ChangesetForm>
 * ```
 * 
 * @class ChangesetFormComponent
 * @extends Component
 */
export default class ChangesetFormComponent extends Component {

  /**
   * Property getter that extracts the Changeset validations object from the
   * Ember Containers if the `validators` argument is specified.
   * 
   * ```handlebars
   *  <ChangesetForm
   *    @model={{this.model}}
   *    @validations="account"
   *    @onSubmit={{fn this.save}}
   * >
   *    ...
   * </ChangesetForm>
   * ```
   *
   * @property validations
   * @see https://github.com/poteto/ember-changeset-validations#usage
   */
  get validations() {
    const { validators } = this.args;

    if (isEmpty(validators)) {
      return {};
    }

    const owner = getOwner(this);

    let factory = { class: validators };

    if (isString(validators)) {
      factory = owner.factoryFor(`validation:${validators}`);
      assert(`[changeset-form]: Could not find any validators for name: ${validators}`, factory);
    }

    return factory.class;
  }

  get shouldShowSubmitButton() {
    const { showSubmitButton = true } = this.args;
    return showSubmitButton;
  }
}
