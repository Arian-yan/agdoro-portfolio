import React from "react";

const projects = [
  {
    id: 1,
    title: "Agdoro Portfolio",
    description: "My personal portfolio website",
    live_url: "https://agdoro-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "Sample Project",
    description: "Student Homepage",
    live_url: "https://pf2arianswebsitedashboard.netlify.app/",
  },
];

function ProjectsSection() {
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
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => window.open(project.live_url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="view-project">
                View Project →
              </span>
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
      {[1, 2, 3].map((i) => (
        <div className="project-card skeleton" key={i}>
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-link"></div>
        </div>
      ))}
    </>
  );
}

export default ProjectsSection;
