import React from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";

const CardMaker = ({ onLogout }) => {
  return (
    <section className={styles.sections}>
      <Header></Header>
      카드메이커 화면입니다.
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </section>
  );
};

export default CardMaker;
