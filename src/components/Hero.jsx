function Hero({ nombre, profesion }) {
  return (
    <section className="hero">
      <div className="hero__texto">
        <p className="hero__saludo">¡Hola! Soy</p>
        <h1 className="hero__nombre">{nombre}</h1>
        <h2 className="hero__profesion">{profesion}</h2>
        <p className="hero__descripcion">
          Estudiante de Ingeniería en Sistemas de Información (UTN FRT), en
          proceso de aprender React construyendo proyectos como este.
        </p>

        <div className="hero__botones">
          <a href="#proyectos" className="boton boton--primario">
            Ver proyectos
          </a>
          <a href="#contacto" className="boton boton--secundario">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
