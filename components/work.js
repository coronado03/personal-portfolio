import {
  Container,
  Button,
  Image,
  Badge,
  Row,
  Col,
  CardGroup,
  Card,
} from "react-bootstrap";

import Link from "next/link";

export default function Work() {
  return (
    <>
      <Container id="work" className="animated-section py-5">
        <Row>
          <h1>{"<Work/>"}</h1>
        </Row>
        <Row>
          <p className="text-muted">A few projects I've made on my own</p>
        </Row>

        <Row xs={1} lg={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="/work-images/talkanger.png" />
              <Card.Body>
                <Card.Title>Talkanger</Card.Title>
                <Card.Text>
                  Talkanger is a webapp that connects you to other people with
                  different room numbers. This website was created using
                  websockets for real time connection.
                </Card.Text>
                <Row md={12}>
                  <Col className="justify-co<ntent-center text-center">
                    <Link href="https://github.com/coronado03/Talkanger/tree/main/global-chat">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="/work-images/portfolio.png" />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                  A website with the listing of the work I've done as a developer.
                </Card.Text>
                <Row md={12}>
                  <Col className="justify-content-center text-center">
                  <Link href="https://todo-manager-online.herokuapp.com/?">
                    <Button variant="warning">Live Demo</Button>
                  </Link>
                  </Col>
                  <Col className="justify-co<ntent-center text-center">
                    <Link href="https://github.com/coronado03/personal-portfolio">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="/work-images/todo.png" />
              <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text>
                  An online Todo list made with react using hooks.
                </Card.Text>
                <Row md={12}>
                  <Col className="justify-content-center text-center">
                    <Button variant="warning">Live Demo</Button>
                  </Col>
                  <Col className="justify-co<ntent-center text-center">
                    <Link href="https://github.com/coronado03/Talkanger/tree/main/global-chat">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </>
  );
}
