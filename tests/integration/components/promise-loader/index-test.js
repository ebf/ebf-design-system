import RSVP from 'rsvp';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | promise-loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the promise loading state and it should be fullfilled', async function(assert) {
    const deferred = RSVP.defer();

    this.set('promise', deferred.promise);

    await render(hbs`
      <PromiseLoader @promise={{this.promise}} as |text|>
        <p class="resolved">{{text}}</p>
      </PromiseLoader>
    `);

    assert.dom('.loading-spinner').exists();
    assert.dom('p.resolved').doesNotExist();

    deferred.resolve('Resolved value');

    await settled();

    assert.dom('.loading-spinner').doesNotExist();
    assert.dom('p.resolved').exists();
    assert.dom('p.resolved').hasText('Resolved value');
  });

  test('it renders the promise loading state and it should be rejected', async function(assert) {
    setupOnerror((error) => assert.ok(error));

    const deferred = RSVP.defer();

    this.set('promise', deferred.promise);

    await render(hbs`
      <PromiseLoader @promise={{this.promise}} as |text|>
        <p class="resolved">{{text}}</p>
      </PromiseLoader>
    `);

    assert.dom('.loading-spinner').exists();
    assert.dom('p.resolved').doesNotExist();

    deferred.reject(new Error('Rejected value'));

    await settled();

    assert.dom('.loading-spinner').doesNotExist();
    assert.dom('p.resolved').doesNotExist();
    assert.dom(this.element).containsText('Something went wrong');

    resetOnerror();
  });

});
