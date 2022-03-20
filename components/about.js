import { Container, Button, Row, Col, Image} from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container fluid id="about" className="mt-3 bg-dark">
        <Container className="animated-section py-5">
          <Row>
            <h1 className="text-light">About Me</h1>
          </Row>
          <p className="text-warning">Who is Sebastian?</p>
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
