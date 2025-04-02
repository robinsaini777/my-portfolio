import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; 
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
