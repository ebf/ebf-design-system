import { Promise } from 'rsvp';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

// BEGIN-SNIPPET loaders-controller.js
export default class DocsLoadersController extends Controller {
  @tracked promise = null;

  @action execute(fail = false) {
    this.promise = new Promise((resolve, reject) => {
      later(() => {
        if (fail) {
          reject(new Error('Oops, something went wrong'));
        } else {
          resolve('Hooray');
        }
      }, 1000);
    });
  }
}
// END-SNIPPET