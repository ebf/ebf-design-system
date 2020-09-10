import React from 'react';
import { Spinner } from 'react-bootstrap';
import { CopyBlock, github } from 'react-code-blocks';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Spinners() {
  return (
    <>
      <LinkedHeading h="1" id="modals">Spinners</LinkedHeading> 
      
      <LinkedHeading h="2" id="demo">Big Spinner</LinkedHeading>

      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <br/>

      <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>               
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div role="status" class="spinner-border text-primary">\n\t<span class="sr-only">Loading...</span>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

      <LinkedHeading h="2" id="demo">Small Spinner</LinkedHeading>

      <Spinner animation="border" role="status" variant="primary" size="sm">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <br/>

      <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>                
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div role="status" class="spinner-border spinner-border-sm text-primary">\n\t<span class="sr-only">Loading...</span>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>
      
    </>
  )
});