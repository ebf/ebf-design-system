import React from 'react';
import { Alert } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

const TYPES = [
  { type: 'primary', icon: 'ebf-bell-fill',},
  { type: 'secondary', icon: 'ebf-bell-fill',},
  { type: 'success', icon: 'ebf-check-mark-circle',},
  { type: 'danger', icon: 'ebf-alert-wide-fill',},
  { type: 'warning', icon: 'ebf-alert-wide-fill',},
  { type: 'info', icon: 'ebf-info-fill',},
  { type: 'light', icon: 'ebf-bell-fill',},
  { type: 'dark', icon: 'ebf-bell-fill',},
];


export default withLayout(function Alerts() {
  return (
    <>
      <LinkedHeading h="1" id="alerts">Alerts</LinkedHeading>   
      <p className="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>


      <LinkedHeading h="2" id="examples">Examples</LinkedHeading>
      <p>
        Alerts are available for any length of text, as well as an optional dismiss button.
        For proper styling, use one of the eight <code>variant</code>s.
      </p>
      
      {TYPES.map((value, idx) => (
        <Alert key={idx} variant={value.type}>
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert — check it out!
        </Alert>
      ))}

      <LinkedHeading h="2" id="links">Links</LinkedHeading>
      <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>

      {TYPES.map((value, idx) => (
        <Alert key={idx} variant={value.type}>
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert with{' '} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      ))}
    </>
  )
});