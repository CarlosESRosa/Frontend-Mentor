import React from "react";

import "./Attribute.css";

export default function Attribute({ img, alt, title, text }) {
  return (
    <div>
      <img src={img} alt={alt}></img>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
