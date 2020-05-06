import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withLayout(function Modals() {
  return (
    <>
      <h1>Modals</h1>
      <p className="lead">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

      <LinkedHeading h="2" id="demo">Live demo</LinkedHeading>
      <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
      
      <Example />
    </>
  )
});