import { Button } from "../button";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Coding666Legend"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Button buttonStyle="ghost">
          <FaGithub size={30} />
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/aditya-khaire-8a0474314/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Button buttonStyle="ghost">
          <FaLinkedin size={30} />
        </Button>
      </a>
    </footer>
  );
};
