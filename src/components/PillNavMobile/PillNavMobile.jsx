import React from "react";
import "./PillNavMobile.css";

const PillNavMobile = () => {
  return (
    <nav className="mobile-pill-nav">
      <a href="#hero" className="mobile-pill">Accueil</a>
      <a href="#projects" className="mobile-pill">Projets</a>
      <a href="#reseaux" className="mobile-pill">Réseaux</a>
    </nav>
  );
};

export default PillNavMobile;
