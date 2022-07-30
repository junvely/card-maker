import React from "react";
import styles from "./card-maker.module.css";

const CardMaker = ({ onLogout }) => {
  return (
    <div className={styles.sections}>
      카드메이커 화면입니다.
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default CardMaker;
