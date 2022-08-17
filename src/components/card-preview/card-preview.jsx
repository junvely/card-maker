import React from "react";
import styles from "./card-preview.module.css";
import Card from "../card/card";

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2>Card Preview</h2>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} {...cards[key]}></Card>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
