import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Education() {
  return (
    <div id="education" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Education</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My Education</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
