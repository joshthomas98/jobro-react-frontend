import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#006666", color: "white", padding: "40px 0" }}
    >
      <Container>
        {/* Main Grid for Links */}
        <Row className="mb-5" style={{ justifyContent: "space-between" }}>
          {/* About Section */}
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
            <h5>About Jobro.io</h5>
            <p className="text-center">
              Jobro.io helps you optimise your CV for the perfect job role using
              AI. Join thousands of users taking their job applications to the
              next level.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled text-center">
              <li>
                <Button
                  variant="link"
                  href="/termsandconditions"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Terms & Conditions
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/privacypolicy"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/disclaimer"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Disclaimer
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/support"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Support
                </Button>
              </li>
            </ul>
          </Col>

          {/* Resources Section */}
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
            <h5>Resources</h5>
            <ul className="list-unstyled text-center">
              <li>
                <Button
                  variant="link"
                  href="/blog"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Blog
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/faq"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  FAQs
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/careers"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Careers
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/contact"
                  style={{ color: "#66ccff" }} // Lighter blue color
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-around">
              <Button
                variant="link"
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white"
              >
                <FaFacebook size={24} />
              </Button>
              <Button
                variant="link"
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-white"
              >
                <FaTwitter size={24} />
              </Button>
              <Button
                variant="link"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-white"
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                variant="link"
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white"
              >
                <FaInstagram size={24} />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: "white", marginBottom: "30px" }} />

        {/* Footer Bottom */}
        <Row className="justify-content-between text-center">
          <Col xs={12} md="auto">
            <p className="small">
              &copy; {new Date().getFullYear()} Jobro.io. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md="auto">
            <p className="small">Built with ❤️ by the Jobro.io team.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
