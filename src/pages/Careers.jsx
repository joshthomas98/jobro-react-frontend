import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Careers = () => {
  return (
    <Container>
      <h1>Careers</h1>
      <Card>
        <Card.Body>
          <h3>Join the CVTailor.io Team!</h3>
          <p>
            If you are passionate about innovation, career development, and
            using AI to solve real-world problems, we would love to hear from
            you.
          </p>
          <h4>Current Openings:</h4>
          <ListGroup>
            <ListGroup.Item>Frontend Developer</ListGroup.Item>
            <ListGroup.Item>Data Scientist</ListGroup.Item>
            <ListGroup.Item>Customer Support Specialist</ListGroup.Item>
            <ListGroup.Item>Marketing Manager</ListGroup.Item>
          </ListGroup>
          <p className="mt-3">
            To apply, send your resume and cover letter to{" "}
            <a href="mailto:careers@cvtailor.io">careers@cvtailor.io</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Careers;
