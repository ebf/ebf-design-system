import moment from 'moment';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// BEGIN-SNIPPET notifications-example.js
export default class DocsNotificationsExampleComponent extends Component {
  @tracked selected = null;

  @tracked notifications = [{
    icon: 'ebf-eye',
    title: 'Tec-9 Review',
    message: 'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit?',
    timestamp: moment().subtract(17, 'm'),
  }, {
    icon: 'ebf-connection',
    title: 'My name is the Lord',
    message: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
    timestamp: moment().subtract(1, 'h'),
  }, {
    icon: 'ebf-complain-hammer',
    title: 'Fact of the day',
    message: 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.',
    timestamp: moment().subtract(3, 'd'),
  }, {
    icon: 'ebf-device-smartphone',
    title: 'Phone received',
    message: 'Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.',
    timestamp: moment().subtract(4, 'd'),
  }];

  @action clear() {
    this.notifications = [];
  }

  @action select(notification) {
    this.selected = notification;
  }

  @action dismiss(notification) {
    this.notifications = this.notifications.filter(i => i !== notification);
  }
}
// END-SNIPPET