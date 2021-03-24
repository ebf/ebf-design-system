'use strict';

const ADDONS = {
  '@bagaar/ember-breadcrumbs': '1.0.0-beta.3',
  'ember-await': '2.0.0',
  'ember-basic-dropdown': '3.0.16',
  'ember-bootstrap': '4.6.3',
  'ember-bootstrap-changeset-validations': '4.0.0',
  'ember-changeset': '3.13.2',
  'ember-changeset-validations': '3.14.2',
  'ember-cli-nprogress': '0.3.1',
  'ember-cli-sass': '10.0.1',
  'ember-cli-string-helpers': '5.0.0',
  'ember-debug-logger': '2.1.1',
  'ember-fetch': '8.0.4',
  'ember-in-element-polyfill': '^1.0.1',
  'ember-intl': '5.6.2',
  'ember-local-storage': '1.7.2',
  'ember-lodash': '4.19.5',
  'ember-moment': '8.0.1',
  'ember-notify': '6.0.0',
  'ember-power-calendar': '0.16.4',
  'ember-power-calendar-moment': '0.1.7',
  'ember-power-select': '4.1.3',
  'ember-sweetalert': '3.1.0',
  'ember-truth-helpers': '3.0.0'
};

module.exports = {
  name: '@ebf/design-system',
  description: 'Configure EBF design system',

  normalizeEntityName() {
    // No-op to avoid an error since we don't require an entity name
  },

  afterInstall() {
    const dependencies = this.project.dependencies();

    const packages = Object.keys(ADDONS).reduce((state, name) => {
      if (name in dependencies) {
        return state;
      }
      return [...state, { name, target: ADDONS[name] }];
    }, []);

    if (packages.length === 0) {
      return Promise.resolve();
    }

    return this.addAddonsToProject({ packages });
  }
};
