import React from "react";

export default function Hero() {
  return React.createElement(
    "section",
    {
      id: "home",
      className:
        "flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pt-20",
    },
    [
      React.createElement("img", {
        key: "avatar",
        src: "https://i.pravatar.cc/200",
        alt: "Lunatix",
        className: "w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6",
      }),
      React.createElement(
        "h1",
        { key: "title", className: "text-5xl font-bold mb-4" },
        "Salut, moi c'est Lunatix 👋"
      ),
      React.createElement(
        "p",
        { key: "subtitle", className: "text-lg mb-6" },
        "Développeur en herbe 🌱 | Passionné de code 💻"
      ),
      React.createElement(
        "a",
        {
          key: "btn",
          href: "#projects",
          className:
            "px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition",
        },
        "Voir mes projets"
      ),
    ]
  );
}
