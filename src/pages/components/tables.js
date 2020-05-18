import React from 'react';
import { Table , Form, Badge} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="tables">Tables</LinkedHeading>   
        <p className="lead">Use the striped, bordered and hover props to customise the table.</p>
        
        <LinkedHeading h="2" id="simple-table">Simple table</LinkedHeading>   
        

        <Table hover responsive className="ebf-table">
            <thead>
                <tr>
                    <th colSpan="5" className="header-container">
                        <h5 className="mb-0 mt-0">Table Header</h5>
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