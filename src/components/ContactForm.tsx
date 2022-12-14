import React from "react";

import ContactFormService from "../services/contactform.service";

import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    ContactFormService.create(data);
    setSubmitted(true);
  });

  return !submitted ? (
    <div id="contact-form" className="mb-5">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Contact me</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" {...register("name")} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  {...register("email")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter message"
                  {...register("message")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCheck">
                <Form.Check required label="Agree to terms and conditions" />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </div>
  ) : (
    <div id="contact-form" className="mb-5">
      <Container className="mb-3">
        <Row>
          <Col>
            <h1>Contact me</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>Thank you for your message!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
