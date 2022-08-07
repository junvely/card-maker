import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <button
      className={`${styles.button} ${getButtonStyle(name)}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

function getButtonStyle(name) {
  switch (name) {
    case "Logout":
      return styles.logout;
    case "Delete":
      return styles.delete;
    case "Add":
      return styles.add;
    default:
      console.log(`unknown button style ${name}`);
      return;
  }
}

export default Button;
