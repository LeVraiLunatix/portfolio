import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Reseaux.css";

const Reseaux = () => {
  return (
    <section id="reseaux" className="reseaux-section">
      <h2>Mes Réseaux</h2>

      <div className="reseaux-cards">
        {/* GitHub */}
        <div className="reseaux-card-wrapper left">
          <ProfileCard
            avatarUrl="https://imgs.search.brave.com/9_HaYEZyyei6PksT55xRrK2LcYXbxV8cYDzco8gQgNI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvR2l0/aHViLUxvZ28tUE5H/LnBuZw"
            miniAvatarUrl="https://pbs.twimg.com/profile_images/1957953263145267200/EqAs5yuH_400x400.jpg"
            name="GitHub"
            title="Développeur web et Python."
            handle="levrailunatix"
            status="Mon profil GitHub."
            contactText="Voir le profil"
            onContactClick={() =>
              window.open("https://github.com/levrailunatix", "_blank")
            }
          />
        </div>

        {/* Twitter */}
        <div className="reseaux-card-wrapper right">
          <ProfileCard
            avatarUrl="https://imgs.search.brave.com/SVU7mbXUEP_4iNDP03w-W3ofP5sV6cv1HVOu2Z-5ZE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/NGJlNjBkNzIxMTJi/ZGZjYTY5YTAxZjAu/cG5n"
            miniAvatarUrl="https://pbs.twimg.com/profile_images/1957953263145267200/EqAs5yuH_400x400.jpg"
            name="X"
            title="Pour savoir en temps réel ce que je fais."
            handle="_levrailunatix_"
            status="Mon profil X."
            contactText="Voir le profil"
            onContactClick={() =>
              window.open("https://twitter.com/_levrailunatix_", "_blank")
            }
          />
        </div>

        {/* TikTok */}
        <div className="reseaux-card-wrapper left">
          <ProfileCard
            avatarUrl="https://imgs.search.brave.com/_zadpW5MWcpauOUpgBg0J75ewXrpmpttJ3kXOWxDQjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/Y2I3ODY1YmE3Yzc3/NTViZjAwNGMxNDku/cG5n"
            miniAvatarUrl="https://pbs.twimg.com/profile_images/1957953263145267200/EqAs5yuH_400x400.jpg"
            name="TikTok"
            title="Pour suivre mes vidéos et mes projets."
            handle="levrailunatix"
            status="Mon profil TikTok."
            contactText="Voir le profil"
            onContactClick={() =>
              window.open("https://www.tiktok.com/@levrailunatix", "_blank")
            }
          />
        </div>

        {/* Instagram */}
        <div className="reseaux-card-wrapper right">
          <ProfileCard
            avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png"
            miniAvatarUrl="https://pbs.twimg.com/profile_images/1957953263145267200/EqAs5yuH_400x400.jpg"
            name="Instagram"
            title="Pour me contacter."
            handle="levrailunatix"
            status="Mon profil Instagram."
            contactText="Voir le profil"
            onContactClick={() =>
              window.open("https://www.instagram.com/levrailunatix/", "_blank")
            }
          />
        </div>

        {/* YouTube */}
        <div className="reseaux-card-wrapper left">
          <ProfileCard
            avatarUrl="https://imgs.search.brave.com/51sueN5kAnrzEi0LIJVUTr_DPtc383FF6MHQijf6Iw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE4Lzkz/MC81NzIvbm9uXzJ4/L3lvdXR1YmUtbG9n/by15b3V0dWJlLWlj/b24tdHJhbnNwYXJl/bnQtZnJlZS1wbmcu/cG5n"
            miniAvatarUrl="https://pbs.twimg.com/profile_images/1957953263145267200/EqAs5yuH_400x400.jpg"
            name="YouTube"
            title="Pour suivre mes vidéos."
            handle="LeVraiLunatix"
            status="Ma chaîne YouTube."
            contactText="Voir le profil"
            onContactClick={() =>
              window.open("https://www.youtube.com/@LeVraiLunatix", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Reseaux;
