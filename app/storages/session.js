import StorageObject from 'ember-local-storage/local/object';

/**
 * Local Storage object that stores session variables
 *
 * @class SessionStorage
 * @extends StorageObject
 */
class SessionStorage extends StorageObject {

  /**
   * Currently selected locale for the current session
   * 
   * @property locale
   * @type {Locale}
   * @default null
   */

}

SessionStorage.reopenClass({
  initialState() {
    return { locale: null };
  },
});

export default SessionStorage;