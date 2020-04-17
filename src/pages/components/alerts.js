import React from 'react';
import { Alert } from 'react-bootstrap';

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

export default withLayout(function Alerts() {
  return (
    <>
      <h1>Alerts</h1>
      <p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

      <LinkedHeading h="2" id="examples">Examples</LinkedHeading>
      <p>
        Alerts are available for any length of text, as well as an optional dismiss button.
        For proper styling, use one of the eight <code>variant</code>s.
      </p>
      
      {TYPES.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          {/* TODO */}
          <i className="alert-icon ebf ebf-alert-01-fill"></i>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      <LinkedHeading h="2" id="links">Links</LinkedHeading>
      <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>

      {TYPES.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          {/* TODO */}
          <i className="alert-icon ebf ebf-alert-01-fill"></i>
          This is a {variant} alert with{' '} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      ))}
    </>
  )
});