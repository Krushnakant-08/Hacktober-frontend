import React from "react";
import "../App.css";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-card-image" />}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {link && (
          <a
            href={link}
            className="project-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
