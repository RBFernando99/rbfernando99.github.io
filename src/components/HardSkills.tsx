import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HardSkills() {
  return (
    <div id="hard-skills" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Hard Skills</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My Hard Skills</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HardSkills;
