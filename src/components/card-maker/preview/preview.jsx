import React from "react";
import styles from "./preview.module.css";
import Card from "./card/card";

const Preview = ({ users }) => {
  return (
    <section className={styles.preview}>
      <h2>Card Preview</h2>
      <ul className={styles.cards}>
        {users.map((user) => (
          <Card user={user}></Card>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
