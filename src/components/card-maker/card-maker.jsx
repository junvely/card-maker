import React, { useEffect } from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";
import { useNavigate } from "react-router-dom";

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
    <section className={styles.sections}>
      <Header></Header>
      {userData && <span>{`${userData.displayName}님 환영합니다.`}</span>}
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </section>
  );
};

export default CardMaker;
