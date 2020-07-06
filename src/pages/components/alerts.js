import React from 'react';
import { Alert } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import { CopyBlock, github } from 'react-code-blocks';
import withLayout from "../../with-layout"

const ALERT_TYPES = [
  { type: 'primary', icon: 'ebf-bell-fill',},
  { type: 'secondary', icon: 'ebf-bell-fill',},
  { type: 'success', icon: 'ebf-check-mark-circle-full-fill',},
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
        <Alert key={idx} variant={value.type} className="mb-4">
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert — check it out! .
        </Alert>
      ))}      
      

      {ALERT_TYPES.map(({ type, icon }) => {
          const variant = `${type}`;

          return (
            <div className="mb-3 capitalize-text copyblock-container">
              <LinkedHeading h="3" id={type + "-alert"} >{type} Alert</LinkedHeading>
              
              <Alert  variant={type}  className="mb-4">
                <i className={'alert-icon ebf ' + icon}></i>
                This is a {type} alert — check it out!
              </Alert>

              <CopyBlock
                theme={github}
                text={`<div role="alert" class="fade alert alert-${type} show">s\n\t<i class="alert-icon ebf ${icon}"></i>\n\tThis is a ${type} alert - check it out!\n</div>`}
                language="jsx"
                showLineNumbers
                wrapLines
                codeBlock
              />
            </div>
          )
        })}

        <hr></hr>


      <LinkedHeading h="2" id="links">Links Alerts</LinkedHeading>
      <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>

      {ALERT_TYPES.map((value, idx) => (
        <Alert key={idx} variant={value.type} className="mb-4">
          {/* TODO */}
          <i className={'alert-icon ebf ' + value.icon}></i>
          This is a {value.type} alert with{' '} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      ))}

      {ALERT_TYPES.map(({ type, icon }) => {
        const variant = `${type}`;

        return (
          <div className="mb-3 capitalize-text copyblock-container">
            <LinkedHeading h="3" id={type + "-linked-alert"} >{type} Alert</LinkedHeading>
            
            <Alert  variant={type} className="mb-4">
              <i className={'alert-icon ebf ' + icon}></i>
              This is a {type} alert with{' '} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
            </Alert>

            <CopyBlock
              theme={github}
              text={`<div role="alert" class="fade alert alert-${type} show">\n\t<i class="alert-icon ebf ${icon}"></i> \n\t This is a ${type} alert with \n\t<a class="alert-link" href="#" role="button">an example link</a>.\n</div>`}
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