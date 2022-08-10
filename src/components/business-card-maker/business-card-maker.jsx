import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Maker from "../card-maker/card-maker";
import Preview from "../card-preview/card-preview";
import styles from "./business-card-maker.module.css";

const CardMaker = ({ FileInput, authService, userData }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Lee Jun Young",
      company: "Junyoung Company",
      job: "freelancer",
      email: "junvely97@gmail.com",
      message: "hello I'm Junyoung:)",
      fileURL: null,
      theme: "pink",
    },
    2: {
      id: "2",
      name: "Ellie",
      company: "Samsung Electronicsdfds",
      job: "Software Engineer",
      email: "Ellie@gmail.com",
      message: "hello I'm Ellie:)",
      fileURL: null,
      theme: "",
    },
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card; // 기존 key가 object에 없을경우 추가됨
      return updatedCard;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      delete updatedCard[card.id];
      return updatedCard;
    });
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
            FileInput={FileInput}
            cards={cards}
            addOrUpdateCard={addOrUpdateCard}
            deleteCard={deleteCard}
          ></Maker>
          <Preview cards={cards}></Preview>
        </div>
      </section>
    </div>
  );
};

export default CardMaker;
