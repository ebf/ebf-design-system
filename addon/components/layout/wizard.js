import Component from '@glimmer/component';

/**
 * Component that uses Embers `in-element` helper that renders the contents
 * inside the `page-wizard` element in the application layout.
 * 
 * @class LayoutWizardComponent
 * @extends Component
 */
export default class LayoutWizardComponent extends Component {

  /**
   * Destination HTML element where the component body would be rendered.
   * 
   * @type HTMLElement
   */
  get destinationElement() {
    return document.getElementById('page-wizard');
  }
}
