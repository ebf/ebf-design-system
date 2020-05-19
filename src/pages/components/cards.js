import React from 'react';
import {Row, Col, Container, Card, CardDeck} from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function Tables() {
    return (
      <>
        
        <LinkedHeading h="1" id="cards">Cards</LinkedHeading>
      
        <CardDeck>
            <Card className="ebf-card-select">
                <Card.Body>
                    <i className="ebf ebf-esim ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Card Title Example</Card.Title></Card.Link>                
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Just adding up some text to fill in the third row.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select">
                <Card.Body>
                    <i className="ebf ebf-device-smartphone ebf-card-icon mb-2"></i>
                    <Card.Link href="#"><Card.Title className="mb-1">Long Card Title Example</Card.Title></Card.Link>               
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                </Card.Body>
            </Card>
            <Card className="ebf-card-select">
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

      </>
    )
  });