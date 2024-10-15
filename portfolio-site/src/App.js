
import './App.css';
import { Introduction } from "./components/Introduction/Introduction.jsx";
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Skills } from "./components/Skills/Skills.jsx";
import React, { useState } from "react";
import { useRef } from "react";



function App() {
  const introduction = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="Main">
    
      <div className="Site-Container">
        <ul id="nav" className="navbar">
          <li className="introduction">
            <button className='NavButton' onClick={() => scrollToSection(introduction)}> Introduction </button>
          </li>
    
          <li className="projects">
            <button className='NavButton' onClick={() => scrollToSection(projects)}> Projects </button>
          </li>

          <li className="skills">
            <button className='NavButton' onClick={() => scrollToSection(skills)}> Skills </button>
          </li>
          
          <li className="contact">
            <button className='NavButton' onClick={() => scrollToSection(contact)}> Contact </button>
          </li>
        </ul>

        <div ref={introduction} className="introduction-section">
          <Introduction />
        </div>

        <div ref={projects} className="project-section">
          <Projects />
        </div>

        <div ref={skills} className="skills-section">
          <Skills />
        </div>

        <div ref={contact} className="contact-section">
          <Contact />
        </div>
      </div>

      
    </div>
   
  );
}

export default App;
