import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const Register = () => {
  const SERVER_BASE_URL = "http://localhost:8000/";
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${apiUrl}users/new-user-signup`, {
        fullName,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      navigate("/welcomenewuser");
    } catch (error) {
      console.error("Registration error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "75vh", backgroundColor: "#F5F5F5" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={6} lg={4}>
          <Card className="shadow-lg rounded-lg">
            <Card.Body className="p-5">
              <h3
                className="text-center mb-4"
                style={{ color: "#006666", fontWeight: "bold" }}
              >
                Create an Account
              </h3>
              {isLoading ? (
                <LoadingSpinner message="Creating your account..." />
              ) : (
                <Form>
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      required
                      className="mb-3"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                      className="mb-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      className="mb-3"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      required
                      className="mb-3"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    block
                    className="mb-3"
                    style={{
                      backgroundColor: "#006666",
                      borderColor: "#006666",
                    }}
                    onClick={handleRegister}
                    disabled={isLoading}
                  >
                    Register
                  </Button>
                </Form>
              )}
              <div className="text-center">
                <Nav.Link
                  as={Link}
                  to="/signin"
                  style={{ color: "#006666", textDecoration: "none" }}
                >
                  Already have an account? Sign In
                </Nav.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
