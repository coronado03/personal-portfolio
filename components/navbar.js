import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
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
          <Nav class>
            <Navbar.Brand href="#">Sebastian Coronado</Navbar.Brand>
          </Nav>

          <Nav className="mx-auto">
            <Nav.Link classname="links" href="#about">About</Nav.Link>
            <Nav.Link classname="links" href="#skills">Skills</Nav.Link>
            <Nav.Link classname="links" href="#work">Work</Nav.Link>
            <Nav.Link classname="links" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
