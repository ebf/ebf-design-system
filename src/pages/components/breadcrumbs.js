import React from 'react';

import {Breadcrumb} from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import { CopyBlock, github } from 'react-code-blocks';
import withLayout from "../../with-layout"



export default withLayout(function Breadcrumbs() {
  return (
    <>
    <LinkedHeading h="1" id="breadcrumbs">Breadcrumbs</LinkedHeading>  

	<Breadcrumb>
		<Breadcrumb.Item active>Home</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item active>Library</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
		<Breadcrumb.Item active>Data</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<div className="mb-3 copyblock-container">
        <div>
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<nav aria-label="breadcrumb">\n\t<ol class="breadcrumb">\n\t\t<li class="breadcrumb-item">\n\t\t\t<a href="#" role="button">Home</a>\n\t\t</li>\n\t\t<li class="breadcrumb-item">\n\t\t\t<a href="#" role="button">Library</a>\n\t\t</li>\n\t\t<li class="breadcrumb-item active" aria-current="page">\n\t\t\t<span class="active">Data</span>\n\t\t</li>\n\t</ol>\n</nav>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
	</div>

	<br/>
	<br/>
	<br/>

	<Breadcrumb className="border-bottom">
		<Breadcrumb.Item active>Home</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<Breadcrumb className="border-bottom">
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item active>Library</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<Breadcrumb className="border-bottom">
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
		<Breadcrumb.Item active>Data</Breadcrumb.Item>
	</Breadcrumb>

	<br/>

	<div className="mb-3 copyblock-container">
        <div>
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<nav aria-label="breadcrumb" class="border-bottom">\n\t<ol class="breadcrumb">\n\t\t<li class="breadcrumb-item">\n\t\t\t<a href="#" role="button">Home</a>\n\t\t</li>\n\t\t<li class="breadcrumb-item">\n\t\t\t<a href="#" role="button">Library</a>\n\t\t</li>\n\t\t<li class="breadcrumb-item active" aria-current="page">\n\t\t\t<span class="active">Data</span>\n\t\t</li>\n\t</ol>\n</nav>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
	</div>


	

    </>
  )
});