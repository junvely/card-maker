import React, { useEffect } from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";
import { useNavigate } from "react-router-dom";
import Editor from "./editor";
import Preview from "./preview";

const CardMaker = ({ authService, userData }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.cardMakerCon}>
      <Header color={"white"}></Header>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
      <div className={styles.sections}>
        {userData && (
          <span
            className={styles.greeting}
          >{`${userData.displayName}님 환영합니다.`}</span>
        )}
        <Editor></Editor>
        <Preview></Preview>
      </div>
    </section>
  );
};

export default CardMaker;
