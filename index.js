/* eslint-disable node/no-extraneous-require, node/no-unpublished-require */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

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
