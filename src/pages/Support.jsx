import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Support = () => {
  return (
    <Container className="py-5">
      <h1>Support</h1>
      <Card>
        <Card.Body>
          <h3>Need help?</h3>
          <p>
            Our support team is here to assist you with any questions or issues
            you may encounter.
          </p>
          <ListGroup>
            <ListGroup.Item>
              Email Support:{" "}
              <a href="mailto:support@cvtailor.io">support@cvtailor.io</a>
            </ListGroup.Item>
            <ListGroup.Item>Live Chat: [Link to live chat]</ListGroup.Item>
            <ListGroup.Item>Phone Support: [Phone Number]</ListGroup.Item>
            <ListGroup.Item>
              Business Hours: Monday–Friday, 9 AM to 5 PM [Time Zone]
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Support;
