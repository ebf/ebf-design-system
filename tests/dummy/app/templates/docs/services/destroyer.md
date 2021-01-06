# Destroyer Service

`DestroyerService` is used to delete or destroy Ember Data models in a safe way by asking for a user confirmation
via the Sweet Alert dialog. Once the user confirms that he wants to destroy the model, the `destroyer` service
would invoke the `DS.Model#destroyRecord` method that would remove the model from the store.

## Usage

To use the service in your components or controllers, simply inject the `destroyer` service and call the `destroy` method.

In this example we are using the `<PromiseLoader />` component that would show the loader while the `save` operation
is executing.

{{docs/destroyer/example}}

## Helper

You can also the `destroy` helper to invoke the `DestroyerService#destroy` method from your templates. There is no need
to manually invoke it if your are dealing Ember Data models.

{{docs/destroyer/helper}}
