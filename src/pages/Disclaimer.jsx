import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">Disclaimer</h1>
          <p className="text-center">Last updated: January 2025</p>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <h3>1. General Information</h3>
          <p>
            The information provided on CVTailor.io is for general informational
            purposes only. While we strive to ensure the accuracy and
            completeness of the information, we make no guarantees or
            warranties.
          </p>
          <h3>2. No Professional Advice</h3>
          <p>
            The content provided on CVTailor.io is not intended as professional
            career or legal advice. Always seek advice from qualified
            professionals before making career-related decisions.
          </p>
          <h3>3. Use at Your Own Risk</h3>
          <p>
            Any use of CVTailor.io and its services is done at your own risk. We
            are not responsible for any loss or damage resulting from the use of
            our platform.
          </p>
          <h3>4. Third-Party Links</h3>
          <p>
            CVTailor.io may contain links to third-party websites. We are not
            responsible for the content or practices of these external websites.
          </p>
          <h3>5. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, CVTailor.io will not be
            liable for any damages or losses arising from your use of the
            platform.
          </p>
          <h3>6. Changes to Disclaimer</h3>
          <p>
            We may update this disclaimer at any time. Any changes will be
            posted on this page with an updated "last updated" date.
          </p>
          <h3>7. Contact Us</h3>
          <p>
            If you have any questions regarding this disclaimer, please contact
            us at <a href="mailto:support@cvtailor.io">support@cvtailor.io</a>.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Disclaimer;
