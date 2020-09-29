import React, { useState } from 'react';
import { Modal, Button, Media, Col, Row, Form, ListGroup, Container, Accordion, Card, FormGroup} from 'react-bootstrap';


import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

import ReactDOM from 'react-dom';
import CounterInput from 'react-bootstrap-personalized-counter';



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch simple modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ExampleFull() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>    
      <Button variant="primary" onClick={handleShow}>
        Launch fullscreen demo modal
      </Button>  
      <Modal className="modal-fullscreen" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a fullscreen modal! </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ShopModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>    
      <Button variant="primary" onClick={handleShow}>
        Launch fullscreen shop modal
      </Button>  
      
      <Modal className="modal-fullscreen modal-shop" show={show} onHide={handleClose}>
        <Modal.Header closeButton closeLabel="Schließen"> 
          {/* <Button size="sm" variant="outline-secondary" closeButton data-dismiss="modal">Schließen</Button> */}
        </Modal.Header>
        
        <Modal.Body>
          <Container className="mb-5">
   
          <Row>
            <Col className="product-image col-12 col-md-6 col-lg-4 align-content-center">
              <img
              width={'66%'}
              height={'auto'}
              className="d-flex align-self-center br-2"
              src="https://via.placeholder.com/256x512/2494c5/fff"
              data-src="holder.js/256x512"
              alt="Placeholder"
            />
            </Col>
            <Col className="col-12 col-md-6 col-lg-8">
              <h2 className="h2">Apple iPhone 11 Pro</h2>

              <Form className="shopping-form">
                <Form.Group className="device-color mb-3">
                  <Form.Label className="mb-2">Farbe: <b>Schwarz</b></Form.Label>
                  <ListGroup className="device-color-selection">
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                    <ListGroup.Item>$color</ListGroup.Item>
                  </ListGroup>        
                </Form.Group>
                
                <Form.Group className="device-capacity mb-4">
                  <Form.Label className="mb-2">Speichergröße: <b>64GB</b></Form.Label>
                  <Button size="sm" variant="outline-secondary ">64GB</Button>
                  <Button size="sm" variant="outline-secondary">128GB</Button>
                  <Button size="sm" variant="outline-secondary">256GB</Button>
                </Form.Group>

                <Form.Group className="device-quantity mb-4">
                  <Form.Label className="mb-2">Anzahl der Geräte:</Form.Label>
                  <CounterInput
                  value={1}
                  min={1}
                  max={9999999} 
                  glyphPlus={{glyph:'ebf ebf-plus', position:'right'}}
                  glyphMinus={{glyph:'ebf ebf-minus', position:'left'}} />
                </Form.Group>

                <FormGroup className="mt-7 mb-4">
                  <h3 className="mb-3 product-price">116,93 €</h3>
                  <Button variant="primary">In den Warenkorb</Button>
                  <Button variant="link"><i className="ebf ebf-shopping-bag"></i>Warenkorb anzeigen</Button>
                </FormGroup>      
              </Form>
            </Col>
          </Row>
          </Container>  
        </Modal.Body>

        <Modal.Footer>
        <Container>
          <h4 className="mt-4">Details</h4>
          <hr></hr>
          <ul>
            <li>6,1” Liquid Retina HD LCD Display (15,5 cm Diagonale)</li>
            <li>Wasser- und Staubschutz (2 Meter bis zu 30 Minuten, IP68)</li>
            <li>12 Megapixel Zwei-Kamera-System mit Ultraweitwinkel- und Weitwinkelobjektiv, Nachtmodus, Porträtmodus und 4K Video bis zu 60 fps</li>
            <li>12 Megapixel TrueDepth Frontkamera mit Porträtmodus, 4K Video und Zeitlupe</li>
            <li>Face ID für sicheres Authentifizieren und Apple Pay</li>
          </ul>
          <h4 className="mt-4">Technische Details</h4>
          <hr></hr>       
          

          <Accordion className="product-details-accordion" defaultActiveKey="0">
            
              <div className="accordion-toggle">
                <Accordion.Toggle as={'div'} eventKey="0">
                  <h5>Lieferumfang</h5>
                  <hr></hr>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <div className="accordion-content">
                  <p>4,7” Retina HD Display (11,94 cm Diagonale)*Wasser- und Staubschutz (1 Meter für bis zu 30 Minuten, IP67)*12 Megapixel Kamera (Weitwinkel), Porträtmodus, Porträtlicht, Tiefen-Kontrolle, Smart HDR der nächsten Generation und 4K Video7 Megapixel Frontkamera mit Porträtmodus, Porträtlicht und Tiefen-KontrolleTouch ID für sicheres Authentifizieren und Apple Pay </p>
                  <hr></hr>
                </div>
                
              </Accordion.Collapse>
            
              <div className="accordion-toggle">
                <Accordion.Toggle as={'div'} eventKey="1">
                  <h5>Technische Informationen</h5>
                  <hr></hr>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="1">
                <div className="accordion-content">
                  <p>4,7” Retina HD Display (11,94 cm Diagonale)*Wasser- und Staubschutz (1 Meter für bis zu 30 Minuten, IP67)*12 Megapixel Kamera (Weitwinkel), Porträtmodus, Porträtlicht, Tiefen-Kontrolle, Smart HDR der nächsten Generation und 4K Video7 Megapixel Frontkamera mit Porträtmodus, Porträtlicht und Tiefen-KontrolleTouch ID für sicheres Authentifizieren und Apple Pay </p>
                  <hr></hr>
                </div>
            
              </Accordion.Collapse>

              <div className="accordion-toggle">
                <Accordion.Toggle as={'div'} eventKey="2">
                  <h5>Konnektivität</h5>
                  <hr></hr>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="2">
                <div className="accordion-content">
                  <p>4,7” Retina HD Display (11,94 cm Diagonale)*Wasser- und Staubschutz (1 Meter für bis zu 30 Minuten, IP67)*12 Megapixel Kamera (Weitwinkel), Porträtmodus, Porträtlicht, Tiefen-Kontrolle, Smart HDR der nächsten Generation und 4K Video7 Megapixel Frontkamera mit Porträtmodus, Porträtlicht und Tiefen-KontrolleTouch ID für sicheres Authentifizieren und Apple Pay </p>
                  <hr></hr>
                </div>
            
              </Accordion.Collapse>
            
          </Accordion>
        </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withLayout(function Modals() {
  return (
    <>
      <LinkedHeading h="1" id="modals">Modals</LinkedHeading> 
      <p className="lead">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

      <LinkedHeading h="2" id="demo">Simple Modal</LinkedHeading>
      <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
      
      <Example />

      <LinkedHeading h="2" id="fullscreen-demo">Fullscreen modal</LinkedHeading>
      <p>Toggle a working modal demo by clicking the button below. It activates fullscreen modal.</p>
      <ExampleFull />
      
      <LinkedHeading h="2" id="shop-demo">Fullscreen shop demo</LinkedHeading>
      <p>Toggle a working modal demo by clicking the button below. It activates fullscreen shop.</p>
      <ShopModal />
    </>
  )
});