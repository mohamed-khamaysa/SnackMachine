class Cart extends CardSlot {
  constructor(value = 0, currency = "USD") {
    super();
    this.value = value;
    this.currency = currency;
  }

  getValue() {
    return this.value;
  }

  getCurrency() {
    return this.currency;
  }

  withdrawMoney(amount) {
    this.value -= amount;
  }
}
