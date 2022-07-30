import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header>
    <h2 className={styles.title}>Business Card Maker</h2>
    <img className={styles.img} src="./img/logo.png" alt="logo" />
  </header>
);

export default Header;
