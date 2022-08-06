import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/img/default_logo.png";
const Card = ({ user }) => {
  const { name, company, job, email, message, fileURL, theme } = user;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${bgChange(theme)}`}>
      <div className={styles.userImgCon}>
        <img src={url} alt="userImg" />
      </div>
      <div className={styles.userInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function bgChange(theme) {
  switch (theme) {
    case "purple":
      return styles.purple;
    case "pink":
      return styles.pink;
    case "blue":
      return styles.blue;
    case "dark":
      return styles.dark;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
