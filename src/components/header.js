import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap";
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header className="header border-bottom">
    <Navbar collapseOnSelect expand="lg" bg="white" expand="lg">
      <Link to="/" className="navbar-brand">
        <img
            src={logo}
            width="auto"
            height="25"
            className="d-inline-block align-middle mr-3"
            alt="Logo"
          />
        {siteTitle}
      </Link>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" activeClassName="active" to="/">Home</Link>  
          <Link className="nav-link" activeClassName="active" to="/components/alerts">Components</Link>
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
