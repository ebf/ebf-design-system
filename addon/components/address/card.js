import Component from '@glimmer/component';
import { typeOf } from '@ember/utils';

/**
 * Component that renders the address information in a card component.
 * 
 * ```handlebars
 * <Address::Card
 *  @label="Delivery address"
 *  @recipient="John doe"
 *  @address="Fake street 123"
 *  @city="NYC"
 *  @country="USA"
 * />
 * ```
 * 
 * @class AddressCardComponent
 * @extends Component
 */
export default class AddressCardComponent extends Component {
  get recipient() {
    const { address = {}, recipient } = this.args;
    return recipient || address.recipient;
  }

  get address() {
    const { address = {} } = this.args;

    if (typeOf(address) === 'string') {
      return address;
    }

    return address.address;
  }

  get additionalAddress() {
    const { address = {}, additionalAddress } = this.args;
    return additionalAddress || address.additionalAddress;
  }

  get city() {
    const { address = {}, city } = this.args;
    return city || address.city;
  }

  get postalCode() {
    const { address = {}, postalCode } = this.args;
    return postalCode || address.postalCode;
  }

  get state() {
    const { address = {}, state } = this.args;
    return state || address.state;
  }

  get country() {
    const { address = {}, country } = this.args;
    return country || address.country;
  }
  
}
