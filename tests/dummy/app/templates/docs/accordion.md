# Accordion

Native Ember Bootstrap Accordion with modded styles and Stats Component within.

{{#docs-demo as |demo|}}
  {{#demo.example name="accordion.hbs"}}
  <BsAccordion as |acc|>
    <acc.item @value="1" as |aitem|>
      <aitem.title>
        <span>First</span>
        <Icon::Ebf @icon="ebf-chevron-down" />
      </aitem.title>
      <aitem.body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea eos hic neque quia sequi sunt. Amet at atque corporis earum et fugiat illum magnam nisi sapiente voluptatem. Laudantium, quam?
      </aitem.body>
    </acc.item>
    <acc.item @value="2" as |aitem|>
      <aitem.title>
        <span>Second</span>
        <Icon::Ebf @icon="ebf-chevron-down" />
      </aitem.title>
      <aitem.body>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea eos hic neque quia sequi sunt. Amet at atque corporis earum et fugiat illum magnam nisi sapiente voluptatem. Laudantium, quam?  </p>
      </aitem.body>
    </acc.item>
    <acc.item @value="3" as |aitem|>
      <aitem.title>
        <span>Third</span>
        <Icon::Ebf @icon="ebf-chevron-down" />
      </aitem.title>
      <aitem.body>
        <Stats as |stats|>
          <stats.row @label="Product No." @value="99930996" />
          <stats.row @label="Size and weight" @value="138,4 x 67,3 x 7,3 mm | ca. 148" />
          <stats.row @label="Batter" @value="Li-Ion" />
          <stats.row @label="Camera" @value="12 Megapixel" />
          <stats.row @label="Display" @value="Retina Display 16,7 milion colors" />
          <stats.row @label="Processor" @value="Processor Type A13 Bionic Chip" />
        </Stats>
      </aitem.body>
    </acc.item>
  </BsAccordion>
  {{/demo.example}}

  {{demo.snippet "accordion.hbs"}}
{{/docs-demo}}