import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import theme hook
import "../styles/Home.css"; 
import profileImage from "../assets/mine.jpg"; 

const Home = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <div className={`home-container ${theme}`}>
      {/* Hero Section */}
      <div className="hero">
        <h1>Hi, I'm <span>Robin Saini</span> <span className="wave">👋</span></h1>
        <p>A passionate Web Developer skilled in React.js, JavaScript, and CSS.</p>
        <div className="hero-buttons">
          <a href="/my-portfolio/#/projects" className="btn primary-btn">View Projects</a>
          <a href="/my-portfolio/#/contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>

      {/* About Section */}
      <div className={`about ${theme}`}>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a frontend developer with experience in creating dynamic and
            responsive websites using React.js. I love building user-friendly
            applications with clean UI and great UX.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;

