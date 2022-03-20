import { Container, Button, Image, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <>
      <Container className="animated-section py-5">
        <Row>
          <Col md={6} className="d-none d-lg-block">
            <Image className="align-self-end"
              src= "/main_undraw.svg"/>
            
          </Col>
          <Col md={12} lg={6}>
            <Row id="main" className="mt-3">
              <h4 className="text-muted">{"<Software Engineer/>"}</h4>
            </Row>
            <Row className="fs-1">
              <h1>Sebastian Coronado</h1>
            </Row>
            <Row>
              <p>
                Hello my name is Sebastian, I'm a 17 year old full stack Dev. I'm
                currently majoring in Computer Engineering.
                </p>
            </Row>

            <Row className="mt-3">
              <Col>
                {" "}
                <Button className="rounded-pill" variant="outline-dark">
                  Download CV
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
