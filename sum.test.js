const Node = require("./sum");

test("Does the node function create a new node with correct values ?", () => {
  const newNode = Node("Rabten");

  expect(newNode).toEqual({ value: "Rabten", next: null });
});
