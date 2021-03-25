# Table

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="table-example.hbs"}}
    <Table
      {{did-insert (perform this.fetch)}}
      {{did-update (perform this.fetch) this.page}}
      {{did-update (perform this.fetch) this.size}}
      {{did-update (perform this.fetch) this.sort}}
      @columns={{this.columns}}
      @rows={{this.model.results}}
      @page={{this.page}}
      @size={{this.size}}
      @sort={{this.sort}}
      @total={{this.model.meta.total}}
      @pages={{this.model.meta.pages}}
      @isLoading={{this.fetch.isRunning}}
    />
  {{/demo.example}}

  {{demo.snippet "table-example.hbs"}}
  {{demo.snippet "table-demo-controller.js" label="controller.js"}}
{{/docs-demo}}

## Empty

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="table-empty-example.hbs"}}
    <Table
      @columns={{this.columns}}
      @page={{this.page}}
      @size={{this.size}}
      @sort={{this.sort}}
    />
  {{/demo.example}}

  {{demo.snippet "table-empty-example.hbs"}}
{{/docs-demo}}

## Loading

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="table-loading-example.hbs"}}
    <Table
      @columns={{this.columns}}
      @page={{this.page}}
      @size={{this.size}}
      @sort={{this.sort}}
      @isLoading={{true}}
    />
  {{/demo.example}}

  {{demo.snippet "table-loading-example.hbs"}}
{{/docs-demo}}

## Custom empty or loading states

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="table-yield-example.hbs"}}
    <Table
      @columns={{this.columns}}
      @page={{this.page}}
      @size={{this.size}}
      @sort={{this.sort}}
      @isLoading={{this.empty.isRunning}}
    as |table|>
      {{#if table.isLoading}}
        <div class="py-4 text-center">
          <table.loader @size="lg">
            <p>Loading data...</p>
          </table.loader>
        </div>
      {{/if}}

      {{#if table.isEmpty}}
        <table.empty @icon="ebf-box" @size="4x" class="my-4">
          <p>No employee records can be found</p>
        </table.empty>
      {{/if}}
    </Table>
  {{/demo.example}}

  {{demo.snippet "table-yield-example.hbs"}}
{{/docs-demo}}

<BsButton @onClick={{perform this.empty}}>
  Load empty state
</BsButton>