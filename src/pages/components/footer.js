import React from 'react';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout";
import logo from '../../images/logo.svg'
import { CopyBlock, github } from 'react-code-blocks';
import { Col, Container, Row,  } from 'react-bootstrap';

export default withLayout(function Footer() {
  return (
    <>
    <LinkedHeading h="1" id="footer">Footer</LinkedHeading>

    <p>In order to enable sticky footer feature refer to markup below. All classes for parent and sibling elements <strong>must</strong> be used.</p>
    <div className="mb-3 mt-3 copyblock-container">
      <div>
        <h3>Code example</h3>
      </div>
      <CopyBlock
        theme={github}
        text={`<main class="d-flex flex-column min-vh-100">
  <div class="flex-grow-1 container-fluid">Content</div>
  <footer class="footer shadow">
    <div class="container">
        <div class="align-items-center row">
          <div class="text-left col"><span>© 2020 <a href="https://www.ebf.com">EBF</a></span></div>
          <div class="text-center col"><img src="image.svg" width="auto" height="24" alt="Logo"></div>
          <div class="text-right col"><span>v1.0.11</span></div>
        </div>
    </div>
  </footer>
</main>`}
        language="jsx"
        showLineNumbers
        wrapLines
        codeBlock
        />
    </div>
    

    <LinkedHeading h="2" id="footer-container">Footer with container</LinkedHeading>
    <footer className="footer shadow">        
      <Container>
        <Row className="align-items-center">
          <Col className="text-left">
          <span>© {new Date().getFullYear()} <a href="https://www.ebf.com">EBF</a></span>
          </Col>
          <Col className="text-center">
            <img
                src={logo}
                width="auto"
                height="24"
                
                alt="Logo"
            />
          </Col>
          <Col className="text-right">
            <span>v1.0.11</span>
          </Col>
        </Row>
      </Container>        
    </footer>

    <div className="mb-3 mt-3 copyblock-container">
      <div>
        <h3>Code example</h3>
      </div>
    
      <CopyBlock
      theme={github}
      text={`<footer class="footer shadow">
  <div class="container">
      <div class="align-items-center row">
        <div class="text-left col"><span>© 2020 <a href="https://www.ebf.com">EBF</a></span></div>
        <div class="text-center col"><img src="image.svg" width="auto" height="24" alt="Logo"></div>
        <div class="text-right col"><span>v1.0.11</span></div>
      </div>
  </div>
</footer>`}
      language="jsx"
      showLineNumbers
      wrapLines
      codeBlock
      />
    </div>


    <LinkedHeading h="2" id="footer-no-gutters">Fluid Footer</LinkedHeading>

    <footer className="footer shadow">  
      <div className="container-fluid">
        <Row className="align-items-center">
          <Col className="text-left">
          <span>© {new Date().getFullYear()} <a href="https://www.ebf.com">EBF</a></span>
          </Col>
          <Col className="text-center">
            <img
                src={logo}
                width="auto"
                height="24"
                
                alt="Logo"
            />
          </Col>
          <Col className="text-right">
            <span>v1.0.11</span>
          </Col>
        </Row>
      </div>        
    </footer>

    <div className="mb-3 mt-3 copyblock-container">
      <div>
        <h3>Code example</h3>
      </div>
    
      <CopyBlock
      theme={github}
      text={`<footer class="footer shadow">
  <div class="container container-fluid">
      <div class="align-items-center row">
        <div class="text-left col"><span>© 2020 <a href="https://www.ebf.com">EBF</a></span></div>
        <div class="text-center col"><img src="image.svg" width="auto" height="24" alt="Logo"></div>
        <div class="text-right col"><span>v1.0.11</span></div>
      </div>
  </div>
</footer>`}
      language="jsx"
      showLineNumbers
      wrapLines
      codeBlock
      />
    </div>

    </>
  )
});