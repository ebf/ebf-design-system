import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap";
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header className="header border-bottom">
    <Navbar collapseOnSelect expand="lg" bg="white" expand="lg">
      <Navbar.Brand href="/">
        <img
            src={logo}
            width="auto"
            height="25"
            className="d-inline-block align-middle mr-3"
            alt="Logo"
          />
        {siteTitle}
      </Navbar.Brand>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>  
          <Nav.Link href="/components/alerts">Components</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
