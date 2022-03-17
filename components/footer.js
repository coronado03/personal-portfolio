import { Container, Button, Image, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid className="bg-dark py-3 text-light">
        <Row className="text-end">
          <Col>
            <p>© Copyright 2021. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
