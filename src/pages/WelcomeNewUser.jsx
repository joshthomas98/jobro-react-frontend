// src/pages/WelcomePage.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomeNewUser = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh", backgroundColor: "#F5F5F5" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={6} lg={4}>
          <Card className="shadow-lg rounded-lg">
            <Card.Body className="p-5">
              <h3
                className="text-center mb-4"
                style={{ color: "#006666", fontWeight: "bold" }}
              >
                Welcome!
              </h3>
              <p className="text-center">
                You have successfully created your account. We're excited to
                have you on board.
              </p>
              <div className="text-center">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#006666", borderColor: "#006666" }}
                  as={Link}
                  to="/auth"
                >
                  Go to Sign In
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeNewUser;
