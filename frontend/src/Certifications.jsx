import React from "react";

export default function Certifications() {
  return (
    <section className="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-underline"></div>

      <p className="certifications-note">
        This section highlights verified, live project deployments as proof of
        practical frontend development skills.
      </p>

      <ul className="certifications-list">
        <li>
          <a
            href="https://arianprojects.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Guessing Game (Live Project) →
          </a>
        </li>
        <li>
          <a
            href="https://pf2arianswebsitedashboard.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Student Homepage Dashboard →
          </a>
        </li>
        <li>
          <a
            href="https://canvasyanyan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Interactive Canvas Shape Editor →
          </a>
        </li>
      </ul>

      <p className="certifications-instructor">
        <strong>Instructor’s Note:</strong>  
        The projects above serve as project-based validation of skills in React,
        JavaScript, and frontend development. Each link directs to a fully
        deployed application demonstrating real-world implementation.
      </p>
    </section>
  );
}
