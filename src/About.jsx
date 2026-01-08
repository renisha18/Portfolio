import React from "react";
import "./About.css";
import profilePic from "/Users/renishaensalaita/Desktop/portfolio/src/assets/profile.jpeg"; // ✅ correct relative path

function About() {
  return (
    <section className="about-container">
      {/* Profile Image */}
      <div className="about-image">
        <img src={profilePic} alt="Renisha Ensalaita" />
      </div>

      {/* Content */}
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
  );
}

export default About;