class CardSlot extends MoneySlot {
  constructor() {
    super();
    this.card = new Card();
  }

  validateCard() {
    // contact the Bank to check if card is valid ?
    // return true || false
  }
}
