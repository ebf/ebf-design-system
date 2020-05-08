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

      <LinkedHeading h="2" id="types">Button types</LinkedHeading>
      <Button className="mb-4" variant="primary">Primary</Button>
      <Button className="mb-4" variant="secondary">Secondary</Button>
      <Button className="mb-4" variant="success">Success</Button>
      <Button className="mb-4" variant="danger">Danger</Button>
      <Button className="mb-4" ariant="info">Info</Button>
      <Button className="mb-4" variant="warning">Warning</Button>
      <Button className="mb-4" variant="light">Light</Button>
      <Button className="mb-4" variant="dark">Dark</Button>
      <Button className="mb-4" variant="link">Link</Button>

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
        <Button className="mb-4" variant="primary" size="lg">
          Large button
        </Button>
        <Button className="mb-4" variant="secondary" size="lg">
          Large button
        </Button>
      </div>

      <p>Create block level buttons—those that span the full width of a parent—by adding <code>block</code></p>
      
      <Button className="mb-4" variant="primary" size="lg" block>
        Block level button
      </Button>
      <Button className="mb-4" variant="secondary" size="lg" block>
        Block level button
      </Button>

      <Row>
        <Col sm={6}>
          <LinkedHeading h="2" id="active-button-state">Active State</LinkedHeading>
          <Button className="mb-4" variant="primary">
            Primary button
          </Button>
          <Button className="mb-4" variant="secondary">
            Secondary button
          </Button>
        </Col>

        <Col sm={6}>
          <LinkedHeading h="2" id="disabled-button-state">Disabled State</LinkedHeading>
          <Button className="mb-4" variant="primary" disabled>
            Primary button
          </Button>
          <Button className="mb-4" variant="secondary" disabled>
            Secondary button
          </Button>
        </Col>
      </Row>

    </>
  )
});