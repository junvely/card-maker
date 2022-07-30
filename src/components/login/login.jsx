import React from "react";
import styles from "./login.module.css";
import Header from "../../common/header/header";

const Login = ({ authService, getUserData }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.id)
      .then((data) => getUserData(data.user));
  };

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
