class keypad {
  constructor() {
    this.screenMsg = "";
    this.enteredCode = 0;
  }

  // this method to enter code
  enterCode(code) {
    this.enterCode = code;
  }

  // to print msg on screen
  printMsg(msg) {
    return (this.screenMsg = msg);
  }

  confirmBuy() {
    // print msh on screen to asks to confirm process ?
    // confirmed: return true
    // Not confirmed: return false
  }

  cancelBuy() {
    // print msh on screen to asks to cancel process ?
    // canceled: return true
    // Not canceled: return false
  }
}
