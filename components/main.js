import { Container, Button, Image, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useInView } from "react-intersection-observer";


export default function Hero() {
  //In view animaiton code
  const {ref: myRef, inView: myElementIsVisible} = useInView({
      triggerOnce: true,
   })

  return (
    <>
      <Container className={`${myElementIsVisible ? 'animated-section' : "" } py-5`}>
        <Row>
          <Col md={6} className="d-none d-lg-block">
            <Image className="align-self-end" src="/main_undraw.svg" />
          </Col>
          <Col md={12} lg={6}>
            <Row id="main" className="mt-3">
              <h4 className="red" ref={myRef}>{"<Software Engineer/>"}</h4>
            </Row>
            <Row className="fs-1">
              <h1>Sebastian Coronado</h1>
            </Row>
            <Row>
              <p>
                Hello my name is Sebastian, I'm a 18 year old full stack dev who is
                currently majoring in Computer Engineering.
              </p>
            </Row>

            <Row className="mt-3">
              <Col>
                {" "}

                <a href="Sebastián's Resume.pdf" target="_blank">
                <Button className="rounded-pill" variant="outline-dark">
                  Download CV
                </Button>
                </a>
                
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>

    </>
  );
}
