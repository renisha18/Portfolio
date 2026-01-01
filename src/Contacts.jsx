import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contacts</h1>

      <div className="contact-item">
        <i className="bi bi-file-earmark-text"></i>
        <a
          href="https://your-resume-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <div className="contact-item">
        <i className="bi bi-github"></i>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="contact-item">
        <i className="bi bi-linkedin"></i>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="contact-item">
        <i className="bi bi-envelope"></i>
        <a href="mailto:yourmail@gmail.com">
          yourmail@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contacts;