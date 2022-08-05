import React from "react";
import styles from "./card.module.css";

const Card = ({ user }) => {
  return (
    <section className={`${styles.card} ${styles.bgPurple}`}>
      <div className={styles.imgCon}>
        <img src="./img/login.png" alt="user" />
      </div>
      <div className={styles.userInfo}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.company}>{user.company}</p>
        <hr></hr>
        <p className={styles.job}>{user.job}</p>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.memo}>{user.memo}</p>
      </div>
    </section>
  );
};

export default Card;
