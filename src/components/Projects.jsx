import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <h2 className="titulo-seccion">Proyectos</h2>

      <div className="projects__grid">
        {projects.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
