import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import axios from "axios";
import logo from "../assets/cvtailor-logo.png"; // Adjust the path if needed
import { LoginContext } from "../App";

const Header = () => {
  const { userId, setUserId } = useContext(LoginContext);

  const navigate = useNavigate();

  const SERVER_BASE_URL_WITHOUT_TRAILING_SLASH = "http://localhost:8000";
  const apiUrl = import.meta.env.VITE_API_URL;

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const getUsersFirstNameFromId = async () => {
      if (!userId) return; // Prevent API call if userId is null or undefined
      try {
        const response = await axios.get(`${apiUrl}users/${userId}`);
        setFullName(response.data.fullName);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUsersFirstNameFromId();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Clear user ID from localStorage
    setUserId(null); // Clear user ID from context
    navigate("/");
  };

  // Extract the first name from the full name (first word)
  const firstName = fullName.split(" ")[0];

  const navigateToUsersProfile = () => {
    navigate(`/userprofile/${userId}`);
  };

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
          className="justify-content-between d-flex align-items-center"
          style={{ padding: "0" }}
        >
          <Navbar.Brand>
            <img
              className="img-fluid py-3"
              src={logo} // Use the imported image
              alt="CvTailor.io Logo"
              onClick={() => navigate("/")}
              style={{
                maxHeight: "200px", // Control the logo's height
                width: "auto", // Ensure the width adjusts according to the height
                cursor: "pointer",
              }}
            />
          </Navbar.Brand>

          {/* Toggler for mobile menu */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {!userId ? (
                <Nav.Item className="me-3">
                  <Button
                    variant="outline-light"
                    href="/signin"
                    className="d-flex align-items-center"
                  >
                    Sign in / Register
                  </Button>
                </Nav.Item>
              ) : (
                <p className="m-0 me-3">Welcome, {firstName}</p>
              )}

              {userId && (
                <>
                  <Nav.Item className="me-3">
                    <Button
                      className="mt-3 mt-lg-0"
                      variant="outline-light"
                      onClick={navigateToUsersProfile}
                    >
                      My Profile
                    </Button>
                  </Nav.Item>

                  <Nav.Item>
                    <Button
                      className="mt-3 mt-lg-0 me-3 me-lg-0 mb-4 mb-lg-0"
                      variant="outline-light"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
