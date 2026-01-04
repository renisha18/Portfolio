import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Track Your LeetCode Buddy",
      techStack: "React.js · Node.js · Express.js · PostgreSQL · LeetCode API",
      description:
        "A productivity-focused full-stack web application designed to help users maintain consistent LeetCode practice through social accountability. Users can search and validate LeetCode profiles, send and receive streak-tracking requests, and monitor daily coding streaks with friends. The React frontend provides an interactive user experience, while the backend manages API integration, business logic, and relational data storage using PostgreSQL.",
      image: "https://hugeicons.com/api/og?uuid=leetcode-solid-standard",
    },
    {
      title: "Earthify – Environmental Awareness Platform",
      techStack: "HTML · CSS · JavaScript",
      description:
        "A web-based platform aimed at promoting environmental awareness through interactive and educational content. Built with a responsive frontend using HTML and CSS, and JavaScript for handling user interactions and dynamic updates. This project demonstrates strong fundamentals in frontend development and responsive design.",
      image:
        "https://img.freepik.com/premium-vector/green-earth-logo-with-title-earth_97365-1590.jpg",
    },
    {
      title: "Quiz Master",
      techStack: "Python · Flask · MySQL",
      description:
        "A web-based quiz application that enables administrators to create and manage quizzes while allowing students to securely attempt them. The backend is built using Flask with MySQL for data persistence, implementing core DBMS concepts such as relational schema design, authentication, data validation, and secure storage of user responses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSzBujGflFk6ZmGsJGWAogbc0eQcmNI4wuA&s",
    },
    {
      title: "ChrisMOM & ChrisCHILD – Christmas Game App",
      techStack: "EJS · Node.js · Express.js · PostgreSQL",
      description:
        "A role-based web application where an admin pre-registers users and manages secure login using authentication and session handling. The application implements backend logic for random allocation of a “Chris Child” to each user using database-driven workflows, showcasing experience with server-side rendering and relational databases.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC0q5sEvXu0UM6glV-pjesakzRd0ILNNtRw&s",
    },
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;