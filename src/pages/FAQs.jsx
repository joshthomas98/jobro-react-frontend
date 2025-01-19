import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";

const FAQs = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is CVTailor.io?</Accordion.Header>
          <Accordion.Body>
            <i>
              CVTailor.io is a platform that allows you to upload your CV, match
              it with job listings, and receive personalised suggestions to
              improve your CV based on job descriptions.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I use CVTailor.io?</Accordion.Header>
          <Accordion.Body>
            <i>
              Simply create an account, upload your CV, and submit a job
              listing. Our AI will optimise your CV to match the job
              description.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Is there a fee to use CVTailor.io?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              We offer both free and premium plans. Premium plans offer
              additional features like unlimited CV revisions and advanced AI
              optimisation.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How does the AI optimise my CV?</Accordion.Header>
          <Accordion.Body>
            <i>
              Our AI analyses job descriptions and compares them with your CV.
              It identifies areas where your CV could be improved, such as
              relevant skills, keywords, and experience, and provides
              personalised suggestions to increase your chances of landing a
              job.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Can I upload my CV in any format?</Accordion.Header>
          <Accordion.Body>
            <i>
              CVTailor.io supports commonly used file formats like PDF, DOCX,
              and TXT. We recommend uploading your CV in PDF format for the best
              results.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Can I make multiple revisions to my CV?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              Yes, if you’re on a premium plan, you can make unlimited revisions
              to your CV. Free users can make a limited number of revisions.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How secure is my personal information?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              We take privacy and security very seriously. Your personal
              information is protected with SSL encryption, and we adhere to
              strict data protection policies. We do not share your information
              with third parties without your consent.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How do I contact customer support?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              If you need assistance, you can reach our customer support team at
              <a href="mailto:support@cvtailor.io"> support@cvtailor.io</a>. We
              strive to respond within 24 hours.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>Can I use CVTailor.io on mobile?</Accordion.Header>
          <Accordion.Body>
            <i>
              Yes, CVTailor.io is fully responsive and works on mobile devices,
              tablets, and desktops.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>
            What types of jobs can CVTailor.io help with?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              CVTailor.io can help optimise your CV for any type of job. Whether
              you’re looking for a tech, marketing, finance, or creative role,
              our AI tailors your CV to match job descriptions across various
              industries.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header>How do I cancel my subscription?</Accordion.Header>
          <Accordion.Body>
            <i>
              To cancel your subscription, go to your account settings and click
              on "Cancel Subscription." If you have any issues, feel free to
              reach out to our support team at{" "}
              <a href="mailto:support@cvtailor.io">support@cvtailor.io</a>.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header>
            Will CVTailor.io help me land a job?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              While CVTailor.io can significantly increase your chances of
              landing a job by optimising your CV, success depends on various
              factors, such as job market conditions, your experience, and
              qualifications.
            </i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header>
            Can I use CVTailor.io to apply for jobs directly?
          </Accordion.Header>
          <Accordion.Body>
            <i>
              CVTailor.io does not directly apply to jobs for you. However, you
              can easily apply to jobs by downloading your optimised CV and
              submitting it through job application portals.
            </i>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQs;
