import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Maker from "../card-maker/card-maker";
import Preview from "../card-preview/card-preview";
import styles from "./business-card-maker.module.css";

const CardMaker = ({ authService, userData }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Lee Jun Young",
      company: "Junyoung Company",
      job: "freelancer",
      email: "junvely97@gmail.com",
      message: "hello I'm Junyoung:)",
      fileURL: null,
      theme: "pink",
    },
    {
      id: "2",
      name: "Ellie",
      company: "Samsung Electronicsdfds",
      job: "Software Engineer",
      email: "Ellie@gmail.com",
      message: "hello I'm Ellie:)",
      fileURL: null,
      theme: "",
    },
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  const onAddForm = (card) => {
    if (!card.name) {
      alert("name을 입력해주세요.");
    }
    const newCards = [...cards, card];
    setCards(newCards);
  };

  const updateCard = (newCard) => {
    const updatedCard = cards.map((card) => {
      if (card.id === newCard.id) {
        return { ...newCard };
      }
      return card;
    });
    setCards(updatedCard);
  };

  const deleteCard = (id) => {
    const deletedCards = cards.filter((card) => card.id !== id);
    setCards(deletedCards);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <div className={styles.carMakerBg}>
      <section className={styles.cardMakerCon}>
        <Header onLogout={onLogout}></Header>
        {userData && (
          <span
            className={styles.greeting}
          >{`'${userData.displayName}' 님 환영합니다.`}</span>
        )}
        <div className={styles.sections}>
          <Maker
            cards={cards.filter((card) => card.name)}
            onAddForm={onAddForm}
            updateCard={updateCard}
            deleteCard={deleteCard}
          ></Maker>
          <Preview cards={cards.filter((card) => card.name)}></Preview>
        </div>
      </section>
    </div>
  );
};

export default CardMaker;
