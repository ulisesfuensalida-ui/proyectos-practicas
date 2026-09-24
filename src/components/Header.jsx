// Header recibe información por props, tal como pide la consigna
// (ej: <Header nombre="Juan Pérez" profesion="Frontend Developer" />).
function Header({ nombre, profesion }) {
  return (
    <header className="header">
      <div className="header__contenido">
        <span className="header__logo">{nombre.split(" ")[0]}</span>

        <nav className="header__nav">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <span className="header__profesion">{profesion}</span>
      </div>
    </header>
  );
}

export default Header;
