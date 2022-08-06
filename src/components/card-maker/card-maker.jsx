import React, { useEffect, useState } from "react";
import styles from "./card-maker.module.css";
import Header from "../../common/header/header";
import { useNavigate } from "react-router-dom";
import Maker from "./maker/maker";
import Preview from "./preview/preview";

const CardMaker = ({ authService, userData }) => {
  const [userInfo, setUserInfo] = useState([
    {
      id: "1",
      name: "Lee Jun Young",
      company: "Junyoung Company",
      job: "freelancer",
      email: "junvely97@gmail.com",
      message: "hello I'm Junyoung:)",
      fileURL: null,
    },
    {
      id: "2",
      name: "Son kwan sik",
      company: "Samsung Electronicsdfds",
      job: "Software Engineer",
      email: "kwansik97@gmail.com",
      message: "hello I'm kwansik:)",
      fileURL: null,
    },
    {},
  ]);

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
        <Maker users={userInfo}></Maker>
        <Preview users={userInfo.filter((user) => user.name)}></Preview>
      </div>
    </section>
  );
};

export default CardMaker;
