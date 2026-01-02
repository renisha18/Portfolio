import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Track your leetcode buddy",
      description:
        "TrackYourLeetCodeBuddy is a full-stack web application built using React, Node.js, Express, and PostgreSQL with the goal of improving consistency in coding practice through social accountability. Instead of focusing only on individual progress, the project is designed around the idea that people stay more motivated when they track progress together. The application allows users to search LeetCode profiles, send and receive streak-tracking requests, and maintain consistency through mutual accountability. The frontend handles user interactions and dynamic UI updates, while the backend manages API communication, data fetching, and relational storage of users and streak relationships. This project reflects my approach to solving real-world problems by combining technical implementation with thoughtful product design.",
      image: "leetcodelogo",
    },
    {
      title: "Earthify - Educational and Sustainable tech",
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
      title: "ChrisMOM & ChrisCHILD - Christmas game app",
      description:
        "Exploring smart contracts and blockchain-based problem solving by breaking down real-world Web3 protocols.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Smart Hovercraft",
      description:
        "A tool to organize problem statements, track submissions, and manage teams during hackathons.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "",
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