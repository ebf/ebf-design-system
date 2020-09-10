/* eslint-disable  jsx-a11y/anchor-is-valid */
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { CopyBlock, github } from 'react-code-blocks';
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

        <br/>

        <div className="ebf-progress-bar col-6">
            <div className="progress-bar-item-container">
                <a href="" className="progress-bar-item active"> 
                    <span className="progress-label">Name</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active">
                    <span className="progress-label">Source</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active">
                    <span className="progress-label">Target</span>
                    <span className="progress-dot"></span>
                </a>

                <a href="" className="progress-bar-item active current">
                    <span className="progress-label">Devices</span>
                    <span className="progress-dot"></span>
                </a>
               
            </div>      
            
            <ProgressBar  variant="primary" now={100} />
        </div>
        <br/>

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

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
                <p>To control the width of <code>div.ebf-progress-bar</code> just append needed <code>.col-*</code> class </p>
                <p><code>div.progress</code> should be controlled so the <code>aria-valuenow="*"</code> and <code>style="width: *%;</code> values are accordingly appended.</p>
            </div>
        
            <CopyBlock
                theme={github}
                text={`<div class="ebf-progress-bar col-9">\n\t<div class="progress-bar-item-container">\n\t\t<a href="" class="progress-bar-item active">\n\t\t\t<span class="progress-label">Name</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item active current">\n\t\t\t<span class="progress-label">Source</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Target</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Devices</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Save</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t<div>\n\t<div class="progress">\n\t\t<div\n\t\t\trole="progressbar"\n\t\t\tclass="progress-bar bg-primary"\n\t\t\taria-valuenow="25"\n\t\t\taria-valuemin="0"\n\t\t\taria-valuemax="100"\n\t\t\tstyle="width: 25%;">\n\t\t<div>\n\t</div>\n</div>`}
                language="jsx"
                showLineNumbers
                wrapLines
                codeBlock
            />
        </div>

      </>
    )
  });