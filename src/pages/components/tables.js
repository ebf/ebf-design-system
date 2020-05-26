import React from 'react';
import { Table , Form, Badge, Button} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="tables">Tables</LinkedHeading>   
        <p className="lead">Use the striped, bordered and hover props to customise the table.</p>
        
        <LinkedHeading h="2" id="simple-table">Simple table</LinkedHeading>   
        

        <div className="ebf-table">
            <header className="ebf-table-header">
                <h6 className="ebf-table-headline">Table Header</h6>
                
            </header>
            <div className="ebf-table-contents">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>
                                <Form.Group controlId="formBasicCheckbox" className="mb-0">
                                    <Form.Check type="checkbox"/>
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