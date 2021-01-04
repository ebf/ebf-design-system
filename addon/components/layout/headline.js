import Component from '@glimmer/component';

/**
 * Component that uses Embers `in-element` helper that renders the contents
 * inside the `page-headline` element in the application layout.
 * 
 * @class LayoutHeadlineComponent
 * @extends Component
 */
export default class LayoutHeadlineComponent extends Component {

  /**
   * Destination HTML element where the component body would be rendered.
   * 
   * @type HTMLElement
   */
  get destinationElement() {
    return document.getElementById('page-headline');
  }
}
