/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.svg'

import Header from "./Header"
import SideNav from "./SideNav"
import Toc, { TocProvider } from './Toc';
import "../styles/main.scss";

const Layout = ({ children, location }) => (
  <main className="d-flex flex-column min-vh-100">
    <Header siteTitle="EBF Design System" />

    <Container fluid className="flex-grow-1">
        <Row>
        <TocProvider>
          <Col as={SideNav} xs={12} md={3} xl={2} location={location} />
          <Col as={Toc} className="d-none d-xl-block" xl={2} />
          <Col xs={12} md={9} xl={8} id="rb-docs-content">
            {children}
          </Col>
        </TocProvider>
        </Row>      
    </Container>

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
            <span>v1.0.12</span>
          </Col>
        </Row>
      </div>        
    </footer>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
