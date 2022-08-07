import React from "react";
import styles from "./maker.module.css";
import Editor from "./editor/editor";
import AddForm from "./editor/add-form/add-form";

const Maker = ({ cards, onAddForm }) => {
  return (
    <section className={styles.maker}>
      <h2>Card Maker</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Editor card={card} key={card.id}></Editor>
        ))}
        <AddForm onAddForm={onAddForm}></AddForm>
      </ul>
    </section>
  );
};

export default Maker;
