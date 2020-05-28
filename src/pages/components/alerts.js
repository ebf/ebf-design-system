import React from 'react';
import { Alert } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import { CopyBlock, monoBlue } from 'react-code-blocks';
import withLayout from "../../with-layout"

const ALERT_TYPES = [
  { type: 'primary', icon: 'ebf-bell-fill',},
  { type: 'secondary', icon: 'ebf-bell-fill',},
  { type: 'success', icon: 'ebf-check-mark-circle',},
  { type: 'danger', icon: 'ebf-alert-wide-fill',},
  { type: 'warning', icon: 'ebf-alert-wide-fill',},
  { type: 'info', icon: 'ebf-info-fill',},
  { type: 'light', icon: 'ebf-bell-fill',},
  { type: 'dark', icon: 'ebf-bell-fill',},
];


export default withLayout(function Alerts () {
  return (
    <>
      <LinkedHeading h="1" id="alerts">Alerts</LinkedHeading>   
      <p className="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>   
     

      <LinkedHeading h="2" id="examples">Examples</LinkedHeading>
      <p>
        Alerts are available for any length of text, as well as an optional dismiss button.
        For proper styling, use one of the eight <code>variant</code>s.
      </p>
      
      {ALERT_TYPES.map((value, idx) => (
        <Alert key={idx} variant={value.type}>
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert — check it out!
        </Alert>
      ))}

      <Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          {'<div role="alert" class="fade alert alert-primary show"><i class="alert-icon ebf ebf-bell-fill"></i> This is a primary alert — check it out!</div>'}
                
        </code>
        </Col>
      </Row>

      <LinkedHeading h="2" id="links">Links</LinkedHeading>
      <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>

      {ALERT_TYPES.map((value, idx) => (
        <Alert key={idx} variant={value.type}>
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert with{' '} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      ))}

      

<Row fluid="md" >
        <Col xl={10} md={12}>
        <code className="code-snippet">
          {'<div role="alert" class="fade alert alert-primary show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a primary alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-secondary show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a secondary alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-success show"><i class="alert-icon ebf ebf-check-mark-circle"></i>This is a success alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-danger show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a danger alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-warning show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a warning alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-info show"><i class="alert-icon ebf ebf-info-fill"></i>This is a info alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-light show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a light alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
          <br/>
          <br/>
          {'<div role="alert" class="fade alert alert-dark show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a dark alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'}       
        </code>
        </Col>
      </Row>
      
    </>
  )
});