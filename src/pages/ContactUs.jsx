import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Card>
        <Card.Body>
          <h3>We’d love to hear from you!</h3>
          <p>
            Whether you have a question, feedback, or need support, you can
            reach us through the following methods:
          </p>
          <ListGroup>
            <ListGroup.Item>
              Email:{" "}
              <a href="mailto:contact@cvtailor.io">contact@cvtailor.io</a>
            </ListGroup.Item>
            <ListGroup.Item>Phone: [Insert phone number]</ListGroup.Item>
            <ListGroup.Item>
              Address: [Insert physical address, if applicable]
            </ListGroup.Item>
          </ListGroup>
          <p>Follow us on social media for updates:</p>
          <ListGroup>
            <ListGroup.Item>Twitter: [Link]</ListGroup.Item>
            <ListGroup.Item>LinkedIn: [Link]</ListGroup.Item>
            <ListGroup.Item>Facebook: [Link]</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
