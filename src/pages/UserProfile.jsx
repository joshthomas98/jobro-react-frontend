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
import LoadingSpinner from "../components/LoadingSpinner";

const themeColor = "#2D88FF"; // Primary CvTailor color
const defaultProfilePic =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"; // Default blank person icon URL

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [jobListingText, setJobListingText] = useState("");
  const [generatedCVs, setGeneratedCVs] = useState([]);
  const [uploadedCV, setUploadedCV] = useState(null);
  const [optimisedCVText, setOptimisedCVText] = useState("");

  const userId = localStorage.getItem("userId");
  const SERVER_BASE_URL_WITHOUT_TRAILING_SLASH = "http://localhost:8000";
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleGenerateOptimisedCV = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/joblistings/create-new-optimised-cv/${userId}`,
        { jobListingText }
      );
      console.log("Optimised CV back from AI:", response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadCV = async (e) => {
    const file = e.target.files[0];
    setUploadedCV(file);

    console.log(file.name);

    if (!file) {
      alert("No file selected!");
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("cvFile", file);
    formData.append("userId", userId);

    try {
      const response = await axios.post(
        `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/users/uploadCV`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("CV uploaded successfully!");
        // Update user data after successful upload
        setUserData(response.data); // Assuming response.data includes the updated user info
      } else {
        alert("Error uploading CV.");
      }
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("Error uploading CV.");
    }
  };

  const handleSaveProfile = async () => {
    try {
      const updatedUserData = {
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
        profilePic: userData.profilePic,
        uploadedCV: uploadedCV,
      };
      const response = await axios.put(
        `${SERVER_BASE_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`,
        updatedUserData
      );
      setUserData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {/* Profile Header */}
      <Row className="my-5">
        <Col md={4}>
          <Card className="shadow-lg rounded-lg border-0">
            <Card.Body className="text-center">
              <Image
                src={userData.profilePic || defaultProfilePic}
                roundedCircle
                fluid
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
                alt="Profile Picture"
              />
              <h3 className="mt-3 text-primary" style={{ fontWeight: 600 }}>
                {userData.fullName}
              </h3>
              <p className="text-muted">{userData.email}</p>
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
                  placeholder="Paste the full job listing text here. Don't worry about formatting, we'll take care of that!"
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
                onClick={handleGenerateOptimisedCV}
                className="rounded-pill mt-3"
                style={{
                  backgroundColor: themeColor,
                  border: "none",
                  padding: "10px 30px",
                }}
              >
                Generate My Optimised CV
              </Button>
            </Card.Body>
          </Card>

          {/* Upload CV Section */}
          <Card className="shadow-lg rounded-lg border-0 mb-4">
            <Card.Body>
              <h4 className="text-primary" style={{ fontWeight: 600 }}>
                Upload Your Existing Base CV (PDF)
              </h4>
              <Form.Group
                controlId="formBaseCV"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* Conditionally render the file input or "Choose new file" button */}
                {!userData.baseCV || !userData.baseCV.fileUrl ? (
                  <Form.Control
                    type="file"
                    accept="application/pdf"
                    onChange={handleUploadCV}
                    style={{
                      borderColor: themeColor,
                      display: "inline-block",
                    }}
                  />
                ) : (
                  <>
                    {/* "Choose new file" button */}
                    <Button
                      variant="link"
                      onClick={() =>
                        document.getElementById("cvUpload").click()
                      }
                      style={{ padding: 0, margin: 0 }}
                    >
                      <small>Choose new file</small>
                    </Button>
                    {/* Hidden file input for file selection */}
                    <Form.Control
                      id="cvUpload"
                      type="file"
                      accept="application/pdf"
                      onChange={handleUploadCV}
                      style={{ display: "none" }}
                    />
                  </>
                )}
                {/* Display the uploaded file name inline */}
                {userData.baseCV && userData.baseCV.fileUrl && (
                  <small className="ml-2">
                    <strong className="mx-2">
                      {userData.baseCV.fileUrl.split("/").pop()}
                    </strong>
                  </small>
                )}
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

          <p className="text-dark">{optimisedCVText}</p>

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
            <Card className="shadow-lg rounded-lg border-0 mb-5">
              <Card.Body>
                <h4 className="text-primary" style={{ fontWeight: 600 }}>
                  Edit Profile
                </h4>
                <Form>
                  <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      value={userData.fullName || ""}
                      onChange={(e) =>
                        setUserData({ ...userData, fullName: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={userData.email || ""}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={userData.password || ""}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
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
                    Save Changes
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
