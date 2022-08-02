import React from "react";
import styles from "./preview.module.css";
import Card from "./card";

const Preview = ({ userInfo }) => {
  return (
    <section className={styles.preview}>
      <h2>Card Preview</h2>
      <div className={styles.cards}>
        {userInfo.map((user) => (
          <Card user={user}></Card>
        ))}
      </div>
    </section>
  );
};

export default Preview;
