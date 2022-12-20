import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Languages() {
  return (
    <div id="languages" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Languages</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>My Languages</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Languages;
