import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <header className="header">
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="/">
        {siteTitle}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
