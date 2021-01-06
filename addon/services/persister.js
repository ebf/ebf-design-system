import debug from 'debug';
import { InvalidError } from '@ember-data/adapter/error';
import { isFunction, isString, defaults } from 'lodash';
import Service, { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { assert } from '@ember/debug';
import { task } from 'ember-concurrency-decorators';
import { isAbortError, isInvalidResponse } from 'ember-fetch/errors';
import { isChangeset } from 'validated-changeset';

const DEFAULT_SUCCESS_MESSAGE = 'notifications.save.success';
const DEFAULT_INVALID_MESSAGE = 'notifications.save.invalid';

const log = debug('ebf-design-system:service:persister');

const defaultSave = (model) => {
  assert('Default `save` option expects that the Model has a `save` method', isFunction(model.save));
  return model.save();
};

// Shows the translated message using the Notify service in the next after render run cycle
const scheduleNotify = (intl, notify, severity, key) => scheduleOnce('afterRender', notify, severity, intl.t(key));

const handleSuccess = (intl, notify, key) => scheduleNotify(intl, notify, 'success', key);

const handleInvalid = (model, intl, notify, key) => {
  scheduleNotify(intl, notify, 'warning', key);

  if (!isChangeset(model)) {
    return;
  }

  const { errors = [] } = model.data || {};

  errors.forEach(({ attribute, message }) => {
    model.pushErrors(attribute, message);
  });
};

const handleError = (model, error, resolver) => {
  log('An error occurred while persisting model:', model, error);
  resolver.notify(error);
};

/**
 * Services that persists the Ember Data models or
 * It defines `persist` async `ember-concurency` task.
 *
 * @class PersisterService
 * @extends {Service}
 */
export default class PersisterService extends Service {
  /**
   * i18n service used to translate notifications messages.
   * 
   * @access private
   * @type {Intl}
   */
  @service('intl') intl;

  /**
   * Notify service that creates alert notifications
   * 
   * @access private
   * @type {Notify}
   */
  @service('notify') notify;

  /**
   * Error resolver service used to resolve the error that occurred during persisting of a model.
   * 
   * @access private
   * @type {ErrorResolver}
   */
  @service('error-resolver') resolver;

  /**
   * Executes the `execute` task that would acutally performs the persistence of the model in question.
   *
   * This method returms a `Promise` that is empty.
   *
   * @method persist
   * @param {DS.Model|Object} model  Model to be saved
   * @param {Object} options         Options for the executor
   * @param {Function} options.save  Save hook that is invoked by the executor, defaults to `model.save()`
   * @param {Object} options.success Success message that is shown when the model is persisted
   * @param {Object} options.invalid Invalid message that is shown when the model is in a invalid state
   * @returns {Promise}
   */
  persist(model, options = {}) {
    return this.executor.perform(model, options);
  }

  /**
   * Ember Concurrent task that performs the persistance of the model.
   *
   * @access private
   * @type {Task}
   */
  @task({ drop: true }) * executor(model, options = {}) {
    // expand the options and assign the defaults
    const { save, success, invalid } = defaults({ ...options }, {
      save: defaultSave, success: DEFAULT_SUCCESS_MESSAGE, invalid: DEFAULT_INVALID_MESSAGE,
    });

    log('Attempting to persist model:', model);

    assert('You need to pass model value that should be persisted', !!model);
    assert('Invalid `save` option parameter. It needs to be a function', isFunction(save));
    assert('Invalid `success` option parameter. It needs to be a string', isString(success));
    assert('Invalid `invalid` option parameter. It needs to be a string', isString(invalid));

    let result = null;

    try {
      result = yield save(model);

      handleSuccess(this.intl, this.notify, success);
    } catch (error) {
      if (isAbortError(error)) {
        return model;
      }

      if (isInvalidResponse(error) || error instanceof InvalidError) {
        handleInvalid(model, this.intl, this.notify, invalid);
      } else {
        handleError(model, error, this.resolver);
      }

      throw error;
    }

    return result;
  }
}
