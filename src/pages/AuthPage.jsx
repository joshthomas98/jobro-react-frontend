import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

const AuthPage = () => {
  const SERVER_BASE_URL = "http://localhost:8000/";
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const toggleForm = () => setIsRegister(!isRegister);

  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const newUserSignup = async () => {
    if (confirmPassword !== password) {
      alert("You must enter the same password twice");
      return; // Exit the function early
    }

    setIsLoading(true); // Show spinner

    try {
      const response = await axios.post(`${apiUrl}users/new-user-signup`, {
        fullName,
        email,
        password,
      });
      console.log("Signup successful:", response.data);
      navigate("/welcomepage");
    } catch (error) {
      console.error("Signup error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "65vh", backgroundColor: "#F5F5F5" }}
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

              {/* Show spinner when loading */}
              {isLoading ? (
                <LoadingSpinner message="Creating your account..." />
              ) : (
                <Form>
                  {isRegister && (
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
                  )}

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

                  {isRegister && (
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
                  )}

                  <Button
                    variant="primary"
                    type="submit"
                    block
                    className="mb-3"
                    style={{
                      backgroundColor: "#006666",
                      borderColor: "#006666",
                    }}
                    onClick={newUserSignup}
                    disabled={isLoading} // Disable button when loading
                  >
                    {isRegister ? "Register" : "Sign In"}
                  </Button>
                </Form>
              )}

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
