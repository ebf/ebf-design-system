import React from 'react';
import {Row, Col, ProgressBar, ProgressBarProps} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Progress() {
    return (
      <>
        
        <LinkedHeading h="1" id="progress-bar">Progress Bar</LinkedHeading>
      
        <div className="ebf-progress-bar col-9">
            <div className="progress-bar-item-container">
                <a href="" className="progress-bar-item active"> 
                    <span className="progress-label">Name</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active current">
                    <span className="progress-label">Source</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Target</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Devices</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Save</span>
                    <span className="progress-dot"></span>
                </a>    
            </div>      
            
            <ProgressBar  variant="primary" now={25} />
        </div>

        <div className="ebf-progress-bar col-6">
            <div className="progress-bar-item-container">
                <a href="" className="progress-bar-item active"> 
                    <span className="progress-label">Name</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active current">
                    <span className="progress-label">Source</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Target</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Devices</span>
                    <span className="progress-dot"></span>
                </a>
               
            </div>      
            
            <ProgressBar  variant="primary" now={33} />
        </div>

        <div className="ebf-progress-bar col-4">
            <div className="progress-bar-item-container">
               
                <a href="" className="progress-bar-item active">
                    <span className="progress-label">Source</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active current">
                    <span className="progress-label">Target</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item">
                    <span className="progress-label">Devices</span>
                    <span className="progress-dot"></span>
                </a>
               
            </div>      
            
            <ProgressBar  variant="primary" now={50} />
        </div>

      </>
    )
  });