import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({
  message = "Loading...",
  variant = "primary",
  size = "md",
}) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100px" }}
    >
      <Spinner
        animation="border"
        variant={variant}
        size={size === "sm" ? "sm" : undefined}
      />
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
