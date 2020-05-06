import React from 'react';

import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import withLayout from "../../with-layout"



export default withLayout(function Breadcrumbs() {
  return (
    <>
    <h1>Breadcrumbs</h1>

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


	

    </>
  )
});