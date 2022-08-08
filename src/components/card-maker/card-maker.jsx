import React from "react";
import styles from "./card-maker.module.css";
import EditForm from "../card-edit-form/card-edit-form";
import AddForm from "../card-add-form/card-add-form";

const Maker = ({ cards, onAddForm, updateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h2>Card Maker</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <EditForm
            card={card}
            key={card.id}
            updateCard={updateCard}
            deleteCard={deleteCard}
          ></EditForm>
        ))}
        <AddForm onAddForm={onAddForm}></AddForm>
      </ul>
    </section>
  );
};

export default Maker;
