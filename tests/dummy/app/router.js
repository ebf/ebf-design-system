import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('usage');
    this.route('colors');
    this.route('icons');
    this.route('typography');
    this.route('layout');

    this.route('address');
    this.route('alerts');
    this.route('buttons');
    this.route('cards');
    this.route('footer');
    this.route('form');
    this.route('headline');
    this.route('errors');
    this.route('modals');
    this.route('header');
    this.route('navs');
    this.route('inputs');
    this.route('notifications');
    this.route('language-switcher');
    this.route('loaders');
    this.route('pagination');
    this.route('progress');
    this.route('stats');
    this.route('table');
    this.route('themes');

    this.route('services', function() {
      this.route('ajax');
      this.route('cookies');
      this.route('destroyer');
      this.route('locale');
      this.route('error-resolver');
      this.route('persister');
    });
  });
});

export default Router;
