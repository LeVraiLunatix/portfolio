import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import LightRays from "./components/LightRays/LightRays";
import PillNav from "./components/PillNav/PillNav";
import Reseaux from "./components/Reseaux/Reseaux";
import Footer from "./components/Footer/Footer"; // 👈 import Footer

function App() {
  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "Projets", href: "#projects" },
    { label: "Réseaux", href: "#reseaux" },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <LightRays />
        </div>

        <div className="hero-content">
          <h1>Lunatix.</h1>
          <p>Développeur web et python en apprentissage.</p>
        </div>
      </section>

      {/* Navigation fixée */}
      <div className="pill-nav-container">
        <PillNav items={navItems} />
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Réseaux Section */}
      <Reseaux />

      {/* Footer Section */}
      <Footer /> {/* ✅ ton petit footer chill */}
    </div>
  );
}

export default App;
