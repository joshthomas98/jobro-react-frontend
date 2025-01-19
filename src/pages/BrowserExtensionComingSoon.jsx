import React from "react";
import { Container, Button } from "react-bootstrap";

const BrowserExtensionComingSoon = () => {
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
          className="container text-center"
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
        <div style={{ marginTop: "2rem" }}>
          <Button
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
