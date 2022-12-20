import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Awards() {
  return (
    <div id="awards" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Awards</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My Awards</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Awards;
