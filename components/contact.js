import { Container, Button, Row, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Container fluid id="contact" className="mt-3 bg-dark">
        <Container className="animated-section p-3">
          <Row>
            <h1 className="text-light">Contact</h1>
          </Row>
            <p className="text-warning">Always active for different types of jobs, I'm just one click away.</p>
            <Row>

            </Row>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="textarea" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
          </Form>
          <Button className="rounded-pill" variant="outline-light">
            Send Message
          </Button>
        </Container>
      </Container>
    </>
  );
}
