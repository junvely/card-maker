import React from "react";
import styles from "./maker.module.css";
import Editor from "./editor";

const Maker = ({ userInfo }) => {
  return (
    <section className={styles.maker}>
      <h2>Card Maker</h2>
      <div className={styles.cards}>
        {userInfo.map((user) => (
          <Editor user={user}></Editor>
        ))}
      </div>
    </section>
  );
};

export default Maker;
