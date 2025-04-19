// Entry.jsx
import React, { useState } from "react";
import App from "./App";

const Entry = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <>
      {!showApp ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>Welcome to My Portfolio</h1>
          <button
            onClick={() => setShowApp(true)}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View My Portfolio
          </button>
        </div>
      ) : (
        <App />
      )}
    </>
  );
};

export default Entry;
