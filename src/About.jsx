import React from "react";
import "./About.css";
import profilePic from "./assets/profile.jpeg"; 

function About() {
  return (
    <div>
    <section className="about-container">
      {/* Profile Image */}
      <div className="about-image">
        <img src={profilePic} alt="Renisha Ensalaita" />
      </div>

      {/* Content */}
      {/* Skills Section */}

      <div className="about-content">
        
        <h1>About Me</h1>

        <p>
          Hi, I’m Renisha Ensalaita, a motivated third-year Information Technology
          student with a strong passion for full-stack development, UI/UX design,
          and building meaningful technology-driven solutions.
        </p>

        <p>
          I have hands-on experience developing reliable full-stack applications
          using modern web technologies like React, Node.js, Express, and
          relational databases.
        </p>

        <p>
          Beyond web development, I actively explore data science and Web3
          technologies to broaden my technical perspective.
        </p>

        <p>
          I’ve worked on diverse projects ranging from React-based applications
          using APIs to IoT and embedded systems projects.
        </p>

        <p>
          Outside of academics and coding, I enjoy chess, dance, and the arts.
        </p>
     
      </div>
      
    </section>
     {/* Skills Section */}
<div className="skills-section">
  <h2>Technical Skills</h2>

  <div className="skills-group">
    <h4>Programming Languages</h4>
    <div className="skills-row">
      <span className="skill-box">Python</span>
      <span className="skill-box">JavaScript</span>
    </div>
  </div>

  <div className="skills-group">
    <h4>Web Development</h4>
    <div className="skills-row">
      <span className="skill-box">HTML</span>
      <span className="skill-box">CSS</span>
      <span className="skill-box">React.js</span>
      <span className="skill-box">Node.js</span>
      <span className="skill-box">Express.js</span>
      <span className="skill-box">EJS</span>
      <span className="skill-box">REST APIs</span>
    </div>
  </div>

  <div className="skills-group">
    <h4>Databases</h4>
    <div className="skills-row">
      <span className="skill-box">MySQL</span>
      <span className="skill-box">PostgreSQL</span>
    </div>
  </div>

  <div className="skills-group">
    <h4>IoT & Embedded Systems</h4>
    <div className="skills-row">
      <span className="skill-box">ESP32</span>
      <span className="skill-box">Arduino IDE</span>
    </div>
  </div>

  <h2 className="non-tech-title">Non-Technical Skills</h2>

  <div className="skills-row">
    <span className="skill-box">Figma</span>
    <span className="skill-box">Canva</span>
  </div>
</div>
</div>
  );
}

export default About;