import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header>
      <h1 className={`${styles.title}`}>Business Card Maker</h1>
      {onLogout && <Button name={"Logout"} onClick={onLogout}></Button>}
    </header>
  );
};

export default Header;
