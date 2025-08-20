import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with <span className="heart">❤️</span> by <strong>Lunatix</strong>
      </p>
      <small className="credits">
        Source de certains components :{" "}
        <a
          href="https://www.reactbits.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactBits
        </a>
      </small>
    </footer>
  );
};

export default Footer;
