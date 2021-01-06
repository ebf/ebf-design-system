'use strict';

// eslint-disable-next-line node/no-unpublished-require
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: false
    },
    outputPaths: {
      app: {
        css: {
          telekom: '/assets/telekom.css',
          ebf: '/assets/ebf.css',
        },
      },
    },
  });

  return app.toTree();
};
