import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        backgroundColor: "#006666", // Slightly adjusted for better contrast
        color: "white",
        padding: "0", // Remove vertical padding to fit image properly
      }}
    >
      <Container>
        <Navbar
          expand="lg"
          className="justify-content-between"
          style={{ padding: "0" }}
        >
          <Navbar.Brand>
            <img
              className="img-fluid py-3"
              src="src/assets/jobro-logo.png"
              alt="Jobro.io Logo"
              onClick={() => navigate("/")}
              style={{
                maxHeight: "200px", // Control the logo's height
                width: "auto", // Ensure the width adjusts according to the height
                cursor: "pointer",
              }}
            />
          </Navbar.Brand>
          <Nav className="d-flex align-items-center">
            <Nav.Item className="me-3">
              <Button
                variant="outline-light"
                href="/auth"
                className="d-flex align-items-center"
              >
                Sign in
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="outline-light"
                href="https://twitter.com"
                target="_blank"
                className="d-flex align-items-center"
              >
                Register
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
