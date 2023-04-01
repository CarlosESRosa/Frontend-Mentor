import React from "react";
import "./GetStarted.css";

import ilustrationIntro from "../../images/illustration-intro.png";

export default function GetStarted() {
  return (
    <div className="getStarted">
      <img src={ilustrationIntro}></img>
      <h1 className="main-title">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="basic-text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="get-started-button">Get Started</button>
    </div>
  );
}
