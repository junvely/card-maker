import React, { useEffect, useState } from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";
import { useNavigate } from "react-router-dom";
import Maker from "./maker/maker";
import Preview from "./preview/preview";

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

  const [userInfo, setUserInfo] = useState([
    {
      name: "Lee Jun Young",
      company: "Junyoung Company",
      job: "freelancer",
      email: "junvely97@gmail.com",
      memo: "hello I'm Junyoung:)",
    },
    {
      name: "Son kwan sik",
      company: "Samsung Electronicsdfds",
      job: "Software Engineer",
      email: "kwansik97@gmail.com",
      memo: "hello I'm kwansik:)",
    },
    {},
  ]);

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
        <Maker userInfo={userInfo}></Maker>
        <Preview userInfo={userInfo.filter((user) => user.name)}></Preview>
      </div>
    </section>
  );
};

export default CardMaker;
