import React from 'react';
import { Navbar, Nav, NavDropdown, ProgressBar, Badge} from 'react-bootstrap';
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
						<Nav.Link href="#">Link</Nav.Link>
						<Badge className="ebf-badge-notification" variant="danger"></Badge>
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