import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// BEGIN-SNIPPET pagination-demo-controller.js
export default class DocsPaginationController extends Controller {
  @tracked page = 1;

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
    return Math.ceil(this.total / 5);
  }

  get total() {
    return this.employees.length;
  }

  get paged() {
    return this.employees.slice((this.page - 1) * 5, this.page * 5);
  }

  @action changed(page) {
    this.page = page;
  }
}
// END-SNIPPET