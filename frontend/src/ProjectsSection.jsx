import React from "react";

function ProjectsSection() {
const projects = [
  {
    id: 1,
    title: "Agdoro Portfolio",
    description: "My personal portfolio built with React and Vite.",
    live_url: "https://agdoro-portfolio.vercel.app",
    github_url: "https://github.com/Arian-yan/agdoro-portfolio"
  },
  {
    id: 2,
    title: "Student Projects",
    description: "Various frontend and backend projects.",
    live_url: "https://github.com/Arian-yan",
    github_url: "https://github.com/Arian-yan"
  }
];

const loading = false;


  return (
    <section className="projects">
  <div className="projects-header">
  <h2 className="projects-title">Projects</h2>

  <div className="projects-underline-wrapper">
    <span className="line line-main"></span>
    <span className="line line-sub"></span>
  </div>
</div>


      {loading ? (
  <SkeletonProjects />
) : (
  <div className="projects-grid">
    {projects.map(project => (
      <div className="project-card" key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-tech">{project.tech}</p>
        <a href={project.project_link} target="_blank" rel="noreferrer">
          View Project 
        </a>
      </div>
    ))}
  </div>
)}

    </section>
  );
}

function SkeletonProjects() {
  return (
    <>
      <div className="project-card skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-link"></div>
      </div>

      <div className="project-card skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-link"></div>
      </div>

      <div className="project-card skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-link"></div>
      </div>
    </>
  );
}

export default ProjectsSection;
