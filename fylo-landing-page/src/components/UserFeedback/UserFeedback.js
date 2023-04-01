import React from "react";
import "./UserFeedback.css";

export default function UserFeedback({ feedback, img, name, office }) {
  return (
    <div className="feedback-box">
      <p>{feedback}</p>
      <div className="profile-content">
        <img src={img} alt="User profile"></img>
        <div>
          <h3>{name}</h3>
          <p>{office}</p>
        </div>
      </div>
    </div>
  );
}
