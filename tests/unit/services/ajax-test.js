import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ajax', function(hooks) {
  setupTest(hooks);

  test('should be able to execute HTTP requests', async function(assert) {
    const service = this.owner.lookup('service:ajax');

    const response = await service.request('https://httpbin.org/get');

    assert.ok(response);
    assert.equal(200, response.status);
  });

  test('should be able to execute JSON requests', async function(assert) {
    const service = this.owner.lookup('service:ajax');

    const json = await service.json('https://httpbin.org/get?foo=bar');

    assert.ok(json);
    assert.ok(json.args);
    assert.ok('bar', json.args.foo);
  });

  test('should be able to handle HTTP Exceptions', async function(assert) {
    const service = this.owner.lookup('service:ajax');

    try {
      await service.json('https://httpbin.org/status/400');
    } catch (e) {
      assert.ok(e);
      assert.equal(400, e.status);
    }
  });

  test('should be able to sort interceptors', async function(assert) {
    const service = this.owner.lookup('service:ajax');

    assert.equal(service.interceptors[1].name, 'logging');
    assert.equal(service.interceptors[0].name, 'ordered');
  });

  test('should be able to invoke request interceptor hook', async function(assert) {
    const service = this.owner.lookup('service:ajax');
    const interceptor = this.owner.lookup('interceptor:ordered');

    let invoked = false;
    const original = interceptor.request;

    interceptor.request = (request) => {
      invoked = true;
      return request;
    };

    await service.json('https://httpbin.org/get?foo=bar');
    assert.ok(invoked);

    interceptor.request = original;
  });

  test('should be able to invoke response interceptor hook', async function(assert) {
    const service = this.owner.lookup('service:ajax');
    const interceptor = this.owner.lookup('interceptor:ordered');

    let invoked = false;
    const original = interceptor.response;

    interceptor.response = (request, response) => {
      invoked = true;
      return response;
    };

    await service.json('https://httpbin.org/get?foo=bar');
    assert.ok(invoked);

    interceptor.response = original;
  });

  test('should be make sure that interceptor request hook returns a request', async function(assert) {
    const service = this.owner.lookup('service:ajax');
    const interceptor = this.owner.lookup('interceptor:ordered');

    const original = interceptor.request;

    interceptor.request = () => null;

    try {
      await service.json('https://httpbin.org/status/400');
    } catch (e) {
      assert.ok(e);
      assert.ok(e.message.indexOf('Interceptor ordered returned an empty state from one of it\'s hook.') !== -1);
    } finally {
      interceptor.request = original;
    }
  });

  test('should be make sure that interceptor response hook returns a response', async function(assert) {
    const service = this.owner.lookup('service:ajax');
    const interceptor = this.owner.lookup('interceptor:ordered');

    const original = interceptor.response;

    interceptor.response = () => null;

    try {
      await service.json('https://httpbin.org/status/400');
    } catch (e) {
      assert.ok(e);
      assert.ok(e.message.indexOf('Interceptor ordered returned an empty state from one of it\'s hook.') !== -1);
    } finally {
      interceptor.response = original;
    }
  });
});
