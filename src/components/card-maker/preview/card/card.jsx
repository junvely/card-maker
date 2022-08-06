import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/img/default_logo.png";
const Card = ({ user }) => {
  const { name, company, job, email, message, fileURL } = user;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${styles.bgPurple}`}>
      <div className={styles.userImgCon}>
        <img src={url} alt="userImg" />
      </div>
      <div className={styles.userInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <hr></hr>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default Card;
