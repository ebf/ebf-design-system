import React from 'react';
import {Row, Col, ListGroup, Card, CardDeck} from 'react-bootstrap';

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

      </>
    )
  });