import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { LoginContext } from "../App";

const SignIn = () => {
  const { userId, setUserId } = useContext(LoginContext);

  const SERVER_BASE_URL = "http://localhost:8000/";
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${SERVER_BASE_URL}users/sign-in`, {
        email,
        password,
      });
      console.log("Sign-in successful:", response.data);
      setUserId(response.data.id);
      localStorage.setItem("userId", response.data.id);
      navigate("/");
    } catch (error) {
      console.error("Sign-in error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
                Sign In
              </h3>
              {isLoading ? (
                <LoadingSpinner message="Signing you in..." />
              ) : (
                <Form>
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
                  <Button
                    variant="primary"
                    block
                    className="mb-3"
                    style={{
                      backgroundColor: "#006666",
                      borderColor: "#006666",
                    }}
                    onClick={handleSignIn}
                    disabled={isLoading}
                  >
                    Sign In
                  </Button>
                </Form>
              )}

              <div className="text-center">
                <Nav.Link
                  as={Link}
                  to="/register"
                  style={{ color: "#006666", textDecoration: "none" }}
                >
                  Don’t have an account? Register
                </Nav.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
