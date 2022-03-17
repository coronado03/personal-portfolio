import { Container, Button, Row, Col, Image} from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container fluid id="about" className="mt-3 bg-dark">
        <Container className="animated-section p-3">
          <Row>
            <h1 className="text-light">About Me</h1>
          </Row>
          <p className="text-muted">Who is Sebastian?</p>
          <Row>
            <Col>
              <p className="text-light">text text textetete</p>
            </Col>
            <Col className="d-none d-lg-block">
              <Image src="/about_undraw.svg" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
