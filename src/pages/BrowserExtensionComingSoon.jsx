import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const BrowserExtensionComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to submit email (e.g., to backend or newsletter service)
    console.log("Email submitted:", email);
    setEmail(""); // Clear the input after submission
  };

  return (
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

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" style={{ marginBottom: "1rem" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
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

        <div style={{ marginTop: "2rem" }}>
          <Button
            className="mt-1"
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
            href="/"
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#009999")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00b3b3")}
            onClick={() => (window.location.href = "https://jobro.io")}
          >
            Back to Jobro.io
          </Button>
        </div>
      </Container>

      <footer
        style={{ position: "absolute", bottom: "1rem", fontSize: "0.875rem" }}
      >
        <p>
          &copy; 2025 Jobro.io |{" "}
          <a
            href="https://jobro.io/privacy-policy"
            style={{ color: "#00e6e6", textDecoration: "none" }}
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="https://jobro.io/contact"
            style={{ color: "#00e6e6", textDecoration: "none" }}
          >
            Contact Us
          </a>
        </p>
      </footer>
    </div>
  );
};

export default BrowserExtensionComingSoon;
