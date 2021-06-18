import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('examples', function() {
    this.route('login');
    this.route('dashboard');
    this.route('webshop');
    this.route('webshop-search');
    this.route('webshop-product-details');   
    this.route('webshop-shopping-cart');   
    this.route('cost-center');
    this.route('cost-center-new');
    this.route('address-management');
    this.route('address-management-new');
    this.route('orders');
    this.route('summary');
    this.route('confirmation');
    this.route('orders-summary');
    this.route('order-details');
    this.route('saved-shopping-cart');
    this.route('saved-shopping-cart-empty-state');
  }) 
  docsRoute(this, function() {
    this.route('usage');
    this.route('colors');
    this.route('icons');
    this.route('typography');
    this.route('layout');

    this.route('accordion');
    this.route('address');
    this.route('alerts');
    this.route('buttons');
    this.route('breadcrumbs');
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
    this.route('layout-component');
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
