import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { CopyBlock, github } from 'react-code-blocks'

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

export default withLayout(function Buttons() {
  return (
    <>
      <LinkedHeading h="1" id="buttons">Buttons</LinkedHeading>  
      <p className="lead">Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

      <LinkedHeading h="2" id="button-types">Button types</LinkedHeading>

      {BUTTON_TYPES.map(({ type, label }) => (
        <Button className="mb-4" variant={type}>{label}</Button>
      ))}

      <LinkedHeading h="3" id="button-types-markup">Button types markup</LinkedHeading>
     
      <Row fluid="md" >
        <Col xl={10} md={12}>
          {BUTTON_TYPES.map(({ type, label }) => (
            <div className="mb-3">
              <CopyBlock
                theme={github}
                text={`<button type="button" class="btn btn-${type}">\n\t${label}\n</button>`}
                language="jsx"
                showLineNumbers
                wrapLines
                codeBlock
              />
            </div>
          ))}
        </Col>
      </Row>

      <LinkedHeading h="2" id="outline-types">Outline buttons</LinkedHeading>
      <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>

      {BUTTON_TYPES.map(({ type, label }) => {
        const variant = `outline-${type}`;

        return (
          <div className="mb-3">
            <Button className="mb-4" variant={variant}>{label}</Button>
            <p>Markup</p>
            <CopyBlock
              theme={github}
              text={`<button type="button" class="btn btn-outline-${type}">\n\t${label}\n</button>`}
              language="jsx"
              showLineNumbers
              wrapLines
              codeBlock
            />
          </div>
        )
      })}

      <LinkedHeading h="3" id="outline-button-types-markup">Outline button types markup</LinkedHeading>

      <Row fluid="md" >
        <Col xl={10} md={12}>
          {BUTTON_TYPES.map(({ type, label }) => (
            <div className="mb-3">
              <CopyBlock
                theme={github}
                text={`<button type="button" class="btn btn-outline-${type}">\n\t${label}\n</button>`}
                language="jsx"
                showLineNumbers
                wrapLines
                codeBlock
              />
            </div>
          ))}
        </Col>
      </Row>

      <LinkedHeading h="2" id="sizes">Sizes</LinkedHeading>

      <p>Fancy larger or smaller buttons? Add <code>size="lg"</code>, <code>size="sm"</code> for additional sizes.</p>
      <div className="mb-2">
        <Button className="mb-4" variant="primary" size="sm">
          Small button
        </Button>
        <Button className="mb-4" variant="secondary" size="sm">
          Small button
        </Button>
      </div>

      <div className="mb-2">
        <Button className="mb-4" variant="primary">
          Default button
        </Button>
        <Button className="mb-4" variant="secondary">
          Default button
        </Button>
      </div>
      
      <div className="mb-2">
        <Button className="mb-2" variant="primary" size="lg">
          Large button
        </Button>
        <Button className="mb-2" variant="secondary" size="lg">
          Large button
        </Button>
      </div>

      <LinkedHeading h="3" id="button-sizes-markup">Sizes markup</LinkedHeading>

      <Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          {'<button type="button" class="btn btn-primary btn-sm">Small button</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-primary">Default button</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-primary btn-lg">Large button</button>'}
        </code>
        </Col>
      </Row>

      <LinkedHeading h="2" id="block-button">Block Level Button</LinkedHeading>

      <p>Create block level buttons—those that span the full width of a parent—by adding <code>block</code></p>
      
      <Button className="mb-4" variant="primary" size="lg" block>
        Block level button
      </Button>
      <Button className="mb-4" variant="secondary" size="lg" block>
        Block level button
      </Button>

      <LinkedHeading h="3" id="block-button-markup">Block level button markup</LinkedHeading>

      <Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          {'<button type="button" class="mb-4 btn btn-primary btn-block btn-lg">Block level button</button>'}
          <br/>
          <br/>
          {'<button type="button" class="mb-4 btn btn-secondary btn-block btn-lg">Block level button</button>'}         
        </code>
        </Col>
      </Row>

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

      <LinkedHeading h="3" id="button-states-markup">Button states markup</LinkedHeading>

      <Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          
          {'<button type="button" class="btn btn-primary">Primary button</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-secondary">Secondary button</button>'} 
          <br/>
          <br/>
          <br/>
          <br/>
          {'<button disabled type="button" class="btn btn-primary">Primary button</button>'}         
          <br/>
          <br/>
          {'<button disabled type="button" class="btn btn-secondary">Secondary button</button>'}         
        </code>
        </Col>
      </Row>

    </>
  )
});