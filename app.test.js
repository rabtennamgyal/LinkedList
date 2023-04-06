const Node = require("./sum");
const LinkedList = require("./app");

const newList = LinkedList();

test("does the append add a new node to the end of the list ?", () => {
  newList.append("Rabten");
  newList.append("Samphel");

  expect(newList.start()).toBe("Rabten");
  expect(newList.tail()).toBe("Samphel");
});

test("does the prepend add a new node to the head of the list ?", () => {
  newList.prepend("Tenzin");

  expect(newList.start()).toBe("Tenzin");
});

test("does size return the correct size of the list ?", () => {
  let length = newList.size();

  expect(length).toBe(3);
});

test("does the at returns the correct node ?", () => {
  let data = newList.at(2);

  expect(data.value).toBe("Samphel");
});

test("does pop removes the last node ?", () => {
  newList.pop();
  let data = newList.tail();

  expect(data).toBe("Rabten");
});

test("does contain returns the correct value", () => {
  const data = newList.contains("Rabten");
  const data2 = newList.contains("notRabten");

  expect(data).toBe(true);
  expect(data2).toBe(false);
});

test("retuns the index of the node or null if not present ?", () => {
  const data = newList.find("Rabten");
  const data2 = newList.find("Samphel");

  expect(data).toBe(1);
  expect(data2).toBe(null);
});

test("returns the linkedlist in the correct format ?", () => {
  const format = newList.toString();

  expect(format).toBe("(Tenzin) -> (Rabten) -> null");
});

test("returns the linkedlist in the correct format ?", () => {
  const format = newList.toString();

  expect(format).toBe("(Tenzin) -> (Rabten) -> null");
});

test("inserts node at the correct index ?", () => {
  newList.insertAt("Samphel", 2);

  expect(newList.tail()).toBe("Samphel");
});

test("inserts node at the correct index ?", () => {
  newList.insertAt("Tibet", 1);

  let data = newList.find("Tibet");

  expect(data).toBe(1);
});

test("removes the node at the given index ?", () => {
  newList.removeAt(0);

  expect(newList.start()).toBe("Tibet");
});
