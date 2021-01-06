/* eslint-disable ember/no-computed-properties-in-native-classes */
import debug from 'debug';
import { isArray, isEmpty, flattenDepth, every, get, some } from 'lodash';
import { set, computed } from '@ember/object';
import { getOwner } from '@ember/application';
import Evented from '@ember/object/evented';
import Service, { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';
import UnauthenticatedError from '../unauthenticated-error';

const log = debug('ebf-design-system:service:session');

// Seems that there is an issue with Babbel when running tests with code coverage
// https://github.com/ember-cli/babel-plugin-ember-modules-api-polyfill/issues/112

/* istanbul ignore next */
export default class SessionService extends Service.extend(Evented) {
  /**
   * AJAX service instance used to obtain the current session information from the
   * configured API server.
   *
   * @access private
   * @type {AjaxService}
   */
  @service() ajax;

  /**
   * Local Storage Object that stores session state.
   *
   * @access private
   * @type {SessionStorage}
   */
  @storageFor('session') storage;

  /**
   * Current session information obtained from the API Server.
   * It could be `null` if the API server returns a non-ok status code or session is not yet retrieved.
   *
   * @type {?Object}
   */
  session = null;

  /**
   * Property that checks if the session is authenticated by checking
   * if the user object is present in the session.
   * @type {Boolean}
   */
  @computed.notEmpty('user') isAuthenticated;

  /**
   * Current session company associated with the user account extracted
   * from the session state.
   * @type {Object}
   */
  @computed.alias('session.company') company;

  /**
   * Current session principal/user extracted from the session state.
   * @type {Object}
   */
  @computed.alias('session.principal') user;

  /**
   * Current configuration extracted from the session state.
   * @type {Object}
   */
  @computed.alias('session.config') config;

  /**
   * Current Tenant extracted from the session state.
   * @type {Object}
   */
  @computed.alias('session.tenant') tenant;

  /**
   * Current stylesheet theme extracted from the session state.
   * @type {Object}
   */
  @computed.alias('session.theme') theme;

  /**
   * List of permissions that are associated with currently logged in user.
   * @type {Object[]}
   */
  @computed.mapBy('user.authorities', 'authority').readOnly() permissions;

  constructor() {
    super(...arguments);

    this.environment = getOwner(this).factoryFor('config:environment').class;
  }

  /**
   * Checks if this user session has provided permissions. You can defined permissions like so:
   * 
   * - hasPermission(['read', 'write']) -> means that the user needs to have both of them set
   * - hasPermission(['read', ['write', 'update']]) -> means that the user needs to have read and either write or update set
   *
   * @param  {...String} permissons
   * @return {Boolean} `true` if the current user has permssions
   */
  hasPermission() {
    // convert the arguements into an array in order to perform a check as varargs
    const permissons = flattenDepth(Array.from(arguments), 1).filter(Boolean);

    if (isEmpty(permissons)) {
      return true;
    }

    // checks if the permission is included in a set of user permissions
    const includes = permisson => this.permissions.includes(permisson);

    return every(permissons, permisson => {
      // when the permission is an array it means that we should check if at least one of them matches
      if (isArray(permisson)) {
        return some(permisson, includes);
      }
      return includes(permisson);
    });
  }

  /**
   * Tries to restore the already authenticated session if it's present. Once the Authentication API confirms
   * that the session if valid we can set it up in the service.
   * 
   * When a user session is returned a `session:restored` event would be triggered that would instruct
   * the application to redirect the user to intended Transition or an `index` by default.
   *
   * @emits {session:restored} when an authenticated session is obtained from the API Server
   * @emits {session:unauthenticated} when unauthenticated session is obtained from the API Server or
   * in case of an error that ocurred while processing the request
   * @return {Promise<Object, Error>}
   */
  async restore() {
    const url = get(this.environment, 'session.restore', '/api/auth/session');

    log(`Restoring session from SSO with endpoint: ${url}`);

    try {
      const session = await this.ajax.json(url);

      log('Obtained session data from SSO:', session);

      set(this, 'session', session);

      if (this.isAuthenticated) {
        this.trigger('session:restored', { session });
      } else {
        this.trigger('session:unauthenticated', new UnauthenticatedError());  
      }

      return session;
    } catch (e) {
      log('Failed to restore session, sending `session:unauthenticated` event', e);
      this.trigger('session:unauthenticated', e);
    }

    return null;
  }

  /**
   * Tries to invalidated the current session if it's present and triggers a `session:invalidated` event that would
   * instruct the application to reload the page and hopefully redirect to the login page.
   *
   * @emits {session:invalidated} when the current session is successfully invalidated
   * @return {Promise<Void, Error>}
   */
  async invalidate() {
    const url = get(this.environment, 'session.invalidate', '/api/auth/logout');

    log(`Invalidating session using SSO endpoint: ${url}`);

    await this.ajax.request(url, { method: 'POST' });

    this.trigger('session:invalidated', { session: this.session });

    set(this, 'session', null);
  }
}
