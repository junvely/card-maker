import React from "react";
import styles from "./maker.module.css";
import Editor from "./editor/editor";

const Maker = ({ users }) => {
  return (
    <section className={styles.maker}>
      <h2>Card Maker</h2>
      <ul className={styles.cards}>
        {users.map((user) => (
          <Editor user={user}></Editor>
        ))}
      </ul>
    </section>
  );
};

export default Maker;
