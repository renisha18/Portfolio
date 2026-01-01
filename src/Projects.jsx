import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Track your leetcode buddy",
      description:
        "An eye-tracking based smart home system designed to help paralysed patients control home appliances independently.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LeetCode Streak Tracker",
      description:
        "A web app that allows users to search LeetCode profiles and send streak requests using React, Express, and PostgreSQL.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React with a dark theme, smooth navigation, and modular components.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Web3 Learning Project",
      description:
        "Exploring smart contracts and blockchain-based problem solving by breaking down real-world Web3 protocols.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Hackathon Management Tool",
      description:
        "A tool to organize problem statements, track submissions, and manage teams during hackathons.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="projects-container">
      <h1> Projects</h1>
      {projects.map((project, index) => (
        <div className="project-box" key={index}>
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;