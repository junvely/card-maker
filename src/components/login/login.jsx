import React, { useEffect } from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const Login = ({ authService, getUserData }) => {
  const navigate = useNavigate();
  const gotoMaker = (userId) => {
    navigate({
      pathname: "/card-maker",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.id)
      .then((data) => {
        getUserData(data.user);
        gotoMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && gotoMaker(user.uid); // 콜백자체를 인자로 전달
    });
  });

  return (
    <div className={styles.loginBg}>
      <section className={styles.login}>
        <div className={styles.imgCon}>
          <img src="./img/login.png" alt="login" className={styles.img}></img>
          <span className={styles.greeting}>
            Welcome!
            <br /> Please login and get started
          </span>
        </div>
        <div className={styles.titleCon}>
          <Header></Header>
          <p className={styles.info}>Login and get started!</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onLogin} id="Google">
              Google 로그인
            </button>
            <button className={styles.button} onClick={onLogin} id="GitHub">
              GitHub 로그인
            </button>
            <button className={styles.button} onClick={onLogin} id="faceBook">
              faceBook 로그인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
