import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app-container">

      <div className="nav-buttons">
        <button onClick={() => setActivePage("home")}>
          <i className="bi bi-house"></i>
        </button>

        <button onClick={() => setActivePage("about")}>
          <i className="bi bi-person"></i>
        </button>

        <button onClick={() => setActivePage("projects")}>
          <i className="bi bi-grid"></i>
        </button>

        <button onClick={() => setActivePage("contacts")}>
          <i className="bi bi-envelope"></i>
        </button>
      </div>

      <div className="page-content">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "projects" && <Projects />}
        {activePage === "contacts" && <Contacts />}
      </div>

    </div>
  );
}

export default App;