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
import { useInView } from "react-intersection-observer";

import Link from "next/link";

export default function Work() {
  //In view animaiton code
  const {ref: myRef, inView: myElementIsVisible} = useInView({
    triggerOnce: true,
   })

  return (
    <>
      <Container id="work" className={`${myElementIsVisible ? 'animated-section' : "" } py-5`}>
        <Row>
          <h1 ref={myRef}>{"<Work/>"}</h1>
        </Row>
        <Row>
          <p className="red">A few projects I've made on my own</p>
        </Row>

        <Row xs={1} lg={2} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img className="w-100 card-img" variant="top" src="/work-images/talkanger.png" />
              <Card.Body>
                <Card.Title>Talkanger</Card.Title>
                <Card.Text>
                  Talkanger is a webapp that connects you to other people with
                  different room numbers. This website was created using
                  websockets for real time connection.
                </Card.Text>
                <Row md={12}>
                  <Col className="align-items-end text-center">
                    <Link href="https://github.com/coronado03/Talkanger/tree/main/global-chat">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img className="card-img" variant="top" src="/work-images/portfolio.png" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                  A website with the listing of the work I've done as a developer.
                </Card.Text>
                <Row className="" md={12}>
                  <Col className="justify-content-center text-center">
                  <Link href="https://todo-manager-online.herokuapp.com/?">
                    <Button variant="red">Live Demo</Button>
                  </Link>
                  </Col>
                  <Col className="text-center">
                    <Link href="https://github.com/coronado03/personal-portfolio">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="">
            <Card className="h-100">
              <Card.Img variant="top" src="/work-images/todo.png" />
              <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text>
                  An online Todo list made with react using hooks.
                </Card.Text>
                <Row md={12}>
                  <Col className="align-items-end text-center">
                    <Button variant="red">Live Demo</Button>
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
