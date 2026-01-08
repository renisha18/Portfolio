import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Track Your LeetCode Buddy",
      techStack: "React.js · Node.js · Express.js · PostgreSQL · LeetCode API",
      description:
        "A productivity-focused full-stack web application designed to help users maintain consistent LeetCode practice through social accountability.",
      image: "https://hugeicons.com/api/og?uuid=leetcode-solid-standard",
      githubLink: "https://github.com/renisha18/TrackYourLeetcodeBuddy",
      demoLink: "https://your-demo-link.com",
    },
    {
      title: "Earthify – Environmental Awareness Platform",
      techStack: "HTML · CSS · JavaScript",
      description:
        "A web-based platform aimed at promoting environmental awareness through interactive and educational content.",
      image:
        "https://img.freepik.com/premium-vector/green-earth-logo-with-title-earth_97365-1590.jpg",
      githubLink: "https://github.com/renisha18/Earthify",
      demoLink: "https://your-demo-link.com",
    },
    {
      title: "Quiz Master",
      techStack: "Python · Flask · MySQL",
      description:
        "A web-based quiz application that enables administrators to create and manage quizzes while allowing students to securely attempt them.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSzBujGflFk6ZmGsJGWAogbc0eQcmNI4wuA&s",
      githubLink: "https://github.com/renisha18/QuizMaster",
      demoLink: "https://your-demo-link.com",
    },
    {
      title: "ChrisMOM & ChrisCHILD – Christmas Game App",
      techStack: "EJS · Node.js · Express.js · PostgreSQL",
      description:
        "A role-based web application implementing secure login and random user allocation using backend logic.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC0q5sEvXu0UM6glV-pjesakzRd0ILNNtRw&s",
      githubLink: "https://github.com/renisha18/ChrisMOM-ChrisCHILD",
      demoLink: "https://your-demo-link.com",
    },
    {
      title: "Smart Hovercraft (IoT-Based Control System)",
      techStack: "Arduino · ESP Microcontroller · Blynk IoT · Embedded C · Motor Drivers · PWM Speed Control · Wireless Communication",
      description:
        "A role-based web application implementing secure login and random user allocation using backend logic.",
      image:
        "https://ae01.alicdn.com/kf/Sfa8fe82e781d437e98ebbe9b62c308b7J/Amphibious-Remote-Control-Hovercraft-RC-Ship-Model-DIY-Handmade-Wind-Powered-Ship-Model-Toy-Finished-Product.jpg"
    }   
  ];

  return (
    <div className="projects-container">
  <h1>Projects</h1>

  {projects.map((project, index) => (
    <div className="project-box" key={index}>
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h2>{project.title}</h2>
        <p className="tech-stack">{project.techStack}</p>
        <p>{project.description}</p>

        <div className="project-buttons">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
  );
}

export default Projects;