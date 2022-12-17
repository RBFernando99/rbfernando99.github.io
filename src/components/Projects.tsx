import GitHubService from "../services/github.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";

function Projects() {
  const [repos, setRepos] = useState([
    {
      id: 0,
      name: "",
      description: "",
      html_url: "",
    },
  ]);

  const getRepos = () => {
    GitHubService.getReposFromUser("RBFernando99").then((response) => {
      setRepos(response.data);
    });
  };

  useEffect(() => {
    getRepos();
  }, []);

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
        <Container>
          <Row>
            {repos.map((repo) => (
              <Col key={repo.id} className="mt-5">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <a href={repo.html_url}>
                      <Button variant="primary">Repository</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
