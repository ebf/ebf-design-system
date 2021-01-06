# Themes

EBF Design System comes with multiple themes that can be used in the application. The default theme is the `ebf` theme
but you can easily configure your application to use a different or both depending on the user session.

Here you can see the available themes and how they look like, click on the dropdown item to select a theme.

{{theme-switcher}}

## Available themes

 - ebf
 - telekom

## Single theme configuration

To use one theme simply import the desired theme `scss` file in your `app.scss` file:

```css
@import 'ebf-design-system/ebf';
```

## Mutliple theme configuration

In case you would like to support multiple themes you would need to configure your application to generate multiple
CSS files in the Ember CLI build.

Create the `ebf.scss` and `telekom.scss` files in your `styles` app folder with matching theme imports.

```css
/* styles/ebf.scss */
@import 'ebf-design-system/ebf';
```

```css
/* styles/telekom.scss */
@import 'ebf-design-system/telekom';
```

Remove the application stylesheet from your `index.html` as it would be loaded by the `theme-manager` in the
Application route.

```html
  <link integrity="" rel="stylesheet" href="{{rootURL}}assets/your-app-name.css">
```

Configure the output paths of the compiled CSS files in your `ember-cli-build.js` file like so:

```js
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    outputPaths: {
      app: {
        css: {
          telekom: '/assets/telekom.css',
          ebf: '/assets/ebf.css', // would be the default theme
        },
      },
    },
  });

  return app.toTree();
};
```

Add the theme configuration in your `config/environment.js` file so that the `theme-manager` service can
load them in runtime depending on the current session state.

```js
'use strict';

module.exports = function(environment) {
  let ENV = {
    ...,
    themes: [{
      name: 'ebf', default: true, // mark ebf as default to load this theme in case session is not present
    }, {
      name: 'telekom',
    }],
    ....
  };
}
```

Once you are done with the configuration you would need to two things in your Application router:

 - restore the session
 - setup the theme based on the session

Best place to do this is in the Application route before model hook as this would force the application to
render the `application-loading` template while the session and theme are restored and setup.

```js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('session') session;
  @service('theme-manager') manager;

  async beforeModel() {
    try {
      await this.session.restore();
      await this.manager.setup();
    } catch (e) {
      console.error('Failed to load theme', e);
    }
  }
}
```