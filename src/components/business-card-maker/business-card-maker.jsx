import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Maker from "../card-maker/card-maker";
import Preview from "../card-preview/card-preview";
import styles from "./business-card-maker.module.css";

const CardMaker = ({ FileInput, authService, cardRepository }) => {
  const navigateState = useLocation.state;
  const [cards, setCards] = useState({});
  const [userData, setUserData] = useState(navigateState && navigateState.user);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card;
      return updatedCard;
    });
    cardRepository.saveCard(userData, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      delete updatedCard[card.id];
      return updatedCard;
    });
    cardRepository.removeCard(userData, card);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserData(user);
      } else {
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
