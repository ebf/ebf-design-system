# Cookies service

Ember Service used to manage Browser Cookies from the Application. 

### Usage

To read a Cookie value use the `read` method and pass the Cookie name as the first argument:

```javascript
class CookiesComponent extends Component {
    @service cookies;

    get cookie() {
        return this.cookies.read('cookie-name');
    }
}
```

Then in your component template you can do the following:

```hbs
<p>My cookie value: {{this.cookie}}<p>
```

### Sync
To update this state, simply invoke the `sync` method on the service. If the cookies are changed the state would be updated.

<BsAlert @type="default" @dismissable={{false}}>
  Please note that `AJAXService` already syncs the Cookie service state each time a request is executed.
</BsAlert>
