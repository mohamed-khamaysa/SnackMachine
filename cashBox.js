class CashBox {
  constructor(init = 0) {
    this.cash = init;
  }

  getCash() {
    // return cash
    return this.cash;
  }

  // this method to withdraw amount of money from cash box
  withdrawCash(amount) {
    /*
    // check if amount > cash
      // true: return can't withdraw
      //false: return the withdraw money 
    */
    amount > this.cash ? "can't withdraw this amount" : cash - amount;
  }

  depositCash(amount) {
    return (this.cash += amount);
  }
}
