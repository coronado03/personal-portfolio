import { Container, Button, Image, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid className="bg-dark text-light pt-2">
        <Row className="animated-section text-center">
          <Col>
              <a href="https://github.com/coronado03">
                <Image
                  className="mx-2 social-links"
                  src="footer-icons/github.svg"
                />
              </a>
              <a href="https://www.linkedin.com/in/sebasti%C3%A1n-coronado-003180217/">
                <Image
                  className="mx-2 social-links"
                  src="footer-icons/linkedin.svg"
                />
              </a>
          </Col>
        </Row>

        <Row className="animated-section text-center">
          <Col>
              <hr/>
              <p>©Copyright 2022</p>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}
