import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">Terms and Conditions</h1>
          <p className="text-center">Last updated: January 2025</p>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By using CVTailor.io, you accept and agree to these terms. If you do
            not agree with these terms, you must not use our services.
          </p>
          <h3>2. Account Responsibility</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>
          <h3>3. Use of Services</h3>
          <p>
            CVTailor.io provides services to optimize your CV for job
            applications. These services must be used for lawful purposes only.
          </p>
          <h3>4. Restrictions</h3>
          <p>
            You may not use our services to infringe upon intellectual property
            rights or engage in activities that could harm the platform or other
            users.
          </p>
          <h3>5. Changes to Terms</h3>
          <p>
            We reserve the right to modify or update these terms at any time.
            Any changes will be posted on this page.
          </p>
          <h3>6. Contact Information</h3>
          <p>
            If you have any questions about these terms, please contact us at{" "}
            <a href="mailto:support@cvtailor.io">support@cvtailor.io</a>.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TermsAndConditions;
