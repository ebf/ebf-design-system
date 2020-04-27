import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {FormControl, InputGroup, Button} from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"
import logo from '../../images/logo.svg'


export default withLayout(function NavbarBrand() {
  return (
    <>
    <h1>Navbar</h1>
      <Navbar collapseOnSelect expand="lg" bg="white" className="border-bottom">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
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
				
				<Navbar.Collapse id="responsive-navbar-nav">
					
					<Nav className="mr-auto">
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

					<InputGroup id="search" className="nav-search">          
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

      <br />

			<Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
				
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				
				<Navbar.Collapse id="responsive-navbar-nav">

					<Nav className="mr-auto">
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

				</Navbar.Collapse>

      </Navbar>

			<br/>

			<Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow">
        <Navbar.Brand href="#">EBF GmbH</Navbar.Brand>
				
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
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

			<Navbar bg="white" id="basic-navbar-nav" className="border-top justify-content-around secondary-nav">
				<span>Span Title Example</span>  
				<Button><i className="ebf ebf-apps-fill"></i> Button Example</Button> 
				<Nav>
        	<Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
				</Nav>

      </Navbar>

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
			
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
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
			
				<Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
			
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
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