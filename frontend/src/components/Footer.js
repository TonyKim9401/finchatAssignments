import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/TonyKim9401"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/ktony/"
        target="_blank"
        rel="noopener noreferrer"
        title="linkedin"
      >
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:ktony.tech@gmail.com" title="envelope">
        <FaEnvelope className="icon" />
      </a>
    </footer>
  );
};

export default Footer;
