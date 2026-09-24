import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  // Datos de la persona que se pasan por props a Header y Hero.
  const nombre = "Nahuel Fuensalida";
  const profesion = "Frontend Developer";

  return (
    <>
      <Header nombre={nombre} profesion={profesion} />
      <main>
        <Hero nombre={nombre} profesion={profesion} />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer nombre={nombre} />
    </>
  );
}

export default App;
