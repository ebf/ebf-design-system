// BEGIN-SNIPPET address-demo-validations.js
import { validateLength, validatePresence } from 'ember-changeset-validations/validators';

export default {
  address: [
    validatePresence(true),
    validateLength({ allowBlank: false, min: 3, max: 35  }),
  ],
  postalCode: [
    validatePresence(true),
    validateLength({ allowBlank: false, min: 3, max: 10 }),
  ],
  city: [
    validatePresence(true),
    validateLength({ allowBlank: false, min: 3, max: 35 }),
  ],
  country: [
    validatePresence(true),
    validateLength({ allowBlank: false, min: 3, max: 35  }),
  ],
};
// END-SNIPPET