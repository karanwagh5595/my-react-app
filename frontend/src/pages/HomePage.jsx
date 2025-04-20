import React, { useState } from 'react';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container text-center mt-5">
      <h1>🏠 Welcome to Home Page</h1>
      <button className="btn btn-primary mt-3" onClick={handleShowPopup}>
        Show Popup
      </button>

      {/* 🔽 Popup Box */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>Hello! 👋 This is a popup message.</h4>
            <button className="btn btn-danger mt-2" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
