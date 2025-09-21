import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "../App.css";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2 className="projects-page-title">Our Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
