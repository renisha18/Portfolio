import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contacts</h1>

      <div className="contact-item">
        <i className="bi bi-file-earmark-text"></i>
        <a
          href="https://drive.google.com/file/d/17T6jONsOo9-5_luPj5ZijtodiX0LGEIs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <div className="contact-item">
        <i className="bi bi-github"></i>
        <a
          href="https://github.com/renisha18"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

 <div className="contact-item">
  <i className="bi bi-linkedin"></i>
  <a
    href="https://www.linkedin.com/in/renisha-ensalaita-r-47a2442a1"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>

      <div className="contact-item">
        <i className="bi bi-envelope"></i>
        <a href="mailto:rrenie2005@gmail.com">
          rrenie2005@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contacts;