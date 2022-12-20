import React from "react";

import Star from "./icons/Star";
import StarFill from "./icons/StarFill";
import StarHalfFill from "./icons/StarHalfFill";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

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
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Spanish</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>English</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <Star />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>German</Card.Title>
                <Card.Text>
                  <StarFill />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Italian</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <Star />
                  <Star />
                  <Star />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Languages;
