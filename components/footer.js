import { Container, Button, Image, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid className="bg-dark text-light">
        <Row className="animated-section text-sm-center text-lg-end">
          <Col>
            <p>
              <a href="https://github.com/coronado03">
                <Image
                  className="mx-2"
                  src="footer-icons/github.svg"
                />
              </a>
              <a href="https://www.linkedin.com/in/sebasti%C3%A1n-coronado-003180217/">
                <Image
                  className="mx-2"
                  src="footer-icons/linkedin.svg"
                />
              </a>
              © Copyright 2022. All right reserved

            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
