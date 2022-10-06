import { Navbar, Nav, Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

export default function Navigation() {
  //In view animaiton code
  const {ref: myRef, inView: myElementIsVisible} = useInView({
    triggerOnce: true,
   })

  return (
    <Navbar
      sticky="top"
      bg="light"
      variant="light"
      className="fs-3"
      expand="lg"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Navbar.Brand href="#">Sebastian Coronado</Navbar.Brand>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link className="links" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="links" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="links" href="#work">
              Work
            </Nav.Link>
            <Nav.Link className="links" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
