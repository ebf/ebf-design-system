# AJAX Service

`AJAXService` is used to execute HTTP requests against a remote endpoints and builds upon `ember-fetch` addon.

## Usage

To use the service in your components or controllers, simply inject the `ajax` service and call the `request` method.

In this example we are using the `<Await />` component that would execute the Ember Concurrent Task that would fetch
data from the `https://httpbin.org` service.

{{docs/ajax/example}}

## Request Interceptors

`AJAX Service` also uses `RequestInterceptor` chain to provide additional configuration of each Request and Response that
is executed through the service.

Use the following Ember CLI generator command to create your generator:

```shell
ember g interceptor logging
```

This would create a new `RequestInterceptor` class that we can use to log each request and response.

Open your Dev Tools Console and you would see that each request and response are logged when you click on the
`Execute request` button above.

<DocsSnippet @name="logging-interceptor.js" />

### Order of execution

The interceptor can be ordered in the same way the Ember Initializers are, simple define the before and after conditions
and the AJAX Service would the rest.

<DocsSnippet @name="ordered-interceptor.js" />
