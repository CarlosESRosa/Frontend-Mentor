import React from "react";
import logo from "../../images/logo.svg";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <img src={logo}></img>
        </li>
        <div>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </div>
      </ul>
    </div>
  );
}
