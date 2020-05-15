import React from 'react';
import { Table , Form, Badge, Dropdown, DropdownButton, InputGroup, Button, FormControl, Col, Row } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="tables">Tables</LinkedHeading>   
        <p className="lead">Use the striped, bordered and hover props to customise the table.</p>
        
        

        <Table hover responsive className="ebf-table">
            <thead>
                <tr>
                    <th colSpan="5">
                        <Row>
                            <Col> 
                                <h5>Table Header</h5>
                                <span>Table Subheader</span>                               
                            </Col>
                            <Col>
                                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>

                            <Col>
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
                            </Col>
                        </Row>
                    </th>
                </tr>
                <tr>
                    <th>
                        <Form.Group controlId="formBasicCheckbox" className="mb-0">
                            <Form.Check type="checkbox"/>
                        </Form.Group>
                    </th>
                    <th>Besitzer</th>
                    <th>eMail</th>
                    <th>IMEI</th>
                    <th>EID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox" className="mb-0">
                            <Form.Check type="checkbox"/>
                        </Form.Group>
                    </td>
                    <td>Mark</td>
                    <td>alayaward@ebf.com</td>
                    <td>54321987</td>
                    <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox" className="mb-0">
                            <Form.Check type="checkbox"/>
                        </Form.Group>
                    </td>
                    <td>Jacob</td>
                    <td>alayaward@ebf.com</td>
                    <td>54321987</td>
                    <td><Badge variant="primary" className="badge-pill">Unbekannt</Badge></td>
                </tr>
                <tr>
                    <td>
                        <Form.Group controlId="formBasicCheckbox" className="mb-0">
                            <Form.Check type="checkbox"/>
                        </Form.Group>
                    </td>
                    <td>Larry the Bird</td>
                    <td>alayaward@ebf.com</td>
                    <td>54321987</td>
                    <td>
                        <Badge variant="success" className="badge-pill">Fertig</Badge>
                    </td>
                </tr>
            </tbody>
        </Table>
      </>
    )
  });