import React from "react";
import "./CookieConsent.css";

function CookieConsent({ onChoice }) {
  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your shopping experience on RedWolf Infotech. Accept to continue exploring our LED TVs and Speakers.
      </p>
      <div className="cookie-buttons">
        <button onClick={() => onChoice(true)} className="accept-btn">
          Accept
        </button>
        <button onClick={() => onChoice(false)} className="reject-btn">
          Reject
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
