import React, { Component } from "react";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";

class CardRepository extends Component {
  syncCards(userData, onUpdate) {
    const db = getDatabase();
    const syncRef = ref(db, `${userData.uid}/cards`); // /cards안에 있는 모든 데이터를 수신 대기
    onValue(syncRef, (snapshot) => {
      //  syncRef가 업데이트 될때마다 snapshot을 받아
      const value = snapshot.val(); // value가 존재한다면
      console.log(value);
      value && onUpdate(value); // 콜백으로 받은 onUpdate(value)실행
    });
    // 계속하여 대기중인 syncRef를 끄고싶을 경우 리턴하여 끔
    return () => syncRef.off();
  }
  saveCard(userData, card) {
    const db = getDatabase();
    set(ref(db, `${userData.uid}/cards/${card.id}`), {
      ...card,
    });
  }
  removeCard(userData, card) {
    const db = getDatabase();
    const deleteRef = ref(db, `${userData.uid}/cards/${card.id}`);
    remove(deleteRef);
  }
}

export default CardRepository;
