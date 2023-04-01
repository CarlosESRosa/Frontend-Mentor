import React from "react";

import "./Button1.css";

export default function Button({ text }) {
  return (
    <div>
      <button className="get-started-button">{text}</button>
    </div>
  );
}
