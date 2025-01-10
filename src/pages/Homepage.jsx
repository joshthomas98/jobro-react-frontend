import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaChrome } from "react-icons/fa";

const Homepage = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#00796b",
          color: "white",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4">
                Optimise Your CV for the Perfect Role
              </h1>
              <p className="lead">
                Jobro.io uses advanced AI to tailor your CV for specific job
                requirements, helping you secure your dream role effortlessly.
              </p>
              <Button variant="light" size="lg" className="mt-3">
                Get Started for Free
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="src/assets/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
                alt="Jobro.io hero illustration"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Steps to Use Jobro.io */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-4">How to Start Using Jobro.io</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="list-unstyled text-center">
                <li className="mb-3">
                  <strong>1.</strong> Sign up for a free account.
                </li>
                <li className="mb-3">
                  <strong>2.</strong> Upload your base CV to your account.
                </li>
                <li className="mb-3">
                  <strong>3.</strong> Download the browser extension.
                </li>
                <li className="mb-3">
                  <strong>4.</strong> Find job listings you like and optimise
                  your CV with a click.
                </li>
                <li>
                  <strong>5.</strong> Retrieve your optimised CV and apply!
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Browser Extension CTA */}
      <section
        style={{
          backgroundColor: "#00796b",
          color: "white",
          padding: "60px 0",
        }}
      >
        <Container className="text-center">
          <h2>Get the Jobro.io Browser Extension</h2>
          <p className="lead">
            Enhance your job application process with our powerful browser
            extension.
          </p>
          <Button variant="light" size="lg" className="mt-3">
            <FaChrome className="me-2" />
            Install Extension
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-4">Features of Jobro.io</h2>
          <Row className="text-center">
            {[
              {
                title: "AI-Powered CV Optimisation",
                text: "Tailor your CV to specific job requirements using AI-driven suggestions.",
              },
              {
                title: "Job Match Alerts",
                text: "Receive personalised job recommendations based on your optimised CV.",
              },
              {
                title: "Easy CV Sharing",
                text: "Share your optimised CV directly with recruiters or apply with one click.",
              },
            ].map((feature, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <Card className="h-100 shadow">
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: "#f1f1f1", padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <Row className="text-center">
            {[
              {
                text: "Jobro.io helped me land my dream role in less than a month!",
                name: "John Doe",
                title: "Software Engineer",
              },
              {
                text: "I love the personalised job alerts. Never miss a posting!",
                name: "Jane Smith",
                title: "Data Scientist",
              },
              {
                text: "I love the personalised job alerts. Never miss a posting!",
                name: "Jane Smith",
                title: "Data Scientist",
              },
            ].map((testimonial, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <Card className="h-100 shadow">
                  <Card.Body>
                    <Card.Text className="mb-4">{testimonial.text}</Card.Text>
                    <Card.Subtitle>{testimonial.name}</Card.Subtitle>
                    <Card.Text className="text-muted">
                      {testimonial.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        style={{
          backgroundColor: "#00796b",
          color: "white",
          padding: "60px 0",
        }}
      >
        <Container className="text-center">
          <h2>Ready to Land Your Dream Role?</h2>
          <p className="lead">
            Sign up now and get started with Jobro.io today!
          </p>
          <Button variant="light" size="lg">
            Join for Free
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
