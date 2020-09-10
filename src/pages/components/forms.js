import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { CopyBlock, atomOneLight } from 'react-code-blocks';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

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
      <LinkedHeading h="1" id="forms">Forms</LinkedHeading> 
      <p className="lead">
        Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
      </p>

      <LinkedHeading h="2" id="form">Form</LinkedHeading>
      
      <Form className="mb-4">
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

      <div className="mb-4 copyblock-container">
            <div>
                <h3>Code example</h3>               
            </div>
        
            <CopyBlock
            theme={atomOneLight}
            text={`<form>\n\t<div class="form-group">\n\t\t<label class="form-label" for="formBasicEmail">Email address</label>\n\t\t<input placeholder="Enter email" type="email" id="formBasicEmail" class="form-control">\n\t\t<small class="text-muted form-text">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class="form-group">\n\t\t<label class="form-label" for="formBasicPassword">Password</label>\n\t\t<input placeholder="Password" type="password" id="formBasicPassword" class="form-control">\n\t</div>\n\t<div class="form-group">\n\t\t<div class="form-check">\n\t\t\t<input type="checkbox" id="formBasicCheckbox" class="form-check-input">\n\t\t\t<label title="" for="formBasicCheckbox" class="form-check-label">Check me out</label>\n\t\t</div>\n\t</div>\n\t<button type="submit" class="btn btn-primary">Submit</button>\n</form>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

      <LinkedHeading h="2" id="form-bg">Form With Background</LinkedHeading>
      <p>Append background class <code>.bg-gray-200</code> to <code>form</code> element. More colors can be found in <a href="../../colors/">Colors section</a>. Also keep <code>p-3</code> class so the container has proper padding.</p>
         
      <Form className="bg-gray-200 p-3 border-ra mb-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="fc-alt" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="fc-alt" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox1">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="mb-4 copyblock-container">
            <div>
                <h3>Code example</h3>               
            </div>
        
            <CopyBlock
            theme={atomOneLight}
            text={`<form class="bg-gray-200 p-3">\n\t<div class="form-group">\n\t\t<label class="form-label" for="formBasicEmail">Email address</label>\n\t\t<input placeholder="Enter email" type="email" id="formBasicEmail" class="form-control">\n\t\t<small class="text-muted form-text">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class="form-group">\n\t\t<label class="form-label" for="formBasicPassword">Password</label>\n\t\t<input placeholder="Password" type="password" id="formBasicPassword" class="form-control">\n\t</div>\n\t<div class="form-group">\n\t\t<div class="form-check">\n\t\t\t<input type="checkbox" id="formBasicCheckbox" class="form-check-input">\n\t\t\t<label title="" for="formBasicCheckbox" class="form-check-label">Check me out</label>\n\t\t</div>\n\t</div>\n\t<button type="submit" class="btn btn-primary">Submit</button>\n</form>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>


      <LinkedHeading h="2" id="form-sizes">Input Fields</LinkedHeading>
      
      <Form.Group>
        <Form.Label>Large input field</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        <br /> 
        <Form.Label>Normal input field</Form.Label>
        <Form.Control type="text" placeholder="Normal text" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <Form.Label>Small input field</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Small text"  />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>      

      <div className="mb-4 copyblock-container">
          <div className="shadow-none mt-4">
              <h3>Code example</h3>               
          </div>

          <Form className="mb-4 mt-2">
            <Form.Label>Large input field</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form>         
      
          <CopyBlock
          theme={atomOneLight}
          text={`<form>\n\t<label class="form-label">Large input field</label>\n\t<input placeholder="Large text" type="text" class="form-control form-control-lg">\n\t<small class="text-muted form-text">We'll never share your email with anyone else.</small>\n</form>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
          />

          <div className="shadow-none mt-4">
              <h3>Code example</h3>               
          </div>

          <Form className="mb-4 mt-2">
            <Form.Label>Normal input field</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text> 
          </Form>        
      
          <CopyBlock
          theme={atomOneLight}
          text={`<form>\n\t<label class="form-label">Normal input field</label>\n\t<input placeholder="Normal text" type="text" class="form-control form-control">\n\t<small class="text-muted form-text">We'll never share your email with anyone else.</small>\n</form>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
          />

          <div className="shadow-none mt-4"> 
              <h3>Code example</h3>               
          </div>

          <Form className="mb-4 mt-2">
            <Form.Label>Small input field</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Small text"  />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text> 
          </Form>        
      
          <CopyBlock
          theme={atomOneLight}
          text={`<form>\n\t<label class="form-label">Small input field</label>\n\t<input placeholder="Small text" type="text" class="form-control form-control-sm">\n\t<small class="text-muted form-text">We'll never share your email with anyone else.</small>\n</form>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
          />
      </div>

      

      
      <LinkedHeading h="2" id="form-sizes">Select Field</LinkedHeading>

      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Large custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" size="lg" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <br />
          <Form.Label>Normal custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <br />
          <Form.Label>Small custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" size="sm" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>     
        </Form.Group>
      </Form>

      <div className="mb-4 copyblock-container">
        <div className="shadow-none mt-4">
            <h3>Code example</h3>               
        </div>

        <Form className="mb-4 mt-2">            
          <Form.Label>Large custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" size="lg" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form>         
      
        <CopyBlock
        theme={atomOneLight}
        text={`<form>\n\t<label class="form-label">Large custom select</label>\n\t<select class="ebf-select form-control form-control-lg">\n\t\t<option>1</option>\n\t\t<option>2</option>\n\t\t<option>3</option>\n\t</select>\n</form>`}
        language="jsx"
        showLineNumbers
        wrapLines
        codeBlock
        />

        <div className="shadow-none mt-4">
            <h3>Code example</h3>               
        </div>

        <Form className="mb-4 mt-2">            
          <Form.Label>Normal custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form>         
      
        <CopyBlock
        theme={atomOneLight}
        text={`<form>\n\t<label class="form-label">Large custom select</label>\n\t<select class="ebf-select form-control">\n\t\t<option>1</option>\n\t\t<option>2</option>\n\t\t<option>3</option>\n\t</select>\n</form>`}
        language="jsx"
        showLineNumbers
        wrapLines
        codeBlock
        />

        <div className="shadow-none mt-4">
            <h3>Code example</h3>               
        </div>

        <Form className="mb-4 mt-2">            
          <Form.Label>Normal custom select</Form.Label>
          <Form.Control className="ebf-select" as="select" size="sm" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form>         
      
        <CopyBlock
        theme={atomOneLight}
        text={`<form>\n\t<label class="form-label">Large custom select</label>\n\t<select class="ebf-select form-control form-control-sm">\n\t\t<option>1</option>\n\t\t<option>2</option>\n\t\t<option>3</option>\n\t</select>\n</form>`}
        language="jsx"
        showLineNumbers
        wrapLines
        codeBlock
        />
      </div>

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

        <Form.Group>        
          <Checkbox checked readOnly label="Checkbox" />
          <Radio checked readOnly label="Radio" />
        </Form.Group> 

      </Form>   
         
      
      <div className="mb-4 copyblock-container">
        <div className="shadow-none mt-4">
            <h3>Code example</h3>               
        </div>             
      
        <CopyBlock
        theme={atomOneLight}
        text={`<form>\n\t<div class="form-group">\n\t\t<label class="form-label" for="Form.ControlsText">Text</label>\n\t\t<input placeholder="Enter text" type="text" id="Form.ControlsText" class="form-control">\n\t</div>\n\t<div class="form-group">\n\t\t<label class="form-label" for="Form.ControlsEmail">Email address</label>\n\t\t<input placeholder="Enter email" type="email" id="Form.ControlsEmail" class="form-control">\n\t</div>\n\t<div class="form-group">\n\t\t<label class="form-label" for="Form.ControlsPassword">Password</label>\n\t\t<input type="password" id="Form.ControlsPassword" class="form-control">\n\t</div>\n\t<div class="form-group">\n\t\t<label class="form-label" for="Form.ControlsFile">File</label>\n\t\t<input type="file" id="Form.ControlsFile" class="form-control-file">\n\t\t<small class="form-text text-muted">Example block-level help text here.</small>\n\t</div>\n\t<div class="form-group">\n\t\t<div class="form-check">\n\t\t\t<input readonly="" type="checkbox" class="form-check-input" checked="">\n\t\t\t<label title="" class="form-check-label">Checkbox</label>\n\t\t</div>\n\t\t<div class="form-check">\n\t\t\t<input readonly="" type="radio" class="form-check-input" checked="">\n\t\t\t<label title="" class="form-check-label">Radio</label>\n\t\t</div>\n\t</div>\n</form>`}
        language="jsx"
        showLineNumbers
        wrapLines
        codeBlock
        />
      </div>

      <br/>    

      <LinkedHeading h="2" id="form-controls">Checkboxes form controls</LinkedHeading>
      
        
      <Form>
        <Form.Group>         
            <Checkbox id="formBasicCheckbox4" inline label="1" />
            <Checkbox id="formBasicCheckbox5" inline label="2" />
            <Checkbox id="formBasicCheckbox6" inline label="3" />
          </Form.Group>

          <Form.Group>
            <Radio id="radio5" name="radioGroup" inline label="5" />
            <Radio id="radio6" name="radioGroup" inline label="6" />
            <Radio id="radio7" name="radioGroup" inline label="7" />          
        </Form.Group>
      </Form>
        <br/>
        <Form>
        <Form.Group>
          
          <Form.Check 
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            <Form.Check 
              checked
              type="switch"
              id="custom-switch-checked"
              label="Checked switch"
            />
            <Form.Check 
              disabled
              type="switch"
              label="Disabled switch"
              id="disabled-custom-switch"
            />
        </Form.Group>
          </Form>

        <Form>
        <Form.Group controlId="Form.ControlsSelect">
          <Form.Label>Select</Form.Label>
          <Form.Control className="ebf-select" as="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Form.ControlsSelectMultiple">
          <Form.Label>Multiple select</Form.Label>
          <Form.Control as="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
            <option value="other">Holding Ctrl/Cmd Selects</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Form.ControlsTextarea">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" placeholder="Textarea" />
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
          <Checkbox id="checkOut" label="Check me out" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
});