import React from "react";
import "../App.css";
import "../styles/ProjectCard.css";
import GlareHover from "./GlareHover";
import { useTilt } from "../hooks/useTilt";

export default function ProjectCard({ title, description, image, link }) {
  const { style, onMouseMove, onMouseLeave } = useTilt({
    max: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 400,
  });

  return (
    <div
      className="project-card"
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {image && <img src={image} alt={title} className="project-card-image" />}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {link && (
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <GlareHover
              width="auto"
              height="100%"
              background="rgba(30, 20, 40, 0.15)"
              borderRadius="0.7rem"
              borderColor="rgba(180, 0, 255, 0.22)"
              glareColor="#C084FC"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={1200}
              playOnce={false}
              className="project-card-link"
            >
              <a
                href={link}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "0.7rem",
                  whiteSpace: "nowrap",
                  height: "2.5rem",
                  lineHeight: "1.2rem",
                  display: "flex",
                  alignItems: "center"
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </GlareHover>
          </div>
        )}
      </div>
    </div>
  );
}
