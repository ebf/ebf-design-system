# Persister Service

`PersisterService` is used to invoke `save` methods on your `DS.Model` or on a `Changeset` instance.

## Usage

To use the service in your components or controllers, simply inject the `persist` service and call the `persist` method.

In this example we are using the `<PromiseLoader />` component that would show the loader while the `save` operation
is executing.

{{docs/persister/example}}

## Helper

You can also the `persist` helper to invoke the `PersisterService#persist` method from your templates. There is no need
to manually invoke it if your are dealing Ember Data models.

Usualy this helper is used in conjuction with the `<ChangesetForm />` where the on submit handler is invoking the `persist` helper:

{{docs/persister/helper}}
