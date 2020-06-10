import React, { useState } from 'react';
import { Spinner, SpinnerProps } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Spinners() {
  return (
    <>
      <LinkedHeading h="1" id="modals">Spinners</LinkedHeading> 
      
      <LinkedHeading h="2" id="demo">Live demo</LinkedHeading>

      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>


      <Spinner animation="border" role="status" variant="primary" size="sm">
        <span className="sr-only">Loading...</span>
      </Spinner>
      
    </>
  )
});