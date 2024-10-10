import React from "react";
import "./Section.css";

const Section = ({ imageSrc, title, description }) => {
  return (
    <div className="section">
      <img src={imageSrc} alt={title} className="section-image" />
      <div className="section-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
