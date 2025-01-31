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
  const [pdfUrl, setPdfUrl] = useState(null); // To store the generated PDF URL
  const [optimisedCVResponse, setOptimisedCVResponse] = useState(null);

  const userId = localStorage.getItem("userId");
  const SERVER_BASE_URL_WITHOUT_TRAILING_SLASH = "http://localhost:8000";
  const PRODUCTION_URL_WITHOUT_TRAILING_SLASH = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${PRODUCTION_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`
        );
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
        `${PRODUCTION_URL_WITHOUT_TRAILING_SLASH}/joblistings/create-new-optimised-cv/${userId}`,
        { jobListingText },
        { responseType: "blob" } // Ensure correct binary handling
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      console.log("Generated PDF Blob URL:", pdfUrl);

      setPdfUrl(pdfUrl);
      setOptimisedCVResponse({ pdfUrl });
    } catch (error) {
      console.error("Error generating CV:", error);
    } finally {
      setIsLoading(false);
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
        `${PRODUCTION_URL_WITHOUT_TRAILING_SLASH}/users/${userId}`,
        updatedUserData
      );
      setUserData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleDownloadCV = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Generated_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No CV available to download.");
    }
  };

  const handleUploadCV = async (e) => {
    const file = e.target.files[0];
    setUploadedCV(file);

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
        `${PRODUCTION_URL_WITHOUT_TRAILING_SLASH}/users/uploadCV`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        alert("CV uploaded successfully!");
        setUserData(response.data);
      } else {
        alert("Error uploading CV.");
      }
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("Error uploading CV.");
    }
  };

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
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

          <Card className="shadow-lg rounded-lg border-0 mb-4">
            <Card.Body>
              <h4 className="text-primary" style={{ fontWeight: 600 }}>
                Upload Your Existing Base CV (PDF)
              </h4>
              <Form.Group
                controlId="formBaseCV"
                style={{ display: "flex", alignItems: "center" }}
              >
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
                    <Button
                      variant="link"
                      onClick={() =>
                        document.getElementById("cvUpload").click()
                      }
                      style={{ padding: 0, margin: 0 }}
                    >
                      <small>Choose new file</small>
                    </Button>
                    <Form.Control
                      id="cvUpload"
                      type="file"
                      accept="application/pdf"
                      onChange={handleUploadCV}
                      style={{ display: "none" }}
                    />
                  </>
                )}
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
                          href={cv.downloadLink}
                          download
                        >
                          Download CV
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No generated CVs available.</p>
              )}
            </Card.Body>
          </Card>

          {/* PDF Download Button */}
          {optimisedCVResponse && (
            <Card className="shadow-lg rounded-lg border-0 mt-4">
              <Card.Body className="text-center">
                <Button
                  variant="success"
                  onClick={handleDownloadCV}
                  className="rounded-pill"
                  style={{
                    backgroundColor: "#28a745",
                    border: "none",
                    padding: "10px 30px",
                  }}
                >
                  Download My New CV
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
