# Progress

Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

For the full documentation of a simple progress bar please refer to the [Bootstrap Docs](https://getbootstrap.com/docs/4.5/components/progress/)

## Progress Bar

<DocsDemo as |demo|>
  <demo.example @name="progress-bar.hbs">
    <Progress::Bar @value="33" />
  </demo.example>

  {{demo.snippet "progress-bar.hbs"}}
</DocsDemo>

### Striped progress bar

<DocsDemo as |demo|>
  <demo.example @name="progress-bar-striped.hbs">
    <Progress::Bar
      @min="0"
      @max="10"
      @value="8"
      class="bg-success progress-bar-striped"
    />
  </demo.example>

  {{demo.snippet "progress-bar-striped.hbs"}}
</DocsDemo>

### Animated progress bar

<DocsDemo as |demo|>
  <demo.example @name="progress-bar-animated.hbs">
    <Progress::Bar
      @min="10"
      @max="20"
      @value="15"
      class="bg-warning progress-bar-striped progress-bar-animated"
    />
  </demo.example>

  {{demo.snippet "progress-bar-animated.hbs"}}
</DocsDemo>

## Progress Steps

{{docs/progress/example}}