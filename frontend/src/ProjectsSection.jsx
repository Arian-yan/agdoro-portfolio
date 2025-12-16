import { useEffect, useState } from "react";
import { fetchProjects } from "./api";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
