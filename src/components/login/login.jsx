import React from "react";
import styles from "./login.module.css";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = (props) => {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signin
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <button className={styles.button} onClick={handleGoogleLogin}>
            Goggle 로그인
          </button>
          {userData ? userData.displayName : null}
          <button className={styles.button}>Face Book 로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
