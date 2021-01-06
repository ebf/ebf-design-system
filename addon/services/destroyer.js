import debug from 'debug';
import { isFunction, isString, defaults } from 'lodash';
import Service, { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { assert } from '@ember/debug';
import { task } from 'ember-concurrency-decorators';
import { isAbortError } from 'ember-fetch/errors';

const CANCELED = Symbol('CANCELED');
const DEFAULT_DELETED_MESSAGE = 'notifications.delete.success';
const CONFIRM_DELETE_TITLE_MESSAGE = 'notifications.delete.title';
const CONFIRM_DELETE_TEXT_MESSAGE = 'notifications.delete.text';
const CONFIRM_DELETE_CONFIRM_MESSAGE = 'notifications.delete.confirm';
const CONFIRM_DELETE_CANCEL_MESSAGE = 'notifications.delete.cancel';

const log = debug('ebf-design-system:service:destroyer');

const defaultDestroy = (model) => {
  assert('Default `destroy` option expects that the Model has a `destroyRecord` method', isFunction(model.destroyRecord));
  return model.destroyRecord();
};

/**
 * Shows the translated message using the Notify service in the next after render run cycle
 */
const scheduleNotify = (intl, notify, severity, key) => scheduleOnce('afterRender', notify, severity, intl.t(key));

const handleSuccess = (intl, notify, key) => scheduleNotify(intl, notify, 'success', key);

const handleError = (model, error, resolver) => {
  log('An error occurred while persisting model:', model, error);
  resolver.notify(error);
};

const confirm = async (swal, intl, model, { showConfirmation, title, text, cancelButtonText, confirmButtonText }) => {
  if (showConfirmation === false) {
    return true;
  }

  const { value } = await swal.open({
    type: 'warning',
    title: intl.t(title),
    text: intl.t(text),
    cancelButtonText: intl.t(cancelButtonText),
    confirmButtonText: intl.t(confirmButtonText),
    showCancelButton: true,
    showConfirmButton: true,
    showLoaderOnConfirm: true,
    preConfirm: val => val === true || CANCELED,
  });

  return value || CANCELED;
};

const perform = async (swal, intl, executor, model, { showConfirmation = true, ...labels }) => {
  let confirmed = true;
  
  if (showConfirmation === true) {
    confirmed = await confirm(swal, intl, model, labels);
  }

  if (confirmed === CANCELED) {
    return null;
  }

  return await executor(model);
};

/**
 * Service that defines basic implementation of the process when certain record should be deleted.
 * It defines an `execute` async `ember-concurency` task and a helper `remove` function that invokes it.
 * 
 * @class DestroyerService
 * @extends Service
 */
export default class DestroyerService extends Service {
  /**
   * i18n service used to translate notifications messages.
   * 
   * @access private
   * @type {Intl}
   */
  @service('intl') intl;

  /**
   * Sweet Alert service used to show the confirmation dialog.
   * 
   * @access private
   * @type {Swal}
   */
  @service('swal') swal;
  /**
   * Notify service that creates alert notifications
   * 
   * @access private
   * @type {Notify}
   */
  @service('notify') notify;

  /**
   * Error resolver service used to resolve the error that occurred during destructuring of a model.
   * 
   * @access private
   * @type {ErrorResolver}
   */
  @service('error-resolver') resolver;

  /**
   * Executes the `execute` task that would acutally performs the removal of the model in question.
   * This method returms a `Promise` that is empty.
   *
   * @param {DS.Model|Object} model  Model to be destroyed
   * @param {Object} options         Options for the executor
   * @param {Function} options.save  Save hook that is invoked by the executor, defaults to `model.save()`
   * @param {Object} options.success Success message that is shown when the model is destroyed
   * @returns {Promise}
   */
  // eslint-disable-next-line ember/classic-decorator-hooks
  destroy(model, options = {}) {
    return this.executor.perform(model, options);
  }

  /**
   * Ember Concurrent task that performs the destruction of the model.
   *
   * @access private
   * @type {Task}
   */
  @task({ drop: true }) * executor(model = null, options = {}) {
    if (model == null) {
      return null;
    }

    // expand the options and assign the defaults
    const { destroy, success, ...labels } = defaults({ ...options }, {
      destroy: defaultDestroy,
      success: DEFAULT_DELETED_MESSAGE,
      title: CONFIRM_DELETE_TITLE_MESSAGE,
      text: CONFIRM_DELETE_TEXT_MESSAGE,
      cancelButtonText: CONFIRM_DELETE_CANCEL_MESSAGE,
      confirmButtonText: CONFIRM_DELETE_CONFIRM_MESSAGE,
      showConfirmation: true,
    });

    log('Attempting to destroy model:', model);

    assert('Invalid `destroy` option parameter. It needs to be a function', isFunction(destroy));
    assert('Invalid `success` option parameter. It needs to be a string', isString(success));

    let result = null;

    try {
      result = yield perform(this.swal, this.intl, destroy, model, labels);

      if (result === null) {
        return result;
      }

      handleSuccess(this.intl, this.notify, success);
    } catch (error) {
      if (isAbortError(error)) {
        return model;
      }

      handleError(error, model, this.resolver);
    }

    return result;
  }
}
