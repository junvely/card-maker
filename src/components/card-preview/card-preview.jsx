import React from "react";
import styles from "./card-preview.module.css";
import Card from "../card/card";

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2>Card Preview</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
