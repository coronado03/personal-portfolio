import { Container, Button, Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <>
      
      <Container fluid id="about" className="mt-3 bg-dark">
        
        <Container className="animated-section py-5">
          <Row>
            <h1 className="text-light">{"<About Me/>"}</h1>
          </Row>
          <p className="text-warning">Who is Sebastian?</p>
          <Row>
            <Col>
              <p className="text-light">
                Hey! My name is Sebastian and I love creating fascinating and
                innovative applications. Because of the previously stated
                reasons, I have as strong inclination towards being a web
                developer, and I try to reinvent myself each day.
              </p>
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
