import { tracked } from '@glimmer/tracking';

/**
 * Object containing the available sort directions for a table column
 */
export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

/**
 * Class containing the Table sort information of a column that is derived
 * from the query parameter value.
 * 
 * @class Sort
 */
export default class Sort {
  @tracked column;
  @tracked direction = SORT_DIRECTIONS.ASC;

  constructor(column, direction = SORT_DIRECTIONS.ASC) {
    this.column = column;

    // invalid direction, default to ASC
    if (Object.values(SORT_DIRECTIONS).indexOf(direction) < 0) {
      this.direction = SORT_DIRECTIONS.ASC;
    } else {
      this.direction = direction;
    }
  }

  get ascending() {
    return this.direction === SORT_DIRECTIONS.ASC;
  }

  get decending() {
    return this.direction === SORT_DIRECTIONS.DESC;
  }

  get reversed() {
    const direction = this.ascending ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC;
    return `${this.column},${direction}`;
  }
}