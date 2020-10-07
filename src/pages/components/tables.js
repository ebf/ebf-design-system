import React from 'react';
import { Table , Form, FormControl, InputGroup, Badge, Button} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

function Checkbox({ children, ...props }) {
    return (
      <Form.Check type='checkbox' {...props}>
        {children}
      </Form.Check>
    );
  }



export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="tables">Tables</LinkedHeading>   
        <p className="lead">Use the striped, bordered and hover props to customise the table.</p>
        
        <LinkedHeading h="2" id="simple-table">Simple table</LinkedHeading>   
        
        <div className="ebf-table">
            <header className="ebf-table-header">
                <span className="ebf-table-headline">Table Header</span>
                <div className="table-header-group">
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
                                    
                    <Form.Control className="ebf-select" as="select" custom>
                        <option>First option select </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control> 
                </div>
            </header>
            <div className="ebf-table-content">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>
                                <Form.Group controlId="formBasicCheckbox1" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox1" label="1"/>
                                    </Form>
                                </Form.Group>
                            </th>
                            <th>Besitzer <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>eMail <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>IMEI <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>EID <i className="ebf ebf-arr-up-fill"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox3" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox3" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Jacob</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="primary" className="badge-pill">Unbekannt</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox4" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox4" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Larry the Bird</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td>
                                <Button className="mb-0" variant="primary" size="sm" >Primary button</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

        <LinkedHeading h="2" id="simple-table">Simple striped table</LinkedHeading>   
        <p>Add class <code>table-striped</code> to <code>table</code> element</p>
        <div className="ebf-table">
            <header className="ebf-table-header">
                <span className="ebf-table-headline">Table Header</span>
                <div className="table-header-group">
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
                                    
                    <Form.Control className="ebf-select" as="select" custom>
                        <option>First option select </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control> 
                </div>
            </header>
            <div className="ebf-table-content">
                <Table hover responsive className="table-striped">
                    <thead>
                        <tr>
                            <th>
                                <Form.Group controlId="formBasicCheckbox1" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox1" label="1"/>
                                    </Form>
                                </Form.Group>
                            </th>
                            <th>Besitzer <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>eMail <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>IMEI <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>EID <i className="ebf ebf-arr-up-fill"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox3" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox3" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Jacob</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="primary" className="badge-pill">Unbekannt</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr><tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox2" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox2" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox4" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox4" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Larry the Bird</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td>
                                <Button className="mb-0" variant="primary" size="sm" >Primary button</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

        <LinkedHeading h="2" id="large-table">Large Table</LinkedHeading>

        <div className="ebf-table ebf-table-xl" >
            <header className="ebf-table-header">
                <span className="ebf-table-headline">Table Header</span>
            </header>
            <div className="ebf-table-content">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>
                                <Form.Group controlId="formBasicCheckbox5" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox5" label="1"/>
                                    </Form>
                                </Form.Group>
                            </th>
                            <th>Besitzer <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>eMail <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>IMEI <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>EID <i className="ebf ebf-arr-up-fill"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox6" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox6" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Mark</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox7" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox7" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Jacob</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td><Badge variant="primary" className="badge-pill">Unbekannt</Badge></td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Group controlId="formBasicCheckbox8" className="mb-0">
                                    <Form inline>
                                        <Checkbox id="formBasicCheckbox8" label="1"/>
                                    </Form>
                                </Form.Group>
                            </td>
                            <td>Larry the Bird</td>
                            <td>alayaward@ebf.com</td>
                            <td>54321987</td>
                            <td>
                                <Button className="mb-0" variant="primary" size="sm" >Primary button</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        
      </>
    )
  });