import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="py-5">
      <h1>Blog</h1>
      <Card>
        <Card.Body>
          <h3>Latest Posts:</h3>
          <ListGroup>
            <ListGroup.Item>
              <a href="#">How to Tailor Your CV for Your Dream Job</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">The Importance of Customizing Your Cover Letter</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Tips for Effective Job Searching in 2025</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                Understanding the AI-Driven CV Optimization Process
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Blog;
