import React from 'react';
import LinkedHeading from '../../components/LinkedHeading';
import { Container, Row, Col } from 'react-bootstrap';
import withLayout from "../../with-layout"

export default withLayout(function GridSection({ data }) {
  return (
    <>
      <LinkedHeading h="1" id="grid">Grid system</LinkedHeading>

      <br/>
      <br/>

      <Container fluid className="ebf-grid-example">
        <Row className="mt-4 mb-4">
          <Col>
            <span>12 Col</span>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col xl={3} lg={3} md={3} sm={3} xs={3}>
            <span>3 Col</span>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <span>6 Col</span>
          </Col>
          <Col xl={3} lg={3} md={3} sm={3} xs={3}>
            <span>3 Col</span>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
            <span>5 Col</span>
          </Col>
          <Col xl={4} lg={4} md={4} sm={4} xs={4}>
            <span>4 Col</span>
          </Col>
          <Col xl={2} lg={2} md={2} sm={2} xs={2}>
            <span>2 Col</span>
          </Col>
          <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            <span>1 Col</span>
          </Col>
        </Row>

      </Container>
    </>
  );
});