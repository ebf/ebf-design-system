import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

// BEGIN-SNIPPET ajax-demo-component.js
export default class DocsServiceAjaxComponent extends Component {
  @service ajax;

  @task({ drop: true }) * fetch(controller) {
    yield timeout(400);

    const response = yield this.ajax.request('https://httpbin.org/get', {
      signal: controller.signal,
    });

    return yield response.text();
  }

  /**
   * Invoked by the `<Await />` component that also passes the `AbortController` instance
   * to manage the lifecycle of the HTTP request.
   * 
   * @param {AbortController} controller 
   */
  @action defer(_, controller) {
    return this.fetch.perform(controller);
  }
}
// END-SNIPPET