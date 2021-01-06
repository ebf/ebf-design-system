import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('theme-manager') manager;

  async beforeModel() {
    try {
      await this.manager.setup();
    } catch (e) {
      console.error('Failed to load theme', e);
    }
  }
  
}