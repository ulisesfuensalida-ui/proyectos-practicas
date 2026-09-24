// Componente reutilizable: recibe toda la información del proyecto
// por props, en lugar de tener el contenido "hardcodeado".
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, estado, link } = proyecto;
  const finalizado = estado === "Finalizado";

  return (
    <article className="project-card">
      <div className="project-card__encabezado">
        <h3>{titulo}</h3>

        {/* Renderizado condicional: la clase y el texto del badge
            cambian según el estado del proyecto. */}
        <span
          className={`badge ${finalizado ? "badge--ok" : "badge--progreso"}`}
        >
          {estado}
        </span>
      </div>

      <p>{descripcion}</p>

      <ul className="project-card__tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <a href={link} target="_blank" rel="noreferrer" className="boton boton--secundario">
        Ver repositorio
      </a>
    </article>
  );
}

export default ProjectCard;
