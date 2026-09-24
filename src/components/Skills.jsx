import skills from "../data/skills.js";

function Skills() {
  return (
    <section id="habilidades" className="skills">
      <h2 className="titulo-seccion">Habilidades</h2>

      <div className="skills__lista">
        {skills.map((skill) => (
          <div key={skill.id} className="skill">
            <div className="skill__encabezado">
              <span>{skill.nombre}</span>
              <span>{skill.nivel}%</span>
            </div>
            <div className="skill__barra">
              <div
                className="skill__progreso"
                style={{ width: `${skill.nivel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
