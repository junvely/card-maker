import React from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";

const CardMaker = ({ authService, userData, resetUserData }) => {
  return (
    <section className={styles.sections}>
      <Header></Header>
      {userData && <span>{`${userData.displayName}님 환영합니다.`}</span>}
      <button
        className={styles.logout}
        onClick={() => {
          authService.logout();
          resetUserData();
        }}
      >
        Logout
      </button>
    </section>
  );
};

export default CardMaker;
