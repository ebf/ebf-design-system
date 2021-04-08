import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

// BEGIN-SNIPPET pagination-demo-controller.js
export default class DocsPaginationController extends Controller {
  queryParams = ['page', 'size'];

  @tracked page = 1;
  @tracked size = 10;

  employees = [
    'Victoria	Edwards',
    'Savana	Martin',
    'Ryan	Owens',
    'Alissa	Kelley',
    'Antony	Gray',
    'Adam	Armstrong',
    'Evelyn	Smith',
    'Dale	Ross',
    'Arianna	Craig',
    'Rafael	Kelley',
    'Dominik	Crawford',
    'Eric	Alexander',
    'Paul	Foster',
    'Cherry	Montgomery',
    'Maddie	Miller',
    'Jack	Moore',
    'Rubie	Craig',
    'Amelia	Thomas',
    'Blake	Chapman',
    'Hailey	Carroll',
    'Elise	Craig',
    'Rosie	Morgan',
    'Jessica	Grant',
    'Victor	Gray',
    'Sofia	Elliott',
    'Fiona	Wright',
    'Myra	Harris',
    'Ryan	Cole',
    'Maya	Montgomery',
  ];

  get pages() {
    return Math.ceil(this.total / this.size);
  }

  get total() {
    return this.employees.length;
  }

  get paged() {
    return this.employees.slice((this.page - 1) * this.size, this.page * this.size);
  }
}
// END-SNIPPET