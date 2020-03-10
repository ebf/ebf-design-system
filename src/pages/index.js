import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import withLayout from '../with-layout';

const IndexPage = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <h1>EBF Design System</h1>
        <p>Usage:</p>
        <pre>
          <code>npm i @ebf/design-system</code>
        </pre>
      </Col>
      <Col xs={12}>
        <button className="btn btn-primary">Docs</button>
      </Col>
    </Row>
  </Container>
)

export default withLayout(IndexPage, { title: 'Home' });
