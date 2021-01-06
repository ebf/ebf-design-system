# Pagination

{{#docs-demo class="bg-white" as |demo|}}
  {{#demo.example name="pager-example.hbs"}}
    <ul class="list-group">
      {{#each this.paged as |person|}}
        <li class="list-group-item">{{person}}</li>
      {{/each}}
    </ul>
    <Pager
      class="justify-content-center"
      @label="Employee results pages"
      @page={{this.page}}
      @pages={{this.pages}}
      @total={{this.total}}
      @onChange={{fn this.changed}}
    />
  {{/demo.example}}

  {{demo.snippet "pager-example.hbs"}}
  {{demo.snippet "pagination-demo-controller.js" label="controller.js"}}
{{/docs-demo}}