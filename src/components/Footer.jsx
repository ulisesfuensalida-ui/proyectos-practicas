function Footer({ nombre }) {
  const anioActual = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer">
      <h2 className="titulo-seccion titulo-seccion--claro">Contacto</h2>

      <p>¿Querés charlar sobre algún proyecto? Escribime.</p>

      <div className="footer__links">
        <a href="mailto:lucia.fernandez@example.com">Email</a>
        <a href="https://github.com/lucia-fernandez" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/lucia-fernandez" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="footer__copy">
        © {anioActual} {nombre}. Hecho con React + Vite.
      </p>
    </footer>
  );
}

export default Footer;
