'use strict';

module.exports = {
  syntax: 'scss',
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-scss',
    'stylelint-a11y',
    'stylelint-prettier',
  ],
  rules: {
    /* Prettier config rules */
    'prettier/prettier': [true, {
      singleQuote: true,
      printWidth: 120,
      tabWidth: 2
    }],

    /* Standard rules */
    'max-nesting-depth': 5,
    'selector-max-compound-selectors': 5,
    
    /* Order config rules */
    'order/properties-alphabetical-order': null,
  }
}