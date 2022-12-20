import React from "react";

import Event from "./Event";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Awards() {
  return (
    <div id="awards" className="mb-4">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Awards</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-3">
          <Event
            title="Accésit Lotka-Volterra"
            issuer="University of Córdoba"
            description="Best conceptualization and ecological interpretation of the models."
            date="Sep 2017 – Feb 2023"
            place="Córdoba, Spain"
          ></Event>
        </Row>
      </Container>
    </div>
  );
}

export default Awards;
