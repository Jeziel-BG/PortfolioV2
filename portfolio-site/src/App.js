
import './App.css';
import { Introduction } from "./components/Introduction/Introduction";
import { Projects } from './components/Projects/Projects';
import { Skills } from "./components/Skills/Skills";
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
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

  const hideNav = () => {
    const nav = document.getElementById("nav");

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("hidden");
      } else {
        nav.classList.remove("hidden");
      }

      lastScrollY = window.scrollY;
    });
  };

  window.addEventListener("scroll", hideNav);

  return (
    <div id="Main">
    
      <div className="Site-Container" onScroll={hideNav}>
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
