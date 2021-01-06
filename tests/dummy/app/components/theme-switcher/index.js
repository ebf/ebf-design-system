import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ThemeSwitcherComponent extends Component {
  @service('theme-manager') manager;
  @service session;

  @action async select(theme) {
    const { session = {} } = this.session;

    set(this.session, 'session', { ...session, theme });

    await this.manager.setup();
  }
}