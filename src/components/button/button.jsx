import React, { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ name }) => {
  return (
    <button className={`${styles.button} ${getButtonStyle(name)}`}>
      {name}
    </button>
  );
});

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
