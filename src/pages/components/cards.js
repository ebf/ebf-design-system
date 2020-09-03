import React from 'react';
import {Row, Col, ListGroup, Card, CardDeck} from 'react-bootstrap';
import { CopyBlock, github } from 'react-code-blocks';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="cards">Cards</LinkedHeading>
      
        <CardDeck>
            <Card className="ebf-card-select card-hover text-center">
                <Card.Body>
                    <i className="ebf ebf-esim ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title Example</Card.Title></Card.Link>                
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Just adding up some text to fill in the third row.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select card-hover text-center">
                <Card.Body>
                    <i className="ebf ebf-device-smartphone ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Long Card Title Example</Card.Title></Card.Link>               
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select card-hover text-center">
                <Card.Body>
                    <i className="ebf ebf-apps ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title</Card.Title></Card.Link>             
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
        </CardDeck>
        <CardDeck>            
            <Card className="ebf-card-select card-hover text-center">
                <Card.Body>
                    <i className="ebf ebf-apps ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title</Card.Title></Card.Link>             
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
        </CardDeck>

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div class="card-deck">\n\t<div class="ebf-card-select card-hover text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n\t<div class="ebf-card-select card-hover text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n\t<div class="ebf-card-select card-hover text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

        <LinkedHeading h="2" id="alternative-cards">Color Hover Cards</LinkedHeading>

        <p>Just append class <code>.card-hover-effect</code> to the <code>div.card</code> element </p>
        
        <CardDeck>
            <Card className="ebf-card-select card-hover card-hover-effect text-center">
                <Card.Body>
                    <i className="ebf ebf-esim ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title Example</Card.Title></Card.Link>                
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Just adding up some text to fill in the third row.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select card-hover card-hover-effect text-center">
                <Card.Body>
                    <i className="ebf ebf-device-smartphone ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Long Card Title Example</Card.Title></Card.Link>               
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select card-hover card-hover-effect text-center">
                <Card.Body>
                    <i className="ebf ebf-apps ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title</Card.Title></Card.Link>             
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
        </CardDeck>

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div class="card-deck">\n\t<div class="ebf-card-select card-hover card-hover-effect text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n\t<div class="ebf-card-select card-hover card-hover-effect text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n\t<div class="ebf-card-select card-hover card-hover-effect text-center card">\n\t\t<div class="card-body">\n\t\t\t<i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n\t\t\t<a class="card-link" href="#">\n\t\t\t\t<div class="mb-1 card-title h5">Card Title Example</div>\n\t\t\t</a>\n\t\t\t<p class="card-text">Some quick example text...</p>\n\t\t</div>\n\t</div>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>
        

        <LinkedHeading h="2" id="summary-cards">Summary Cards</LinkedHeading>
        
   
        <Row className="ebf-card-container">
            <Col className="col-lg-4 col-md-6 col-sm-12">
                <Card className="ebf-card-summary">
                    <Card.Body>                            
                        <ListGroup variant="flush">
                            <ListGroup.Item><span>Besitzer:</span> Carole Rosario</ListGroup.Item>
                            <ListGroup.Item><span>eMail:</span> carolerosario@ebf.com</ListGroup.Item>
                            <ListGroup.Item><span>Kartenprofil:</span> 000001-3972834-2</ListGroup.Item>
                            <ListGroup.Item><span>Telefonnummer:</span> +49-175-5558-994</ListGroup.Item>
                            <ListGroup.Item className="eid-color"><span>EID:</span> 984654</ListGroup.Item>
                        </ListGroup>                   
                    </Card.Body>
                </Card>
            </Col>            
        </Row>   

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div class="ebf-card-container row">\n\t<div class="col-lg-4 col-md-6 col-sm-12 col">\n\t\t<div class="ebf-card-summary card">\n\t\t\t<div class="card-body">\n\t\t\t\t<div class="list-group list-group-flush">\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Besitzer:</span> Carole Rosario\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>eMail:</span> carolerosario@ebf.com\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Kartenprofil:</span> 000001-3972834-2\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Telefonnummer:</span> +49-175-5558-994\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="eid-color list-group-item">\n\t\t\t\t\t\t<span>EID:</span> 984654\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

        <LinkedHeading h="2" id="summary-cards-variation">Summary Cards Variation</LinkedHeading>

         <Row className="ebf-card-container">
            <Col className="col-12">
                <Card className="ebf-card-summary ebf-card-summary-horizontal mt-3">
                    <Card.Body>                            
                        <ListGroup variant="flush">
                            <ListGroup variant="flush" className="summary-horizontal-container name-mail-container">                           
                                <ListGroup.Item><span>Besitzer:</span> Carole Rosario</ListGroup.Item>
                                <ListGroup.Item><span>eMail:</span> carolerosario@ebf.com</ListGroup.Item>   
                            </ListGroup>
                                                  
                            <ListGroup variant="flush" className="summary-horizontal-container">
                                <ListGroup.Item><span>Kartenprofil:</span> 000001-3972834-2</ListGroup.Item>
                                <ListGroup.Item><span>Telefonnummer:</span> +49-175-5558-994</ListGroup.Item>
                                <ListGroup.Item className="eid-color"><span>EID:</span> 984654</ListGroup.Item>
                            </ListGroup>
                        </ListGroup>                   
                    </Card.Body>
                </Card>
            </Col>            
        </Row>    

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div class="ebf-card-container row">\n\t<div class="col-12 col">\n\t\t<div class="ebf-card-summary ebf-card-summary-horizontal mt-3 card">\n\t\t\t<div class="card-body">\n\t\t\t\t<div class="list-group list-group-flush">\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Besitzer:</span> Carole Rosario\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>eMail:</span> carolerosario@ebf.com\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Kartenprofil:</span> 000001-3972834-2\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="list-group-item">\n\t\t\t\t\t\t<span>Telefonnummer:</span> +49-175-5558-994\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="eid-color list-group-item">\n\t\t\t\t\t\t<span>EID:</span> 984654\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

        <LinkedHeading h="2" id="cards-option">Cards Option</LinkedHeading>

        <CardDeck>
          <Card className="ebf-card-select ebf-card-option mt-3">
              <Card.Body>                            
                <Card.Title className="mb-1 font-weight-bold">Card Title Example</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>                                          
              </Card.Body>
          </Card>
          <Card className="ebf-card-select ebf-card-option mt-3">
              <Card.Body>                            
                <Card.Title className="mb-1 font-weight-bold">Card Title Example</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>                                          
              </Card.Body>
          </Card>
        </CardDeck> 

        <div className="mb-3 copyblock-container">
            <div>
                <h3>Code example</h3>
            </div>
        
            <CopyBlock
            theme={github}
            text={`<div class="card-deck">
  <div class="ebf-card-select ebf-card-option mt-3 card">
      <div class="card-body">
        <div class="mb-1 font-weight-bold card-title h5">Card Title Example</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
  <div class="ebf-card-select ebf-card-option mt-3 card">
      <div class="card-body">
        <div class="mb-1 font-weight-bold card-title h5">Card Title Example</div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
</div>`}
            language="jsx"
            showLineNumbers
            wrapLines
            codeBlock
            />
        </div>

      </>
    )
  });