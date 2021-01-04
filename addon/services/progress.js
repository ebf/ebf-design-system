import Service from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import NProgress from 'nprogress';

/**
 * Service used to manage `NProgress` that also keeps track how many asynchronous
 * operations were done in order to show or hide the progress bar.
 * 
 * @access protected
 * @class ProgressService
 * @extends Service
 */
export default class ProgressService extends Service {
  /**
   * Current progress counter.
   *
   * It is used to check if there are still any pending requests in order to
   * show or hide the `NProgress` indicator.
   *
   * @type {Number}
   * @public
   */
  counter = 0;

  /**
   * Start the NProgress by showing loading bar and indicator if it's not already shown.
   * 
   * @public
   */
  start() {
    this.counter = this.counter + 1;

    if (!NProgress.isStarted()) {
      scheduleOnce('afterRender', NProgress, 'start');
    }

    return this.counter;
  }

  /**
   * Stop the NProgress and hide the loading bar and indicator if all
   * pending operations are finished.
   * 
   * @public
   */
  done() {
    let counter = this.counter - 1;

    if (counter <= 0 && NProgress.isStarted()) {
      scheduleOnce('afterRender', NProgress, 'done');
    }

    if (counter < 0) {
      counter = 0;
    }

    this.counter = counter;

    return counter;
  }
}
