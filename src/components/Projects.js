import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Projects.css";

const Projects = () => {
  const { theme } = useTheme();

  const projectList = [
    {
      title: "E-commerce Website",
      description: "A Flipkart-like online store with React & Redux.",
      url: "https://robinsaini777.github.io/shopping-clone/",
    },
    {
      title: "Task Management",
      description: "A to-do list with advanced task management features.",
      url: "https://robinsaini777.github.io/to-do-list/",
    },
    {
      title: "Weather App",
      description: "A real-time weather application that provides live weather updates, animated weather icons, and a beautiful user interface with dark & light mode.",
      url: "https://robinsaini777.github.io/weather-app/",
    },
    {
      title: "Quiz App Project",
      description: "An interactive quiz application built with React, featuring multiple categories, score tracking, and a clean, modern UI.",      
      url: "https://robinsaini777.github.io/quiz-project/",
    }
  ];

  return (
    <div className={`projects-container ${theme}`}>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => window.open(project.url, "_blank")} // Box clickable
            style={{ cursor: "pointer" }}
          >
            <h3 style={{ color: "blue", textDecoration: "underline" }}>
              {project.title}
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

