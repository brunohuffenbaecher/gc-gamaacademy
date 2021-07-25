import React from "react";
import imgLogo from "../assets/img/mars_logo2.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.headerDiv}>
        <a href="/">
          <img src={imgLogo} className={styles.headerLogo} alt="site logo" />
        </a>
      </div>
    </header>
  );
}
