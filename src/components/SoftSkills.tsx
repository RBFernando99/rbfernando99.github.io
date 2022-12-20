import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import Star from "./icons/Star";
import StarFill from "./icons/StarFill";
import StarHalfFill from "./icons/StarHalfFill";

function SoftSkills() {
  return (
    <div id="soft-skills" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h2>Soft Skills</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Teamwork</Card.Title>
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
                <Card.Title>Communication</Card.Title>
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
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Problem-solving</Card.Title>
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
                <Card.Title>Decision-making</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarHalfFill />
                  <Star />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Critical thinking</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarHalfFill />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Adaptability</Card.Title>
                <Card.Text>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarHalfFill />
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

export default SoftSkills;
