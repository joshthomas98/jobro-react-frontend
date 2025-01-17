import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import axios from "axios";
import logo from "../assets/cvtailor-logo.png"; // Adjust the path if needed
import { LoginContext } from "../App";

const Header = () => {
  const { userId, setUserId } = useContext(LoginContext);

  const navigate = useNavigate();

  // const storedUserId = localStorage.getItem("userId");

  const SERVER_BASE_URL_WITHOUT_TRAILING_SLASH = "http://localhost:8000";

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const getUsersFirstNameFromId = async () => {
      if (!userId) return; // Prevent API call if userId is null or undefined
      try {
        const response = await axios.get(
          `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`
        );
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

          <Nav className="d-flex align-items-center">
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
              <p className="m-0 me-3">Welcome, {firstName}</p> // Neat margin and no extra space
            )}

            {userId ? (
              <Nav.Item className="me-3">
                <Button
                  variant="outline-light"
                  className="me-3"
                  onClick={navigateToUsersProfile}
                >
                  My Profile
                </Button>

                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav.Item>
            ) : null}
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
