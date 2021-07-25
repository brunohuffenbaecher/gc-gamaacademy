import React from "react";
import styles from "./footer.module.css";
import linkedinLogo from "../assets/img/linkedin_logo.png";
import githubLogo from "../assets/img/github_logo.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <div className={styles.developedBy}>
          <span>Developed by </span> <span> Bruno Huffenbaecher</span>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/brunohuffenbaecher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
          <a
            href="https://github.com/brunohuffenbaecher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="github logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
