import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <div id="profile" className="mb-4">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Profile</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              My name is Fernando, I am 23 years old, and -predictably- I will
              obtain the Degree in Computer Engineering in December after
              finishing the presentation of the Final Degree Project. I have
              knowledge in embedded systems, data science, web development,
              databases, LINUX systems, mathematics, and programming in several
              languages.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
