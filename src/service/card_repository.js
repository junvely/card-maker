import { getDatabase, off, onValue, ref, remove, set } from "firebase/database";

class CardRepository {
  constructor() {
    this.db = getDatabase();
  }

  syncCards(userData, onUpdate) {
    const syncRef = ref(this.db, `${userData.uid}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(syncRef);
  }

  saveCard(userData, card) {
    set(ref(this.db, `${userData.uid}/cards/${card.id}`), {
      ...card,
    });
  }

  removeCard(userData, card) {
    remove(ref(this.db, `${userData.uid}/cards/${card.id}`));
  }
}

export default CardRepository;
