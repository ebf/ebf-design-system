import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function NavbarBrand() {
  return (
    <>
    <h1>Navbar</h1>
      <Navbar bg="white">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" disabled>Disabled</Nav.Link>
        </Nav>
      </Navbar>
      <br />

      <Navbar bg="white">
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>

      <br />

      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>

      <br />

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>
  )
});