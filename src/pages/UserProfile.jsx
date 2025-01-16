import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
  Carousel,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const themeColor = "#2D88FF"; // Primary Jobro color

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newFullName, setNewFullName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [jobListingText, setJobListingText] = useState("");
  const [generatedCVs, setGeneratedCVs] = useState([]);
  const [uploadedCV, setUploadedCV] = useState(null);

  const userId = localStorage.getItem("userId");
  const SERVER_BASE_URL_WITHOUT_TRAILING_SLASH = "http://localhost:8000";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`
        );
        setUserData(response.data);
        setFullName(response.data.fullName);
        setEmail(response.data.email);
        setProfilePic(response.data.profilePic);
        setGeneratedCVs(response.data.generatedCVs || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleGenerateOptimizedCV = () => {
    // Generate optimized CV logic here
    alert("Generating Optimized CV...");
  };

  const handleUploadCV = (e) => {
    const file = e.target.files[0];
    setUploadedCV(file);
    // Add logic for storing the uploaded CV on the server
  };

  const handleSaveProfile = async () => {
    try {
      const updatedUserData = {
        fullName: newFullName || fullName,
        email: newEmail || email,
        password: newPassword,
        profilePic: newProfilePic || profilePic,
        uploadedCV: uploadedCV,
      };
      const response = await axios.put(
        `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`,
        updatedUserData
      );
      setUserData(response.data);
      setFullName(response.data.fullName);
      setEmail(response.data.email);
      setProfilePic(response.data.profilePic);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Container>
      {/* Profile Header */}
      <Row className="my-5">
        <Col md={4}>
          <Card className="shadow-lg rounded-lg border-0">
            <Card.Body className="text-center">
              {profilePic ? (
                <Image
                  src={profilePic}
                  roundedCircle
                  fluid
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  fluid
                  alt="Profile Placeholder"
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
              <h3 className="mt-3 text-primary" style={{ fontWeight: 600 }}>
                {fullName}
              </h3>
              <p className="text-muted">{email}</p>
              {!isEditing && (
                <Button
                  variant="primary"
                  onClick={() => setIsEditing(true)}
                  className="rounded-pill"
                  style={{
                    backgroundColor: themeColor,
                    border: "none",
                    padding: "10px 30px",
                  }}
                >
                  Edit Profile
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* User Content Section */}
        <Col md={8}>
          <Card className="shadow-lg rounded-lg border-0 mb-4">
            <Card.Body>
              <h4 className="text-primary" style={{ fontWeight: 600 }}>
                Job Listing Text Input
              </h4>
              <Form.Group controlId="formJobListingText">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Paste the job listing text here..."
                  value={jobListingText}
                  onChange={(e) => setJobListingText(e.target.value)}
                  style={{
                    borderColor: themeColor,
                    boxShadow: "0 0 5px rgba(0, 123, 255, 0.3)",
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleGenerateOptimizedCV}
                className="rounded-pill mt-3"
                style={{
                  backgroundColor: themeColor,
                  border: "none",
                  padding: "10px 30px",
                }}
              >
                Generate My Optimized CV
              </Button>
            </Card.Body>
          </Card>

          {/* Upload CV Section */}
          <Card className="shadow-lg rounded-lg border-0 mb-4">
            <Card.Body>
              <h4 className="text-primary" style={{ fontWeight: 600 }}>
                Upload Your Existing Base CV (PDF)
              </h4>
              <Form.Group controlId="formBaseCV">
                <Form.Control
                  type="file"
                  accept="application/pdf"
                  onChange={handleUploadCV}
                  style={{
                    borderColor: themeColor,
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Card>

          {/* Generated CVs Carousel */}
          <Card className="shadow-lg rounded-lg border-0 mb-4">
            <Card.Body>
              <h4 className="text-primary" style={{ fontWeight: 600 }}>
                Your Previously Generated CVs
              </h4>
              {generatedCVs.length > 0 ? (
                <Carousel>
                  {generatedCVs.map((cv, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-center">
                        <img
                          className="d-block w-75"
                          src={cv.previewImage} // Assuming preview image exists
                          alt={`Generated CV ${index + 1}`}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <Carousel.Caption>
                        <h5>{cv.name}</h5>
                        <Button
                          variant="secondary"
                          href={cv.downloadLink} // Assuming this link is valid
                          target="_blank"
                        >
                          View/Download CV
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No generated CVs yet.</p>
              )}
            </Card.Body>
          </Card>

          {/* Download New CV */}
          <Button
            variant="primary"
            onClick={() => alert("Downloading your CV...")}
            className="rounded-pill"
            style={{
              backgroundColor: themeColor,
              border: "none",
              padding: "10px 30px",
            }}
          >
            Download My New CV
          </Button>
        </Col>
      </Row>

      {/* Edit Profile Section (Appears when editing) */}
      {isEditing && (
        <Row>
          <Col md={12}>
            <Card className="shadow-lg rounded-lg border-0">
              <Card.Body>
                <h4 className="text-primary" style={{ fontWeight: 600 }}>
                  Edit Profile
                </h4>
                <Form>
                  <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={newFullName || fullName}
                      onChange={(e) => setNewFullName(e.target.value)}
                      style={{ borderColor: themeColor }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="my-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={newEmail || email}
                      onChange={(e) => setNewEmail(e.target.value)}
                      style={{ borderColor: themeColor }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password (optional)</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="New password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{ borderColor: themeColor }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formProfilePic" className="my-3">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setNewProfilePic(e.target.files[0])}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    onClick={handleSaveProfile}
                    className="rounded-pill mt-3"
                    style={{
                      backgroundColor: themeColor,
                      border: "none",
                      padding: "10px 30px",
                    }}
                  >
                    Save Profile
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default UserProfile;
