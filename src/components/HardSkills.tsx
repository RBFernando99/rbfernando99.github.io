import React from "react";

import Star from "./icons/Star";
import StarFill from "./icons/StarFill";
import StarHalfFill from "./icons/StarHalfFill";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

function HardSkills() {
  return (
    <div id="hard-skills" className="">
      <Container className="mb-3">
        <Row>
          <Col>
            <h2>Hard Skills</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>General-purpose</Card.Title>
                <Card.Text>
                  <p>C / C++</p>
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
                <Card.Title>Data Science</Card.Title>
                <Card.Text>
                  <p>Python / R</p>
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
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  <p>Java / Spring / React</p>
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
                <Card.Title>Enviroments</Card.Title>
                <Card.Text>
                  <p>Linux / Bash / Git / Docker</p>
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
                <Card.Title>Databases</Card.Title>
                <Card.Text>
                  <p>MongoDB / MySQL</p>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarHalfFill />
                  <Star />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" />
        </Row>
      </Container>
    </div>
  );
}

export default HardSkills;
