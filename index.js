/* eslint-disable node/no-extraneous-require, node/no-unpublished-require */
'use strict';
const path = require('path');
const moment = require('moment');
const Funnel = require('broccoli-funnel');

// writes a `config/theme/theme-name` HTML meta element that contains the URL of the CSS 
const writeThemes = ({ rootURL = '/', themes = [] }) => themes.map((theme) =>
  `<meta name="config/theme/${theme.name}" content="${rootURL}assets/${theme.name}.css" >`,
).join('\n');

module.exports = {
  name: require('./package').name,

  /**
   * Hook that would inject the configured themes metadata elements in the application
   *
   * @param {String} type   Content type marking the content section in index.html
   * @param {Object} config Ember CLI config object
   */
  contentFor(type, config) {
    if (type === 'head') {
      return writeThemes(config);
    }

    return '';
  },

  /**
   * Process the config for the Application and include the build date in it.
   * 
   * @param {String} env   Current Ember CLI environment
   * @param {Object} config Ember CLI config object
   */
  config: function(env, config) {
    if (config.APP) {
      config.APP.buildDate = moment().format('L');
    }

    return this._super.config.apply(this, arguments);
  },

  /**
   * Override the method in order not to include the addon name when public resources
   * are processed by the Ember build process. We would like to put the resources in
   * the root `public` folder in the final build.
   *
   * @param {Tree} tree Public tree
   */
  treeForPublic() {
    return new Funnel(path.resolve('./public'), {
      destDir: '/',
      annotation: `Addon#treeForPublic (${this.name})`,
    });
  },
};
