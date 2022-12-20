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
            <h1>HardSkills</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My HardSkills</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HardSkills;
