import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import "../styles/Projects.css"; // Assure-toi d'avoir ce fichier CSS pour le style

function Projects() {
  const projects = [
    {
      title: "Mon portfolio.",
      description: "Mon portfolio personnel pour présenter mes projets.",
      image: process.env.PUBLIC_URL + "/images/portfolio.png", // image locale
      link: "#", // tu pourras changer par ton futur lien (ex: Vercel)
    },
    {
      title: "Projet 2",
      description: "Un projet bientôt disponible.",
      image: "soon", // placeholder
      link: "#",
    },
    {
      title: "Projet 3",
      description: "Encore un projet bientôt disponible.",
      image: "soon",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`project-item ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <SpotlightCard>
              {p.image === "soon" ? (
                <div className="project-soon">SOON...</div>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <img src={p.image} alt={p.title} className="project-image" />
                </a>
              )}
            </SpotlightCard>
            <div className="project-text">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
