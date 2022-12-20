import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Event(props: {
  title: string;
  issuer: string;
  description?: string;
  date: string;
  place?: string;
}) {
  return (
    <Container>
      <Row>
        <Col>
          <p>{props.date}</p>
        </Col>
        <Col>
          <p>
            <b>{props.title}</b>, <i>{props.issuer}</i>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.place}</p>
        </Col>
        <Col>
          <p>{props.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Event;
