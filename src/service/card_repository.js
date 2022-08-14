import React, { Component } from "react";
import { getDatabase, ref, remove, set } from "firebase/database";

class CardRepository extends Component {
  saveCard(userData, card) {
    const db = getDatabase();
    set(ref(db, `${userData.uid}/cards/${card.id}`), {
      1: userData.uid,
      2: card,
    });
  }
  removeCard(userData, card) {
    const db = getDatabase();
    const deleteRef = ref(db, `${userData.uid}/cards/${card.id}`);
    remove(deleteRef);
  }
}

export default CardRepository;
