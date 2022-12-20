import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <div id="profile" className="">
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
            <p>My Profile</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
