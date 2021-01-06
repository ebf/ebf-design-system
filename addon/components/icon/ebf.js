import { isEmpty } from 'lodash';
import { assert } from '@ember/debug';
import IconComponent from './index';

/**
 * EBF Icon component that renders the icon from the EBF iconset.
 * 
 * ```handlebars
 * <Icon::Ebf @icon="ebf-user" />
 * ```
 * 
 * @class IconEbfComponent
 * @extends IconComponent
 */
export default class IconEbfComponent extends IconComponent {
  get classNames() {
    const { icon, card = false, type = null, size = null } = this.args;
    
    assert('You need to define an @icon argument to the <Icon::Ebf/> component', !!icon);

    const classNames = ['ebf icon', icon];

    if (!isEmpty(type)) {
      classNames.push(`icon-${type}`);
    }

    if (!isEmpty(size)) {
      classNames.push(`icon-${size}`);
    }

    if (card) {
      classNames.push(`ebf-card-icon`);
    }

    return classNames.join(' ');
  }
}
