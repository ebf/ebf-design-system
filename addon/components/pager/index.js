import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// there should be 5 page links in total
const VISIBILE_ITEMS = 5;

const DEFAULT_SIZE = 10;
const DEFAULT_SIZES = [10, 20, 50];

/**
 * Class that represents the Page that should be rendered by the component
 *
 * @class Page
 */
class Page {
  constructor(value, disabled) {
    this.value = value;
    this.disabled = disabled;
  }
}

/**
 * Component that renders Bootstrap pagination
 *
 * @class PagerComponent
 * @extends Component
 */
export default class PagerComponent extends Component {
  @service router;

  /**
   * Property that defines the current page size
   *
   * @type Number
   */
   get currentSize() {
    return this.args.size || DEFAULT_SIZE;
  }

  /**
   * Property that defines the current page
   *
   * @type Number
   */
  get currentPage() {
    return this.args.page || 1;
  }

  /**
   * Property that returns a total number of pages
   *
   * @type Number
   */
  get totalPages() {
    return this.args.pages || 0;
  }

  /**
   * Property that returns a total number of results
   *
   * @type Number
   */
  get totalResults() {
    return this.args.total || 0;
  }

  get sizes() {
    return this.args.sizes || DEFAULT_SIZES;
  }

  /**
   * Checks if there is a next page
   *
   * @type Boolean
   */
  get hasNext() {
    return this.currentPage < this.totalPages;
  }

  /**
   * Checks if there is a previous page
   *
   * @type Boolean
   */
   get hasPrevious() {
    return this.currentPage > 1;
  }

  /**
   * Previous page number
   *
   * @type Number
   */
  get previousPage() {
    return this.currentPage - 1;
  }

  /**
   * Next page number
   *
   * @type Number
   */
  get nextPage() {
    return this.currentPage + 1;
  }

  /**
   * Generates an array containing the page links range
   *
   * @type Page[]
   */
  get pages() {
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    const pages = [];

    // data for rendering page numbers for the last pages
    if (totalPages > VISIBILE_ITEMS && currentPage + 1 >= totalPages) {
      for (let i = totalPages - VISIBILE_ITEMS + 1; i <= totalPages; i++) {
        pages.push(new Page(i, i === currentPage));
      }
    }
    // data for rendering page numbers for pages in the middle
    else if (currentPage > 2 || currentPage + 2 > totalPages) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 0 && i <= totalPages) {
          pages.push(new Page(i, i === currentPage));
        }
      }
    }
    // data for rendering page numbers for the first page
    else if (currentPage + 1 <= totalPages) {
      const maxPage = totalPages < VISIBILE_ITEMS ? totalPages : VISIBILE_ITEMS;
      for (let i = 1; i <= maxPage; i++) {
        pages.push(new Page(i, i === currentPage));
      }
    }

    // if page does not have records we should show only 1st page on the view
    if (pages.length === 0) {
      pages.push(new Page(0, true));
    }

    return pages;
  }

  @action onSize(event) {
    const { value = DEFAULT_SIZE } = event.target;
    this.router.transitionTo({ queryParams: { page: 1, size: value } });
  }

}
