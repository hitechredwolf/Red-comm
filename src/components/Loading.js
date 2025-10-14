import React from "react";
import "./Loading.css";
import logo from "./images/redwolflogo.png"; // replace with your company logo path

function Loading() {
  return (
    <div className="loading-container">
      <img src={logo} alt="Company Logo" className="loading-logo" />
      <h2 className="loading-text">Welcome To Red Wolf</h2>
    </div>
  );
}

export default Loading;
