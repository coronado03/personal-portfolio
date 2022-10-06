import { Container, Button, Row, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleSubmitCall = async (e) => {
    e.preventDefault();
    handleSubmit(e)
      const res = await fetch("api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: "Portfolio message!",
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      if (!error && validated == true) {
        setModalShow(true)
      }
  };
  
  //In view animaiton code
  const {ref: myRef, inView: myElementIsVisible} = useInView({
    triggerOnce: true,
  })

  return (
    <>
     <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Message Sent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> Await a response!</Modal.Body>
      </Modal>
      

      <Container fluid id="contact" className="mt-3 bg-dark">
        <Container className={`${myElementIsVisible ? 'animated-section' : "" } p-3`}>
          <Row>
            <h1 className="text-light" ref={myRef}>{"<Contact Me/>"}</h1>
          </Row>
          <p className="red">
            Always active for different types of jobs, I'm just one click away.
          </p>
          <Row></Row>
          <Form
            noValidate
            validated={validated}
            method="post"
            onSubmit={handleSubmitCall}
          >
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Control name="fullname" value={fullname} onChange={(e) => { setFullname(e.target.value);}} required type="textarea" placeholder="Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name="email" value={email} onChange={(e) => { setEmail(e.target.value);}} required type="email" placeholder="Email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control name="message" value={message} onChange={(e) => { setMessage(e.target.value);}} required as="textarea" rows={3} placeholder="Message" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="rounded-pill"
              variant="outline-light"
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}
