import React from 'react';
import { Table , Form, FormControl, InputGroup, Badge, Button} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout";
import { CopyBlock, github } from 'react-code-blocks';

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

        <div className="mb-3 mt-3 copyblock-container">
      <div>
        <h3>Code example</h3>
      </div>
    
      <CopyBlock
      theme={github}
      text={`<div class="ebf-table">
  <header class="ebf-table-header">
      <span class="ebf-table-headline">Table Header</span>
      <div class="table-header-group">
        <div id="search" class="nav-search input-group">
            <input placeholder="Search" aria-label="Search" aria-describedby="basic-addon" type="text" class="form-control">
            <div class="input-group-append"><button id="basic-addon" type="submit" class="btn btn-primary"><i class="ebf ebf-search-l"></i></button></div>
        </div>
        <select class="ebf-select custom-select">
            <option>First option select </option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
      </div>
  </header>
  <div class="ebf-table-content">
      <div class="table-responsive">
        <table class="table table-hover">
            <thead>
              <tr>
                  <th>
                    <div class="mb-0 form-group">
                        <form class="form-inline">
                          <div class="form-check"><input type="checkbox" id="formBasicCheckbox1" class="form-check-input"><label title="" for="formBasicCheckbox1" class="form-check-label">1</label></div>
                        </form>
                    </div>
                  </th>
                  <th>Besitzer <i class="ebf ebf-arr-up-fill"></i></th>
                  <th>eMail <i class="ebf ebf-arr-up-fill"></i></th>
                  <th>IMEI <i class="ebf ebf-arr-up-fill"></i></th>
                  <th>EID <i class="ebf ebf-arr-up-fill"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>
                    <div class="mb-0 form-group">
                        <form class="form-inline">
                          <div class="form-check"><input type="checkbox" id="formBasicCheckbox2" class="form-check-input"><label title="" for="formBasicCheckbox2" class="form-check-label">1</label></div>
                        </form>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>alayaward@ebf.com</td>
                  <td>54321987</td>
                  <td><span class="badge-pill badge badge-info">in Bearbeitung</span></td>
              </tr>
              <tr>
                  <td>
                    <div class="mb-0 form-group">
                        <form class="form-inline">
                          <div class="form-check"><input type="checkbox" id="formBasicCheckbox3" class="form-check-input"><label title="" for="formBasicCheckbox3" class="form-check-label">1</label></div>
                        </form>
                    </div>
                  </td>
                  <td>Jacob</td>
                  <td>alayaward@ebf.com</td>
                  <td>54321987</td>
                  <td><span class="badge-pill badge badge-primary">Unbekannt</span></td>
              </tr>
              <tr>
                  <td>
                    <div class="mb-0 form-group">
                        <form class="form-inline">
                          <div class="form-check"><input type="checkbox" id="formBasicCheckbox4" class="form-check-input"><label title="" for="formBasicCheckbox4" class="form-check-label">1</label></div>
                        </form>
                    </div>
                  </td>
                  <td>Larry the Bird</td>
                  <td>alayaward@ebf.com</td>
                  <td>54321987</td>
                  <td><button type="button" class="mb-0 btn btn-primary btn-sm">Primary button</button></td>
              </tr>
            </tbody>
        </table>
      </div>
  </div>
</div>`}
      language="jsx"
      showLineNumbers
      wrapLines
      codeBlock
      />
    </div>

        <LinkedHeading h="2" id="simple-table">Simple striped table</LinkedHeading>   
        <p>Just simply add class <code>table-striped</code> to <code>table</code> element</p>
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
        <p>Apend class <code>ebf-table-xl</code> to <code>ebf-table</code> element</p>
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
                            <th>Besitzer<i className="ebf ebf-arr-up-fill"></i></th>
                            <th>eMail<i className="ebf ebf-arr-up-fill"></i></th>
                            <th>IMEI<i className="ebf ebf-arr-up-fill"></i></th>                            
                            <th>EID<i className="ebf ebf-arr-up-fill"></i></th>
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


        <LinkedHeading h="2" id="simple-table">Table Example</LinkedHeading>   
        <p>Just Table with random elements</p>
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
                            <th>E-Mail senden<i className="ebf ebf-arr-up-fill"></i></th>
                            <th>EID <i className="ebf ebf-arr-up-fill"></i></th>
                            <th>Telefonnummer<i className="ebf ebf-arr-up-fill"></i></th>
                            <th>Kartennummer <i className="ebf ebf-arr-up-fill"></i></th>
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
<td><Form.Check 
              type="switch"
              id="custom-switch"
              label=""
            /></td>
                            <td><Badge variant="info" className="badge-pill">in Bearbeitung</Badge></td>
<td><Form.Control className="ebf-select" as="select" size="sm" custom>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
          </Form.Control></td>
                            <td>8949020000167585219-1</td>
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
<td><Form.Check 
              type="switch"
              id="custom-switch1"
              label=""
            /></td>
                            <td>55728394</td>
<td><Form.Control className="ebf-select" as="select" size="sm" custom>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
          </Form.Control></td>
                            <td>8949020000167585219-1</td>
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
<td><Form.Check 
              type="switch"
              id="custom-switch2"
              label=""
            /></td>
                            <td>55728394</td>
<td><Form.Control className="ebf-select" as="select" size="sm" custom>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
            <option>8949020000167585219-2</option>
          </Form.Control></td>
                            <td>8949020000167585219-1</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

        
      </>
    )
  });