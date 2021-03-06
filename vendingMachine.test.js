const snackVM = require("./vendingMachine");

let itemsExtraCols = [
  [
    { colCode: 101, item: nuts },
    { colCode: 102, item: gum },
    { colCode: 103, item: chips },
    { colCode: 104, item: nuts },
    { colCode: 105, item: sandwich },
    { colCode: 105, item: sandwich },
    { colCode: 105, item: sandwich },
  ],
  [
    { colCode: 201, item: nuts },
    { colCode: 202, item: gum },
    { colCode: 203, item: nuts },
    { colCode: 204, item: sandwich },
    { colCode: 205, item: chips },
    { colCode: 105, item: sandwich },
  ],
];

let itemsExtraRows = [
  [{ colCode: 101, item: nuts }],
  [{ colCode: 201, item: nuts }],
  [{ colCode: 201, item: nuts }],
  [{ colCode: 201, item: nuts }],
  [{ colCode: 201, item: nuts }],
  [{ colCode: 201, item: nuts }],
];

test("insert items array with extra columns", () => {
  expect(snackVM.setup(itemsExtraCols)).tobe(false);
});

test("insert items array with extra rows", () => {
  expect(snackVM.setup(itemsExtraRows)).tobe(false);
});
