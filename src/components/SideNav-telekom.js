import _ from 'lodash';
import React from 'react';
import { Link, withPrefix, useState, Nav } from "gatsby";
import Switch from 'react-switch';
import { ProSidebar,  Menu,  MenuItem,  SubMenu,  SidebarHeader, SidebarFooter,  SidebarContent, } from 'react-pro-sidebar';

const SideNav = ({ collapsed, toggled, handleToggleSidebar }) => {
  
  return (
    <div className="side-nav">
    <ProSidebar  
      collapsed={false}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <Menu>
          <MenuItem
            icon={<i className="ebf ebf-dashboard-fill font-size-lg"></i>}   
            path="/"         
          >
            Getting started
            <Link to="/" />
          </MenuItem>
        </Menu>
      </SidebarHeader>

      <SidebarContent>

        <Menu>          

          <MenuItem 
            icon={<i className="ebf ebf-art font-size-lg"></i>}
          >
            Colors
            <Link to="/colors" />          
          </MenuItem>

          <MenuItem 
            icon={<i className="ebf ebf-font-fill font-size-lg"></i>}
          >
            Typography
            <Link to="/typography" />          
          </MenuItem>

          <MenuItem 
            icon={<i className="ebf ebf-heart font-size-lg"></i>}
          >
            Iconset
            <Link to="/iconset" />          
          </MenuItem>
        
        
          <SubMenu     
            suffix={<span className="badge badge-dark badge-pill">2</span>}       
            title={"Layout"}
            icon={<i className="ebf ebf-grid font-size-lg"></i>}          
          >
            <MenuItem>Grid <Link to="/layout/grid"/></MenuItem>
            <MenuItem>Media <Link to="/layout/media"/></MenuItem>            
          </SubMenu>

          <SubMenu
            suffix={<span className="badge badge-dark badge-pill">13</span>}
            title={"Components"}
            icon={<i className="ebf ebf-apps-fill font-size-lg"></i>}
          >
            <MenuItem>Alerts <Link to="/components/alerts"/></MenuItem>
            <MenuItem>Badges <Link to="/components/badges"/></MenuItem> 
            <MenuItem>Breadcrumbs <Link to="/components/breadcrumbs"/></MenuItem> 
            <MenuItem>Buttons <Link to="/components/buttons"/></MenuItem> 
            <MenuItem>Cards <Link to="/components/cards"/></MenuItem> 
            <MenuItem>Footer <Link to="/components/footer"/></MenuItem> 
            <MenuItem>Forms <Link to="/components/forms"/></MenuItem> 
            <MenuItem>Modals <Link to="/components/modals"/></MenuItem> 
            <MenuItem>Navbar <Link to="/components/navbar"/></MenuItem> 
            <MenuItem>Navs <Link to="/components/navs"/></MenuItem> 
            <MenuItem>Progress <Link to="/components/progress"/></MenuItem> 
            <MenuItem>Spinners <Link to="/components/spinners"/></MenuItem> 
            <MenuItem>Tables <Link to="/components/tables"/></MenuItem> 
          </SubMenu>
          
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <Menu>
        <MenuItem 
          icon={<i className="ebf ebf-arr-left font-size-lg"></i>}
        >
          
               
        </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
    </div>
    
  );
};

export default  SideNav;