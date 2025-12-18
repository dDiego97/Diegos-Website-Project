import React from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";

function ProjectList() {
  const projects = [
    {
      title: "Weather App",
      description: "Uses an external weather API to display real-time weather.",
      link: "/weather-app",
    },
    {
      title: "SQL Database Demo",
      description: "Project showing SQL integration with a backend API.",
      link: "/sql-project",
    },
  ];

  return (
    <div className="project-list">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <Link to={project.link} key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
