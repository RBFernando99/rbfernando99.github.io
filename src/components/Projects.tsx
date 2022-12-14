import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <div id="projects" className="p-3">
      <div className="pb-2">
        <Container>
          <Row>
            <Col>
              <h1>Projects</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="https://www.github.com/RBFernando99/">
                    <Button variant="primary">Go somewhere</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="https://www.github.com/RBFernando99/">
                    <Button variant="primary">Go somewhere</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="https://www.github.com/RBFernando99/">
                    <Button variant="primary">Go somewhere</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="https://www.github.com/RBFernando99/">
                    <Button variant="primary">Go somewhere</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
