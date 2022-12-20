import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills() {
  return (
    <div id="skills" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Skills</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My Skills</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
