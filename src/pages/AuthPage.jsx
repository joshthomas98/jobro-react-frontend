import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // For routing to different pages

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "60vh", backgroundColor: "#F5F5F5" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={6} lg={4}>
          <Card className="shadow-lg rounded-lg">
            <Card.Body className="p-5">
              <h3
                className="text-center mb-4"
                style={{ color: "#006666", fontWeight: "bold" }}
              >
                {isRegister ? "Create an Account" : "Sign In"}
              </h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    className="mb-3"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    className="mb-3"
                  />
                </Form.Group>

                {isRegister && (
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      required
                      className="mb-3"
                    />
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  block
                  className="mb-3"
                  style={{ backgroundColor: "#006666", borderColor: "#006666" }}
                >
                  {isRegister ? "Register" : "Sign In"}
                </Button>
              </Form>

              <div className="text-center">
                <Nav.Link
                  as={Link}
                  to="#"
                  onClick={toggleForm}
                  style={{ color: "#006666", textDecoration: "none" }}
                >
                  {isRegister
                    ? "Already have an account? Sign In"
                    : "Don’t have an account? Register"}
                </Nav.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
