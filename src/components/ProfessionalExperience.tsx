import React from "react";

import Event from "./Event";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfessionalExperience() {
  return (
    <div id="professional-experience" className="mb-4">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Professional Experience</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-3">
          <Event
            title="Technological Innovation Intern"
            issuer="IMIBIC"
            date="Oct 2022 – Dec 2022"
            place="Córdoba, Spain"
          ></Event>
        </Row>
        <hr />
        <Row className="mt-4">
          <Event
            title="Web Designer"
            issuer="Freelance"
            date="2021 – present"
          ></Event>
        </Row>
      </Container>
    </div>
  );
}

export default ProfessionalExperience;
