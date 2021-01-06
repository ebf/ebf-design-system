# Stats

Component used to show stats as key value pairs, like address or product details.

## Usage

<Inputs::Counter @label="Size" @placeholder="oaps" @min="10" @max="20" @value={{this.value}} @onChange={{fn (mut this.value)}} />

{{docs/stats/phone}}

## Inline

You can also show the stats inlined within a row like so:

{{docs/stats/address}}

## Custom yield value block

If you wish to render a `<LinkTo />` component or customize your markup for the value, you can do so like this:

{{docs/stats/summary}}