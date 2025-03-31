import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import theme hook
import "../styles/Contact.css"; 

const Contact = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <div className={`contact-container ${theme}`}>
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-details">
        <p><strong>Name:</strong> Robin Saini</p>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:robinsaini440@gmail.com">robinsaini440@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> 
          <a href="tel:+917340814631">7340814631</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
