import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Buttons() {
  return (
    <>
      <LinkedHeading h="1" id="buttons">Buttons</LinkedHeading>  
      <p className="lead">Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

      <LinkedHeading h="2" id="button-types">Button types</LinkedHeading>
      <Button className="mb-4" variant="primary">Primary</Button>
      <Button className="mb-4" variant="secondary">Secondary</Button>
      <Button className="mb-4" variant="success">Success</Button>
      <Button className="mb-4" variant="danger">Danger</Button>
      <Button className="mb-4" variant="info">Info</Button>
      <Button className="mb-4" variant="warning">Warning</Button>
      <Button className="mb-4" variant="light">Light</Button>
      <Button className="mb-4" variant="dark">Dark</Button>
      <Button className="mb-4" variant="link">Link</Button>

      <LinkedHeading h="3" id="button-types-markup">Button types markup</LinkedHeading>
     
      <Row fluid="md" >
        <Col xl={10} md={12}>
          <code className="code-snippet">
            {'<button type="button" class="btn btn-primary">Primary</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-secondary">Secondary</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-success">Success</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-danger">Danger</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-info">Info</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-warning">Warning</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-light">Light</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-dark">Dark</button>'}
            <br/>
            <br/>
            {'<button type="button" class="btn btn-link">Link</button>'}
          </code>
        </Col>
      </Row>

      <LinkedHeading h="2" id="outline-types">Outline buttons</LinkedHeading>
      <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>

      <Button className="mb-4" variant="outline-primary">Primary</Button>
      <Button className="mb-4" variant="outline-secondary">Secondary</Button>
      <Button className="mb-4" variant="outline-success">Success</Button>
      <Button className="mb-4" variant="outline-danger">Danger</Button>
      <Button className="mb-4" variant="outline-info">Info</Button>
      <Button className="mb-4" variant="outline-warning">Warning</Button>
      <Button className="mb-4" variant="outline-light">Light</Button>
      <Button className="mb-4" variant="outline-dark">Dark</Button>

      <LinkedHeading h="3" id="outline-button-types-markup">Outline button types markup</LinkedHeading>

      <Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          {'<button type="button" class="btn btn-outline-primary">Primary</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-secondary">Secondary</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-success">Success</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-danger">Danger</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-primary">Info</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-warning">Warning</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-light">Light</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-dark">Dark</button>'}
          <br/>
          <br/>
          {'<button type="button" class="btn btn-outline-link">Link</button>'}
        </code>
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