class MoneySlot {
  constructor(currentCash = 0) {
    this.currentCash = currentCash;
  }

  getCurrentCash() {
    return this.currentCash;
  }

  updateCurrentCash(value) {
    this.currentCash += value;
  }

  resetCurrentCash() {
    this.currentCash = 0;
  }
}
