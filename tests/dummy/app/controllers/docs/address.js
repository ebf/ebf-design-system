import RSVP from 'rsvp';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

// BEGIN-SNIPPET address-demo-controller.js
export default class DocsErrorsController extends Controller {
  @tracked model = {};
  @tracked additional = false;
  @tracked state = false;

  @action save() {
    return new RSVP.Promise(resolve => later(resolve, 1000));
  }
}
// END-SNIPPET