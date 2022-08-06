import React from "react";
import styles from "./header.module.css";

const Header = ({ color }) => {
  const colorChange = color === "white" && styles.colorWhite;

  return (
    <header>
      <h1 className={`${styles.title} ${colorChange}`}>Business Card Maker</h1>
      <img className={styles.img} src="./img/logo.png" alt="logo" />
    </header>
  );
};

export default Header;
