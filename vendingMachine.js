class VendingMachine {
  // set the initial values for the machine
  constructor(numOfrow, numOfCols) {
    this.items = [];
    this.rows = numOfrow;
    this.cols = numOfCols;
    this.keypad = newKeypad();
    this.cashBox = new CashBox(1000); // cash box initial value
    this.moneySlot = new CoinsPaperSlot();
    this.cardSlot = new CardSlot();
  }

  // setup VM machine
  setup(items) {
    if (this.checkMachineCapacity(items)) {
      this.items = [...items];
    } else {
      console.log("VM can't handle this num of snacks");
    }
  }

  // check the price & availability for an item(snack)
  checkItem(target) {
    // isItemAvailable ?
    // return price
    // else return item not available
  }

  buyItem(itemCode, money) {
    /*
    // isItemAvailable ?
       // return item not available
    // Validate money ?
       // false: return money invalid

    // if price > money
      // return Invalid amount of money
      // return the money
    
    // confirm ? cancel 
      // confirm: dispense item & changes
      // cancel: return the money
    */
  }

  isItemAvailable(row, cols) {
    // search about element using col code
    // item exist && amount > 0
    // return item
    // return false
  }

  // check if array of items bigger than VM capacity
  checkMachineCapacity(array) {
    let result = true;

    if (array.length > this.rows) return false;

    array.forEach((element) => {
      if (element.length > this.cols) result = false;
    });

    return result;
  }
}

let nuts = new Item("Nuts", 3);
let chips = new Item("Nuts", 2);
let sandwich = new Item("Nuts", 4);
let gum = new Item("Nuts", 1);

let items = [
  [
    { colCode: 101, item: nuts },
    { colCode: 102, item: gum },
    { colCode: 103, item: chips },
    { colCode: 104, item: nuts },
    { colCode: 105, item: sandwich },
  ],
  [
    { colCode: 201, item: nuts },
    { colCode: 202, item: gum },
    { colCode: 203, item: nuts },
    { colCode: 204, item: sandwich },
    { colCode: 205, item: chips },
  ],
  [
    { colCode: 301, item: nuts },
    { colCode: 302, item: sandwich },
    { colCode: 303, item: chips },
    { colCode: 304, item: gum },
    { colCode: 305, item: nuts },
  ],
  [
    { colCode: 401, item: nuts },
    { colCode: 402, item: chips },
    { colCode: 403, item: gum },
    { colCode: 404, item: nuts },
    { colCode: 405, item: sandwich },
  ],
  [
    { colCode: 501, item: chips },
    { colCode: 502, item: nuts },
    { colCode: 503, item: sandwich },
    { colCode: 504, item: nuts },
    { colCode: 505, item: gum },
  ],
];

// create VM instance
let snackVendingMachine = new VendingMachine(5, 5);

// Fill the VM for he first time
snackVendingMachine.setup(items);

// display price for 101 snack item
snackVendingMachine.checkItem(101);
