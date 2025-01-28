import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";

const BrowserExtensionComingSoon = () => {
  const navigate = useNavigate();
  const PRODUCTION_URL_WITHOUT_TRAILING_SLASH = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSignupSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${PRODUCTION_URL_WITHOUT_TRAILING_SLASH}/newslettersignups/`,
        {
          email,
        }
      );
      console.log("Newsletter signup successful:", response.data);
      navigate("/newsletterthankyou");
    } catch (error) {
      console.error("Newsletter signup error:", error.message);
    } finally {
      setEmail(""); // Clear the input after submission
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <LoadingSpinner message="Signing you up for our newsletter..." />
  ) : (
    <div
      style={{
        backgroundColor: "#006666",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container className="py-5">
        <h1
          style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}
        >
          Jobro Browser Extension - Coming Soon!
        </h1>
        <p
          className="container text-center pb-3"
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            lineHeight: "1.6",
            maxWidth: "1100px",
          }}
        >
          We’re working on something amazing! The Jobro browser extension will
          make it easier than ever to tailor your CVs to job listings directly
          from your browser. Stay tuned for updates as we prepare to launch this
          exciting new tool.
        </p>

        {/* Newsletter Signup Section */}
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "#004c4c",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Want to be the first to know when our new browser extension is
            released, as well as other exciting news from CVTailor.io? Sign up
            for our free monthly newsletter below!
          </h3>

          <Form onSubmit={handleNewsletterSignupSubmit}>
            <Form.Group controlId="email" style={{ marginBottom: "1rem" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="mt-4"
                style={{
                  padding: "0.75rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "1rem",
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              className="mt-3"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#00b3b3",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#009999")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#00b3b3")}
            >
              Subscribe Now
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default BrowserExtensionComingSoon;
