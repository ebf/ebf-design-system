import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

const extractErrorMessage = (owner, key = 'errors.general') => {
  const service = owner.lookup('service:intl');
  return service.t(key, { htmlSafe: true });
};

module('Unit | Service | error-resolver', function(hooks) {
  setupTest(hooks);

  test('it should resolve error without translation', function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const resolved = service.resolve('ooops');

    assert.ok(resolved);
    assert.equal(resolved.status, 500);
    assert.equal(resolved.errors.length, 1);
    assert.equal(resolved.cause, 'ooops');
    assert.equal(resolved.errors[0].detail, 'ooops');
    assert.equal(resolved.errors[0].html, '<p>ooops</p>');
    assert.equal(resolved.errors[0].level, 'danger');
    assert.equal(resolved.errors[0].type, 'error');
  });

  test('it should resolve error and translate it', function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const resolved = service.resolve('errors.general');

    assert.ok(resolved);
    assert.equal(resolved.status, 500);
    assert.equal(resolved.errors.length, 1);
    assert.equal(resolved.cause, 'errors.general');
    assert.equal(resolved.errors[0].detail.string, extractErrorMessage(this.owner));
    assert.equal(resolved.errors[0].html, extractErrorMessage(this.owner));
    assert.equal(resolved.errors[0].level, 'danger');
    assert.equal(resolved.errors[0].type, 'error');
  });

  test('it should resolve error with a status code', function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const resolved = service.resolve({ code: 'errors.not-found', status: '404' });

    assert.ok(resolved);
    assert.equal(resolved.status, 404);
    assert.equal(resolved.errors.length, 1);
    assert.equal(resolved.cause.status, '404');
    assert.equal(resolved.cause.code, 'errors.not-found');
    assert.equal(resolved.errors[0].detail.string, extractErrorMessage(this.owner, 'errors.not-found'));
    assert.equal(resolved.errors[0].html, extractErrorMessage(this.owner, 'errors.not-found'));
    assert.equal(resolved.errors[0].level, 'danger');
    assert.equal(resolved.errors[0].type, 'error');
  });

  test('it should resolve error with a warning level from a status code', function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const resolved = service.resolve({ message: 'Invalid error', status: '422' });

    assert.ok(resolved);
    assert.equal(resolved.status, 422);
    assert.equal(resolved.errors.length, 1);
    assert.equal(resolved.cause.status, '422');
    assert.equal(resolved.cause.message, 'Invalid error');
    assert.equal(resolved.errors[0].detail.string, extractErrorMessage(this.owner));
    assert.equal(resolved.errors[0].html, extractErrorMessage(this.owner));
    assert.equal(resolved.errors[0].level, 'warning');
    assert.equal(resolved.errors[0].type, 'warning');
  });

  test('it should resolve error from the response object', function(assert) {
    const service = this.owner.lookup('service:error-resolver');
    const response = {
      errors: [{
        detail: 'email can not be empty',
      }, {
        detail: 'password can not be empty',
      }],
    };

    const resolved = service.resolve({ response });

    assert.ok(resolved);
    assert.equal(resolved.status, 500);
    assert.equal(resolved.errors.length, 2);
    assert.equal(resolved.cause.response, response);
    assert.equal(resolved.errors[0].detail, 'email can not be empty');
    assert.equal(resolved.errors[0].html, '<p>email can not be empty</p>');
    assert.equal(resolved.errors[0].level, 'danger');
    assert.equal(resolved.errors[0].type, 'error');
    assert.equal(resolved.errors[1].detail, 'password can not be empty');
    assert.equal(resolved.errors[1].html, '<p>password can not be empty</p>');
    assert.equal(resolved.errors[1].level, 'danger');
    assert.equal(resolved.errors[1].type, 'error');
  });
});
