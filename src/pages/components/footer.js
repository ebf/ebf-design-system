import React from 'react';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout";
import logo from '../../images/logo.svg'

export default withLayout(function Footer() {
    return (
      <>
        
        <LinkedHeading h="1" id="footer">Footer</LinkedHeading>
      
        <footer className="footer shadow">
            <div className="container footer-container">
                <div className="centering-div">
                    <span>© {new Date().getFullYear()} <a href="https://www.ebf.com">EBF</a></span>
                </div>
                <div className="centering-div">
                    <img
                        src={logo}
                        width="auto"
                        height="24"
                        className="d-inline-block align-middle"
                        alt="Logo"
                    />
                </div>
                <div className="centering-div">
                   <span>v1.0.8</span>
                </div>                
            </div>
        </footer>

      </>
    )
  });