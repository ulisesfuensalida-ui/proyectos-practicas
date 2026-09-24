// Array de datos: cada objeto se pasa como props a <ProjectCard />
// dentro del componente Projects.
const projects = [
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion:
      "Aplicación para organizar tareas diarias con categorías, prioridades y filtros. Pensada para practicar manejo de estado en React.",
    tecnologias: ["React", "CSS3", "LocalStorage"],
    estado: "Finalizado",
    link: "https://github.com/Ulisesfuensalida-ui/gestor-tareas",
  },
  {
    id: 2,
    titulo: "Clima Ahora",
    descripcion:
      "Consulta el clima actual de cualquier ciudad consumiendo una API pública. Incluye búsqueda y manejo de errores.",
    tecnologias: ["React", "Fetch API", "CSS3"],
    estado: "Finalizado",
    link: "https://github.com/Ulisesfuensalida-ui/clima-ahora",
  },
  {
    id: 3,
    titulo: "Blog Personal",
    descripcion:
      "Sitio de artículos cortos sobre tecnología, con listado dinámico de posts y vista de detalle.",
    tecnologias: ["React", "Vite", "React Router"],
    estado: "En desarrollo",
    link: "https://github.com/Ulisesfuensalida-ui/blog-personal",
  },
];

export default projects;
