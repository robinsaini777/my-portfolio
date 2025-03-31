import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import theme hook
import "../styles/Skills.css"; 

const Skills = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <div className={`skills-container ${theme}`}>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        <div className="skill">Redux</div>
      </div>
    </div>
  );
};

export default Skills;
