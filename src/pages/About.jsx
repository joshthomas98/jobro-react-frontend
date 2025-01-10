import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid="md" style={{ padding: "60px 0" }}>
      <Row className="mb-5 text-center">
        <Col xs={12}>
          <h1>About Jobro.io</h1>
          <p className="lead">
            Jobro.io is revolutionising how you apply for jobs by using AI to
            optimise your CV and help you land the job you’ve always wanted.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12} md={6}>
          <h3>Our Mission</h3>
          <p>
            At Jobro.io, our mission is to empower job seekers by providing
            innovative, AI-driven tools that improve the job application
            process. We aim to help individuals create tailored, professional
            CVs that make them stand out in the competitive job market.
          </p>
          <Button variant="primary" href="/contact" size="lg">
            Get in Touch
          </Button>
        </Col>

        <Col xs={12} md={6}>
          <h3>Why Choose Jobro.io?</h3>
          <ul>
            <li>
              AI-powered CV optimisation for personalised job applications.
            </li>
            <li>Easy-to-use interface for hassle-free CV creation.</li>
            <li>
              Quick and effective recommendations to boost your chances of
              success.
            </li>
            <li>Affordable for all users with multiple plans available.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5 text-center">
        <Col xs={12}>
          <h2>Meet the Team</h2>
          <p>
            Our passionate team works tirelessly to bring innovative solutions
            to job seekers worldwide.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FaRegUser size={50} className="mb-3" />
              <Card.Title>Josh Thomas</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
              <Button variant="link" href="mailto:josh@jobro.io">
                josh@jobro.io
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FaRegUser size={50} className="mb-3" />
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>Lead Developer</Card.Text>
              <Button variant="link" href="mailto:jane@jobro.io">
                jane@jobro.io
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FaRegUser size={50} className="mb-3" />
              <Card.Title>Michael Lee</Card.Title>
              <Card.Text>Product Manager</Card.Text>
              <Button variant="link" href="mailto:michael@jobro.io">
                michael@jobro.io
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col xs={12}>
          <Button variant="primary" href="/signup" size="lg">
            Join Jobro.io Today
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
