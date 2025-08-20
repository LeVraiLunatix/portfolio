import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import LightRays from "./components/LightRays/LightRays";
import PillNav from "./components/PillNav/PillNav";
import PillNavMobile from "./components/PillNavMobile/PillNavMobile"; // 👈 ajout mobile
import Reseaux from "./components/Reseaux/Reseaux";
import Footer from "./components/Footer/Footer";

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

      {/* Navigation fixée desktop */}
      <div className="pill-nav-container">
        <PillNav items={navItems} />
      </div>

      {/* Navigation mobile */}
      <PillNavMobile /> {/* 👈 barre flottante en bas */}

      {/* Projects Section */}
      <Projects />

      {/* Réseaux Section */}
      <Reseaux />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
