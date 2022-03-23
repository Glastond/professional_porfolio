import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/Glastond"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/glaston-d-souza-022496167/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a
      href="https://www.instagram.com/glaston_dsouza/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
