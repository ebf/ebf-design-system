import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { CopyBlock, monoBlue } from 'react-code-blocks'

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

const BUTTON_TYPES = [{
  type: 'primary',
  label: 'Primary',
}, {
  type: 'secondary',
  label: 'Secondary',
}, {
  type: 'success',
  label: 'Success',
}, {
  type: 'danger',
  label: 'Danger',
}, {
  type: 'info',
  label: 'Info',
}, {
  type: 'warning',
  label: 'Warning',
}, {
  type: 'dark',
  label: 'Dark',
}, {
  type: 'link',
  label: 'Link',
}];

const BUTTON_SIZES = [{
  type: 'primary',
  size: 'sm',
  label: 'Small',
}, {
  type: 'primary',
  size: '',
  label: 'Default',
}, {
  type: 'primary',
  size: 'lg',
  label: 'Large',
}];


const BUTTON_BLOCK = [{
  type: 'primary',
  block: 'block',
  label: 'Block',
}];

const BUTTON_DISABLED = [{
  type: 'primary',
  state: 'disabled',
  label: 'Disabled',
}];

export default withLayout(function Buttons() {
  return (
    <>
      <LinkedHeading h="1" id="buttons">Buttons</LinkedHeading>  
      <p className="lead">Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

      <LinkedHeading h="2" id="button-types">Button types</LinkedHeading>

      {BUTTON_TYPES.map(({ type, label }) => (
        <Button className="mb-4" variant={type}>{label}</Button>
      ))}

      {BUTTON_TYPES.map(({ type, label }) => {
        const variant = `${type}`;

        return (
          <div className="mb-3">
            <LinkedHeading h="3" id={label + "-button"}>{label} Button</LinkedHeading>
            <Button className="mb-4" variant={variant}>{label}</Button>
            <CopyBlock
              theme={monoBlue}
              text={`<button type="button" class="btn btn-outline-${type}">\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })}

      <br/>
      <br/>
      <br/>

      <LinkedHeading h="2" id="outline-buttons">Outline buttons</LinkedHeading>
      <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>


      {BUTTON_TYPES.map(({ type, label }) => (
        <Button className="mb-4" variant={'outline-' + type}>{label}</Button>
      ))}

      {BUTTON_TYPES.map(({ type, label }) => {
        const variant = `outline-${type}`;

        return (
          <div className="mb-3">
            <LinkedHeading h="3" id={label + "-outline-button"}>{label} Outline Button</LinkedHeading>
            <Button className="mb-4" variant={variant}>{label}</Button>            
            <CopyBlock
              theme={monoBlue}
              text={`<button type="button" class="btn btn-outline-${type}">\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })}

      <br/>
      <br/>
      <br/>

      <LinkedHeading h="2" id="button-sizes">Sizes</LinkedHeading>

      <p>Fancy larger or smaller buttons? Add classes <code>"btn-sm"</code>, <code>"btn-lg"</code> for additional sizes.</p>
      
      {BUTTON_SIZES.map(({ type, size, label }) => (
        <div className="mb-2">
          <Button className="mb-4" size={size} variant={type}>{label} Button</Button>
          <Button className="mb-4" size={size} variant="secondary">{label} Button</Button>
        </div>
      ))}

      {BUTTON_SIZES.map(({ type, size, label }) => {
        const variant = `${type}`;

        return (
          <div className="mb-3">
            <LinkedHeading h="3" id={size + "Button"}>{label} Outline Button</LinkedHeading>
            <Button className="mb-4" size={size} variant={type}>{label}</Button>            
            <CopyBlock
              theme={monoBlue}
              text={`<button type="button" class="btn btn-${type} btn-${size}">\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })}

      <br/>
      <br/>
      <br/>
     


      <LinkedHeading h="2" id="block-button">Block Level Button</LinkedHeading>

      <p>Create block level buttons—those that span the full width of a parent—by adding <code>block</code></p>

      {BUTTON_BLOCK.map(({ type, block, label }) => (
        <div className="mb-2">
          <Button className="mb-4" block={block} variant={type}>{label} Level Button</Button>
          <Button className="mb-4" block={block} variant="secondary">{label} Level Button</Button>
        </div>
      ))}  

      {BUTTON_BLOCK.map(({ type, block, label }) => {
        const variant = `${type}`;

        return (
          <div className="mb-3">
            <LinkedHeading h="3" id={block + "-button-markup"}>{label} Level Button Markup</LinkedHeading>
            <Button className="mb-4" block={block} variant={type}>{label}</Button>            
            <CopyBlock
              theme={monoBlue}
              text={`<button type="button" class="btn btn-${type} btn-${block}">\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })}    
      
      <br/>
      <br/>
      <br/>
      
      <LinkedHeading h="2" id="button-states">Button states</LinkedHeading>

      <Row>
        <Col sm={6}>
          <LinkedHeading h="3" id="active-button-state">Active State</LinkedHeading>
          <Button className="mb-4" variant="primary">
            Primary button
          </Button>
          <Button className="mb-4" variant="secondary">
            Secondary button
          </Button>
        </Col>

        <Col sm={6}>
          <LinkedHeading h="3" id="disabled-button-state">Disabled State</LinkedHeading>
          <Button className="mb-4" variant="primary" disabled>
            Primary button
          </Button>
          <Button className="mb-4" variant="secondary" disabled>
            Secondary button
          </Button>
        </Col>
      </Row>

      <LinkedHeading h="3" id="disabled-button-markup">Disabled Button Markup</LinkedHeading>

      <Button className="mb-4" variant="primary" disabled>
            Primary button
          </Button>
      
      {BUTTON_DISABLED.map(({ type, state, label }) => {
        const variant = `${type}`;

        return (
          <div className="mb-3">          
            <CopyBlock
              theme={monoBlue}
              text={`<button type="button" class="btn btn-${type}" ${state} >\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })} 

    </>
  )
});