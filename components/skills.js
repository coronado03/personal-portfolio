import { Container, Button, Image, Row, Col, Nav, Tab } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

export default function Skills() {
    //In view animaiton code
    const {ref: myRef, inView: myElementIsVisible} = useInView({
      triggerOnce: true,
     })

  return (
    <>
      <Container fluid id="skills" className="mt-3">
        <Container className={`${myElementIsVisible ? 'animated-section' : "" } py-5`}>
          <Row>
            <h1 ref={myRef}>{"<Skills/>"}</h1>
          </Row>

          <Row>
            <p className="red">
              The skills I usually use to bring projects to life
            </p>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-4">
              <Col sm={3} className="mb-3">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="black" eventKey="first">
                      Front End
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="black" eventKey="second">
                      Back End
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="black" eventKey="third">
                      Other
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="gy-3" xs={2} lg={6}>
                      <Col>
                        <Image
                          src="\skill-images\HTML5.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\CSS3.SVG"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\JS.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\REACT.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\BOOTSTRAP.svg"
                          className="skill-icons"
                        />
                      </Col>

                      <Col>
                        <Image
                          src="\skill-images\TAILWIND.svg"
                          className="skill-icons"
                        />
                      </Col>

                      <Col>
                        <Image
                          src="\skill-images\NEXTJS.svg"
                          className="skill-icons"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row className="gy-3" xs={2} lg={6}>
                      <Col>
                        <Image
                          src="\skill-images\NODEJS.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\EXPRESS.SVG"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\MONGODB.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\GRAPHQL.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="\skill-images\PYTHON.svg"
                          className="skill-icons"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row className="gy-3" xs={2} lg={6}>
                      <Col>
                        <Image
                          src="\skill-images\GIT.svg"
                          className="skill-icons"
                        />
                      </Col>
                      <Col>
                        <Image
                          src="skill-images\VSCODE.svg"
                          className="skill-icons"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Container>
    </>
  );
}
