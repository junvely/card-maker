import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };

  return (
    <div className={styles.loginCon}>
      <div className={styles.imgCon}>
        <img src="./img/login.png" alt="login" className={styles.img}></img>
        <span className={styles.greeting}>
          Welcome!
          <br /> Please login and get started
        </span>
      </div>
      <div className={styles.titleCon}>
        <h2 className={styles.title}>CARD MAKER</h2>
        <p className={styles.info}>Login and get started!</p>
        <div className={styles.buttons}>
          {/* 적용 */}
          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
          <button className={styles.button} onClick={onLogin}>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
