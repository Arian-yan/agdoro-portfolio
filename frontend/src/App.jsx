import Certifications from "./Certifications";
import Contact from "./Contact";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <div className="app">
      <section className="hero">
  <h1>ARIAN</h1>
  <p className="hero-role">
    Web Developer | Frontend Developer | IT Student
  </p>
  <p className="hero-subtitle">
    Portfolio powered by React, Node, Express & MySQL 🚀
  </p>
</section>

     <main>
        <ProjectsSection />
     <hr />
       <Certifications />
      <hr />
       <Contact />
</main>

    </div>
  );
}

export default App;
