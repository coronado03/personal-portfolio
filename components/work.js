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
                    <Link href="https://github.com/coronado03/Timer-App">
                      <Button variant="outline-dark">Repository</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img className="card-img" variant="top" src="/work-images/timer.png" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Poland Timer</Card.Title>
                <Card.Text>
                  A personal website with a regressing countdown, the website also contains a clean ui that fits the theme. The design was built using Figma.
                </Card.Text>
                <Row className="" md={12}>
                  <Col className="justify-content-center text-center">
                  <Link href="https://plntimer.netlify.app/">
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
                <Card.Title>FEED Website</Card.Title>
                <Card.Text>
                  FEED is a fullstack webapp designed so that people in the IT department can commune. FEED takes inspiration from apps like DEV.to and Instagram.
                </Card.Text>
                <Row md={12}>
                  <Col className="align-items-end text-center">
                  <Link href="https://feed-website-coronado03.vercel.app/">
                    <Button variant="red">Live Demo</Button>
                  </Link>
                  </Col>
                  <Col className="justify-content-center text-center">
                    <Link href="https://github.com/coronado03/FEED-WEBSITE">
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
