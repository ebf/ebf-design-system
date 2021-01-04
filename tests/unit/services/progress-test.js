import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Service | progress', function(hooks) {
  setupTest(hooks);

  test('it should increase or decrease the counter', function(assert) {
    const service = this.owner.lookup('service:progress');
    assert.equal(service.counter, 0);
    
    run(() => service.start());
    assert.equal(service.counter, 1);
    
    run(() => service.start());
    assert.equal(service.counter, 2);
    
    run(() => service.done());
    assert.equal(service.counter, 1);

    run(() => service.done());
    assert.equal(service.counter, 0);
    
    run(() => service.done());
    assert.equal(service.counter, 0);
  });
});
