class Item {
  constructor(name = "", price = 0) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}
