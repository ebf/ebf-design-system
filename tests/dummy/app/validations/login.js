// BEGIN-SNIPPET login-validations.js
import { 
  validateFormat,
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  email: [
    validatePresence(true),
    validateFormat({ email: true }),
  ],
  password: [
    validatePresence(true),
  ],
};
// END-SNIPPET