/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Dropdown,
	ProgressBar,
	Badge,
	Row,
	Col,
} from 'react-bootstrap';
import { CopyBlock, github } from 'react-code-blocks';
import {FormControl, InputGroup, Button} from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"
import logo from '../../images/logo.svg'


export default withLayout(function NavbarBrand() {
  return (
    <>
    <LinkedHeading h="1" id="navbar">Navbar</LinkedHeading> 

	<Navbar collapseOnSelect expand="lg" bg="white" variant="light"  className="border-bottom justify-content-between">
		<Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>

				<Nav.Item>					
						
						<Dropdown role="menuitem" className="ebf-notif-dropdown" >
							<Dropdown.Toggle 
							variant="link" id="dropdown-basic" className="nav-link">
							
								<i className="ebf ebf-bell font-size-lg">
									<Badge className="ebf-badge-notification" variant="danger"></Badge>
									
								</i>	
								Benachrichtigungen	
							</Dropdown.Toggle>

							<Dropdown.Menu>								
								<Dropdown.Item eventKey="2">									
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-device-smartphone d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New phone order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>									
								</Dropdown.Item>

								<Dropdown.Divider />

								<Dropdown.Item eventKey="3">
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-apple d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New world order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>
								</Dropdown.Item>

								<Dropdown.Divider />

								<Dropdown.Item eventKey="4">
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-grid-gap d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New world order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>		
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="clear-all-notif small font-weight-bold text-uppercase text-center">
									Mark all as read
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Item>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

  <br />

	<div className="mb-3 copyblock-container">
		<div>
			<h3>Code example</h3>
		</div>
	
		<CopyBlock
		theme={github}
		text={`<nav class="border-bottom justify-content-between navbar navbar-expand-lg navbar-light bg-white">
  <a href="#" class="navbar-brand">EBF GmbH</a>
  <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="justify-content-end navbar-collapse collapse" id="responsive-navbar-nav">
      <div class="navbar-nav">
        <a href="#" data-rb-event-key="#" class="nav-link" role="button">Home</a>
        <a href="#link" data-rb-event-key="#link" class="nav-link">Link</a>
        <div class="nav-item">
            <div role="menuitem" class="ebf-notif-dropdown dropdown">
              <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="nav-link dropdown-toggle btn btn-link">
                  <i class="ebf ebf-bell font-size-lg">
                    <span class="ebf-badge-notification badge badge-danger"></span>
                  </i>Benachrichtigungen
              </button>
              <div aria-labelledby="dropdown-basic" class="dropdown-menu">
                  <a href="#" class="dropdown-item" role="button">
                    <div class="row">
                        <div class="d-flex justify-content-start align-items-center icon-notif col-2">
                          <i class="ebf ebf-device-smartphone d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div class="content-notif col">
                          <span class="dropdown-title font-weight-bold">New phone order</span>
                          <p class="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
                          <span class="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
                        </div>
                        <div class="dismiss-notif col-1"><i class="ebf ebf-plus"></i></div>
                    </div>
                  </a>
                  <div class="dropdown-divider" role="separator"></div>
                  <a href="#" class="dropdown-item" role="button">
                    <div class="row">
                        <div class="d-flex justify-content-start align-items-center icon-notif col-2">
                          <i class="ebf ebf-apple d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div class="content-notif col">
                          <span class="dropdown-title font-weight-bold">New world order</span>
                          <p class="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
                          <span class="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
                        </div>
                        <div class="dismiss-notif col-1"><i class="ebf ebf-plus"></i></div>
                    </div>
                  </a>
                  <div class="dropdown-divider" role="separator"></div>
                  <a href="#" class="dropdown-item" role="button">
                    <div class="row">
                        <div class="d-flex justify-content-start align-items-center icon-notif col-2">
                          <i class="ebf ebf-grid-gap d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div class="content-notif col">
                          <span class="dropdown-title font-weight-bold">New world order</span>
                          <p class="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
                          <span class="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
                        </div>
                        <div class="dismiss-notif col-1"><i class="ebf ebf-plus"></i></div>
                    </div>
                  </a>
                  <div class="dropdown-divider" role="separator"></div>
                  <a href="#" class="clear-all-notif small font-weight-bold text-uppercase text-center dropdown-item" role="button">Mark all as read</a>
              </div>
            </div>
        </div>
        <div class="dropdown nav-item">
            <a aria-haspopup="true" aria-expanded="false" href="#" class="dropdown-toggle nav-link" role="button">Dropdown</a>
            <div aria-labelledby="" class="dropdown-menu">
              <a href="#action/3.1" class="dropdown-item active">Action</a>
              <a href="#action/3.2" class="dropdown-item">Another action</a>
              <a href="#action/3.3" class="dropdown-item">Something</a>
              <div class="dropdown-divider" role="separator"></div>
              <a href="#action/3.4" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <a href="#disabled" data-rb-event-key="#disabled" class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
  </div>
</nav>`}
		language="jsx"
		showLineNumbers
		wrapLines
		codeBlock
		/>
	</div>

	<br />

	<Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="border-bottom">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">	
			<InputGroup id="search" className="nav-search grid-6">          
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon"
					type="text"
				/>
				<InputGroup.Append>
					<Button type="submit" id="basic-addon"><i className="ebf ebf-search-l"></i></Button>
				</InputGroup.Append>
			</InputGroup>		
			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>   
			
		</Navbar.Collapse>
	</Navbar>

	<br />

	<Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>				
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />				
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

		<InputGroup id="search" className="mr-auto nav-search gray-search">          
			<FormControl
				placeholder="Search"
				aria-label="Search"
				aria-describedby="basic-addon"
				type="text"
			/>
			<InputGroup.Append>
				<Button type="submit" id="basic-addon"><i className="ebf ebf-search-l"></i></Button>
			</InputGroup.Append>
		</InputGroup>

			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>   

			
		</Navbar.Collapse>
	</Navbar>

	<br/>

	<div className="ebf-double-navbar shadow">
		<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
			<Navbar.Brand href="#">EBF GmbH</Navbar.Brand>				
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav>
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
				</Nav>        
			</Navbar.Collapse>  		
		</Navbar>
		<Navbar bg="white" id="basic-navbar-nav" className="border-top justify-content-between secondary-nav">
			<div className="centering-div">
				<span className="navbar-subtitle">Span Title Example</span>  
			</div>
			<div className="centering-div">
				<Button className="mb-0" size="sm" variant="primary"><i className="ebf ebf-apps-fill"></i> Button Example</Button> 
			</div>
			<div className="centering-div">					
				<Nav>
					<Nav.Link href="#">Link</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</div>
		</Navbar>		
	</div>

	<br/>

	<div className="ebf-double-navbar shadow">
		<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
			<Navbar.Brand href="#">EBF GmbH</Navbar.Brand>				
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav>
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
				</Nav>        
			</Navbar.Collapse>  		
		</Navbar>
		<Navbar bg="white" id="basic-navbar-nav" className="border-top justify-content-between secondary-nav">
			<div className="centering-div">
				<span className="navbar-subtitle">Span Title Example</span>  
			</div>
			<div className="centering-div">
				<Button className="mb-0" size="sm" variant="primary"><i className="ebf ebf-apps-fill"></i> Button Example</Button> 
			</div>
			<div className="centering-div">					
				<Nav>
					<Nav.Item>					
						
						<Dropdown role="menuitem" className="ebf-notif-dropdown" >
							<Dropdown.Toggle variant="link" id="dropdown-basic" className="nav-link">
							
								<i className="ebf ebf-bell font-size-lg">
									<Badge className="ebf-badge-notification" variant="danger"></Badge>
									
								</i>	
								Benachrichtigungen	
							</Dropdown.Toggle>

							<Dropdown.Menu>								
								<Dropdown.Item eventKey="2">									
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-device-smartphone d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New phone order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>									
								</Dropdown.Item>

								<Dropdown.Divider />

								<Dropdown.Item eventKey="3">
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-apple d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New world order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>									

								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item eventKey="4">
									<Row>
										<Col xs={2} className="d-flex justify-content-start align-items-center icon-notif">
											<i className="ebf ebf-grid-gap d-flex justify-content-center align-items-center"></i>
										</Col>
										<Col className="content-notif">
											<span className="dropdown-title font-weight-bold">New world order</span>
											<p className="dropdown-content font-size-xsm mt-1 mb-1">Curabitur ipsum est, porttitor vel turpis in, suscipit finibus urna. In laoreet eget nulla et viverra.</p>
											<span className="dropdown-timestamp font-size-xsm">Monday, April 10.2020.</span>
										</Col>
										<Col xs={1} className="dismiss-notif">
											<i className="ebf ebf-plus"></i>
										</Col>
									</Row>		
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="small font-weight-bold text-uppercase text-center">
									Mark all as read
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

							
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</Navbar>		
		<Navbar className="nav-ebf-progress-bar border-top">
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
		</Navbar>
	</div>

	<br/>

	<div className="ebf-double-navbar shadow">
		<Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
			<Navbar.Brand href="#">EBF GmbH</Navbar.Brand>				
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav>
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
				</Nav>        
			</Navbar.Collapse>  		
		</Navbar>
		<Navbar bg="black" variant="dark" id="basic-navbar-nav" className="border-top justify-content-between secondary-nav">
			<div className="centering-div">
				<span className="navbar-subtitle">Span Title Example</span>  
			</div>
			<div className="centering-div">
				<Button className="mb-0" size="sm" variant="primary"><i className="ebf ebf-apps-fill"></i> Button Example</Button> 
			</div>
			<div className="centering-div">					
				<Nav>
					<Nav.Link href="#">Link</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</div>
		</Navbar>		
		<Navbar bg="black" variant="dark" className="nav-ebf-progress-bar border-top">
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
		</Navbar>
	</div>

	<br/>

	<LinkedHeading h="2" id="brand">Brand</LinkedHeading>

	<Navbar collapseOnSelect expand="lg" bg="gray-100">
        <Navbar.Brand href="#" >
        	Brand
        </Navbar.Brand>
	</Navbar>

	<br />

	<Navbar collapseOnSelect expand="lg" bg="gray-100">
        <Navbar.Brand href="#" className="font-weight-bold">
         Brand
        </Navbar.Brand>
	</Navbar>

	<br />

	<Navbar collapseOnSelect expand="lg" bg="gray-100">
        <Navbar.Brand href="#">
			<img
				src={logo}
				width="auto"
				height="25"
				className="d-inline-block align-middle mr-3"
				alt="Logo"
			/>
        </Navbar.Brand>
	</Navbar>

	<br />

	<Navbar collapseOnSelect expand="lg" bg="gray-100">
        <Navbar.Brand href="#" className="align-middle">
			<img
				src={logo}
				width="auto"
				height="25"
				className="d-inline-block align-middle mr-3"
				alt="Logo"
			/>{' '}
          	EBF
        </Navbar.Brand>
	</Navbar>

	<LinkedHeading h="2" id="text">Text</LinkedHeading>

	<Navbar collapseOnSelect expand="lg" bg="gray-100">
        <p className="card-text gray-300">Navbar with text</p>
	</Navbar>

	<br/>

	<LinkedHeading h="2" id="variant">Variant</LinkedHeading>

	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>   
			<InputGroup id="search" className="nav-search gray-search">          
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon"
					type="text"
				/>
				<InputGroup.Append>
					<Button type="submit" id="basic-addon"><i className="ebf ebf-search-l"></i></Button>
				</InputGroup.Append>
			</InputGroup>
		</Navbar.Collapse>
	</Navbar>

	<br/>

	<Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />			
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>   
			<InputGroup id="search" className="nav-search gray-search">          
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon"
					type="text"
				/>
				<InputGroup.Append>
				<Button type="submit" id="basic-addon"><i className="ebf ebf-search-l"></i></Button>
				</InputGroup.Append>
			</InputGroup>
		</Navbar.Collapse>
	</Navbar>

	<br/>

	<Navbar collapseOnSelect expand="lg" bg="blue-100" variant="light" >
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
			</Nav>   
			<InputGroup id="search" className="nav-search gray-search">          
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon"
					type="text"
				/>
				<InputGroup.Append>
					<Button type="submit" id="basic-addon"><i className="ebf ebf-search-l"></i></Button>
				</InputGroup.Append>
			</InputGroup>
		</Navbar.Collapse>
	</Navbar>
	
    </>
  )
});