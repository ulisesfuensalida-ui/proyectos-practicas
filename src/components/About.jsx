import { useState } from "react";

function About() {
  // Estado que controla si se muestra el texto extendido o no.
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="sobre-mi" className="about">
      <h2 className="titulo-seccion">Sobre mí</h2>

      <p>
        Me gusta resolver problemas con código y aprender cómo funcionan las
        cosas por dentro. Empecé a programar en la facultad y desde entonces
        no paré de construir pequeños proyectos para practicar.
      </p>

      {/* Renderizado condicional: este bloque solo aparece si mostrarMas es true */}
      {mostrarMas && (
        <p className="about__extra">
          Me interesa especialmente el desarrollo frontend: la parte visual e
          interactiva de las aplicaciones. A futuro me gustaría seguir
          profundizando en React y sumar herramientas como TypeScript y
          testing. Fuera de la programación, disfruto el diseño y la
          fotografía, dos cosas que me ayudan a pensar mejor la parte visual
          de mis proyectos.
        </p>
      )}

      <button
        className="boton boton--texto"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? "Ver menos ▲" : "Ver más ▼"}
      </button>
    </section>
  );
}

export default About;
