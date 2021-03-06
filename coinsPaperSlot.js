class CoinsPaperSlot extends MoneySlot {
  constructor() {
    super();
    this.acceptedMoney = [0.1, 0.2, 0.5, 1, 20, 50]; // USD currency: 10c, 20c, 50c, $1, 20$, 50$
  }

  updateAcceptedMoney(value) {
    this.acceptedMoney.push(value);
  }

  removeAcceptedMoney(value) {
    // find the index of the value
    const index = (element) => element === value;

    // if index not exist, return this money type does not exist
    if (index === -1) return "Money type does not exist";

    // if it's exist, remove the value, return money type removed
    this.acceptedMoney.splice(index, 1);
    return "money type removed";
  }
  validateCurrentMoney() {}
}
