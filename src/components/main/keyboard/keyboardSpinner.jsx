import React from "react";

const KeyboardSpinner = () => {
  return (
    <div
      className="position-absolute d-flex justify-content-center align-items-center"
      style={{
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(100, 100, 100, 0.1)",
      }}
    >
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default KeyboardSpinner;
