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

  // useEffect의 장점 : 해당하는 로직별로 여러개만들 수 있음
  useEffect(() => {
    if (!userData) {
      return; // userData가 없을경우엔 return하여 함수를 끝냄
    }
    const stopSync = cardRepository.syncCards(userData, (cards) => {
      // 있을 경우 userData와 콜백자체를 인자로 보내면서 호출
      setCards(cards);
    });

    return () => {
      // userEffect에서 return 시 = 컴포넌트가 언마운트 되었을 때 호출 > 불필요한 네트워크 사용을 끔
      stopSync(); // sync를 멈춤
    };
  }, [userData]); // userData가 변경될 때마다 호출

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
