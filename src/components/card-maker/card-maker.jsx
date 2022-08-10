import React from "react";
import styles from "./card-maker.module.css";
import EditForm from "../card-edit-form/card-edit-form";
import AddForm from "../card-add-form/card-add-form";

const Maker = ({ FileInput, cards, addOrUpdateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h2>Card Maker</h2>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <EditForm
            FileInput={FileInput}
            card={cards[key]}
            key={key}
            updateCard={addOrUpdateCard}
            deleteCard={deleteCard}
          ></EditForm>
        ))}
        <AddForm FileInput={FileInput} addCard={addOrUpdateCard}></AddForm>
      </ul>
    </section>
  );
};

export default Maker;
