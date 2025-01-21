import React from "react";
import { Container, Button } from "react-bootstrap";

const NewsletterThankYou = () => {
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
        padding: "2rem",
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Thank You for Signing Up!
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Welcome to the Jobro community! We’re excited to have you onboard.
          You’ll be the first to receive updates about our browser extension,
          exciting tools, and helpful resources to tailor your CVs like a pro.
        </p>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "2rem",
            fontWeight: "300",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Be sure to check your inbox for our latest newsletter, and don’t
          hesitate to reach out with any questions or feedback.
        </p>
        <Button
          href="/"
          variant="light"
          size="lg"
          style={{
            marginTop: "2rem",
            padding: "0.75rem 2rem",
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
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NewsletterThankYou;
