import React from "react";

import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Languages from "./Languages";

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
        <HardSkills />
        <SoftSkills />
        <Languages />
      </Container>
    </div>
  );
}

export default Skills;
