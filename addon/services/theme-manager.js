/* eslint-disable ember/no-computed-properties-in-native-classes */
import RSVP from 'rsvp';
import debug from 'debug';
import { A } from '@ember/array';
import Service, { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import { computed, observer } from '@ember/object';
import { isBlank, isEmpty } from '@ember/utils';
import { later } from '@ember/runloop';

const log = debug('ebf-design-system:service:theme-manager');

const load = (element, href) => {
  return new RSVP.Promise((resolve, reject) => {
    element.onload = () => later(resolve, 200);
    element.onerror = reject;
    element.setAttribute('href', href);
  }).finally(() => {
    element.onload = null;
    element.onerror = null;
  });
};

/**
 * Service that is managing different Unite Themes that are defined for Tennats.
 *
 * Each Tenant could have a dedicated CSS Theme depending on the configuration. This Tenant configuration
 * is extracted by the `SessionService` each time the Application loads.
 *
 * @class ThemeManagerService
 * @extends Service
 */
export default class ThemeManagerService extends Service {
  @service() session;

  @computed() get element() {
    const element = document.createElement('link');
    element.setAttribute('id', 'theme-stylesheet');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    document.querySelector('head').appendChild(element);
    return element;
  }

  @computed get themes() {
    const { themes = [] } = getOwner(this).factoryFor('config:environment').class;

    return A(themes.map((theme) => {
      const element = document.querySelector(`meta[name="config/theme/${theme.name}"]`);
    
      if (element) {
        return { ...theme, src: element.content };
      }
    
      return null;
    }).filter(Boolean));
  }

  @computed('themes.[]', 'session.theme') get active() {
    const name = this.session.theme;

    let theme = null;

    if (!isBlank(name)) {
      theme = this.themes.findBy('name', name);
    }

    if (isEmpty(theme)) {
      theme = this.themes.findBy('default', true);
    }

    return theme;
  }

  /**
   * Setup a Theme for the currently active Client configuration.
   * CSS Asset is loaded using the `head-data` service that renders the stylesheet tag.
   */
  // eslint-disable-next-line ember/no-observers
  setup = observer('active', function() {
    const { name, src } = this.active;

    log(`Attempting to load theme: '${name}' - ${src}`);

    return load(this.element, src);
  })
}
