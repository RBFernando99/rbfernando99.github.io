import React from "react";

import Event from "./Event";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Education() {
  return (
    <div id="education" className="mb-4">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Education</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-3">
          <Event
            title="Computer Engineering"
            issuer="University of Córdoba"
            description="Class representative and student council member."
            date="Sep 2017 – Feb 2023"
            place="Córdoba, Spain"
          ></Event>
        </Row>
        <Row>
          <Event
            title="SAP4Business Academy"
            issuer="Deloitte"
            description="Training program focused on SAP solutions for business transformation."
            date="Sep 2022 – Dec 2022"
            place="Madrid, Spain"
          ></Event>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
