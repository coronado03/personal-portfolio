import { Container, Button, Row, Form, Feedback } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container fluid id="contact" className="mt-3 bg-dark">
        <Container className="animated-section p-3">
          <Row>
            <h1 className="text-light">Contact</h1>
          </Row>
          <p className="text-warning">
            Always active for different types of jobs, I'm just one click away.
          </p>
          <Row></Row>
          <Form
            noValidate
            validated={validated}
            method="post"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Control required type="textarea" placeholder="Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control required type="email" placeholder="Email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Message" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="rounded-pill"
              variant="outline-light"
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}
