import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

const TYPES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

function HelpBlock({ children }) {
  return (
    <small className="form-text text-muted">
      {children}
    </small>
  );
}

function Checkbox({ children, ...props }) {
  return (
    <Form.Check type='checkbox' {...props}>
      {children}
    </Form.Check>
  );
}

function Radio({ children, ...props }) {
  return (
    <Form.Check type='radio' {...props}>
      {children}
    </Form.Check>
  );
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </Form.Group>
  );
}

export default withLayout(function FormsPage() {
  return (
    <>
      <h1>Forms</h1>
      <p className="lead">
        Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
      </p>

      <LinkedHeading h="2" id="overview">Overview</LinkedHeading>
      
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <LinkedHeading h="2" id="form-controls">Form controls</LinkedHeading>
      
      <Form>
        <FieldGroup
          id="Form.ControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
        />
        <FieldGroup
          id="Form.ControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <FieldGroup id="Form.ControlsPassword" label="Password" type="password" />
        <FieldGroup
          id="Form.ControlsFile"
          type="file"
          label="File"
          help="Example block-level help text here."
        />

        <Checkbox checked readOnly label="checkbox" />
        <Radio checked readOnly label="radio" />

        <Form.Group>
          <Checkbox inline label="1" />
          <Checkbox inline label="2" />{' '}
          <Checkbox inline label="3" />
        </Form.Group>
        <Form.Group>
          <Radio name="radioGroup" inline label="1" />{' '}
          <Radio name="radioGroup" inline label="2" />{' '}
          <Radio name="radioGroup" inline label="3" />
        </Form.Group>

        <Form.Group controlId="Form.ControlsSelect">
          <Form.Label>Select</Form.Label>
          <Form.Control as="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Form.ControlsSelectMultiple">
          <Form.Label>Multiple select</Form.Label>
          <Form.Control as="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Form.ControlsTextarea">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" placeholder="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Static text</Form.Label>
          
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      <LinkedHeading h="2" id="inline-forms">Inline forms</LinkedHeading>
      <Form inline>
        <Form.Group controlId="formInlineName">
          <Form.Label>Name</Form.Label>{' '}
          <Form.Control type="text" placeholder="Jane Doe" />
        </Form.Group>{' '}
        <Form.Group controlId="formInlineEmail">
          <Form.Label>Email</Form.Label>{' '}
          <Form.Control type="email" placeholder="jane.doe@example.com" />
        </Form.Group>{' '}
        <Button type="submit">Send invitation</Button>
      </Form>

      <LinkedHeading h="2" id="form-rows">Form rows</LinkedHeading>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
      
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formGridCheckbox">
          <Checkbox label="Check me out" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
});