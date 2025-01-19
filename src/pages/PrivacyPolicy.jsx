import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">Privacy Policy</h1>
          <p className="text-center">Last updated: January 2025</p>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <h3>1. Introduction</h3>
          <p>
            At CVTailor.io, we value your privacy. This privacy policy explains
            how we collect, use, and protect your personal information when you
            use our services.
          </p>
          <h3>2. Information We Collect</h3>
          <p>
            We collect personal information such as your name, email address,
            and CV details when you sign up and use our platform.
          </p>
          <h3>3. How We Use Your Information</h3>
          <p>
            Your information is used to provide and improve our services,
            including personalized CV optimization and job matching features.
          </p>
          <h3>4. Data Security</h3>
          <p>
            We implement security measures to protect your personal information
            from unauthorized access, alteration, or disclosure.
          </p>
          <h3>5. Third-Party Services</h3>
          <p>
            We do not share your personal information with third parties except
            as necessary to provide our services or as required by law.
          </p>
          <h3>6. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. You can also request that we stop using your
            information for certain purposes.
          </p>
          <h3>7. Changes to Privacy Policy</h3>
          <p>
            We may update this policy from time to time. Any changes will be
            reflected on this page with an updated "last updated" date.
          </p>
          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy, please contact
            us at <a href="mailto:support@cvtailor.io">support@cvtailor.io</a>.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;
