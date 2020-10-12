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

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Layout = ({ children, location }) => (
  
  <main className="d-flex flex-column min-vh-100">
    
      
    
    <Header siteTitle="EBF Design System" />

    

    {/* <ProSidebar>
      <Menu iconShape="circle">
        <MenuItem icon={<i className="ebf ebf-apps-fill" />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<i className="ebf ebf-apps-fill" />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar> */}

    <Container fluid className="flex-grow-1">
    
      <TocProvider>
        <Row>

          <Col as={SideNav} xs={12} md={3} xl={2} location={location} className="sidebar-offcanvas"></Col>

          <Col as={Toc}  xl={2}></Col>   

          <Col xs={12} md={9} xl={8} id="rb-docs-content">
            {children}
          </Col>

        </Row>
      </TocProvider>
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
            <span>v1.0.11</span>
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
