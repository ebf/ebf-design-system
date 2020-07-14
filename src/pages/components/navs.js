import React from 'react';
import { Navbar, Nav, NavDropdown, ProgressBar} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"


export default withLayout(function Navs() {
  return (
    <>
    <LinkedHeading h="1" id="nav">Navs</LinkedHeading> 

    <LinkedHeading h="2" id="horzizontal-nav">Horizontal Navs</LinkedHeading> 

    <Nav defaultActiveKey="#" className="nav-dots">
      <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>


    <Nav className="nav-dots justify-content-center" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>


    <Nav className="nav-dots justify-content-end" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <LinkedHeading h="2" id="vertical-nav">Vertical Nav</LinkedHeading> 

    <Nav defaultActiveKey="#" className="flex-column nav-dots vertical-nav">
      <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    
    <LinkedHeading h="2" id="tabs-nav">Tabs Nav</LinkedHeading> 
    <Nav variant="tabs" defaultActiveKey="#">
      <Nav.Item>
          <Nav.Link href="#">Active Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="link-1">Another Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="link-2">Another Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="disabled" disabled>Disabled Link</Nav.Link>
      </Nav.Item>
    </Nav>

     
    <LinkedHeading h="2" id="tabs-nav-icons">Tabs With Icons</LinkedHeading> 

    <Nav variant="tabs" defaultActiveKey="#">
      <Nav.Item>
          <Nav.Link href="#"><i className="ebf ebf-chart-pie"></i>Active Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="link-1"><i className="ebf ebf-bar-chart-square-left"></i>Another Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="link-2"><i className="ebf ebf-file"></i>Another Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="" eventKey="disabled" disabled><i className="ebf ebf-pending"></i>Disabled Link</Nav.Link>
      </Nav.Item>
    </Nav>

    
    <LinkedHeading h="2" id="pills">Pills</LinkedHeading>

    <Nav variant="pills" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Active Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav> 
    
   
    <LinkedHeading h="2" id="pills-justified">Pills Justified</LinkedHeading>

    <Nav fill variant="pills" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Active Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav> 
    </>
  )
});