const Node = require("./sum"); //

function LinkedList() {
  let head = null;
  let length = 0;

  // Append adds a new node containing value to the end of the list
  append = (value) => {
    length = length + 1;

    if (head === null) {
      head = Node(value);
      head.next = null;

      return;
    }

    let current = head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = Node(value);
  };

  // Prepend adds a new node containing value to the start of the list
  prepend = (value) => {
    let tmp = null;
    if (head !== null) tmp = head;
    head = Node(value);
    head.next = tmp;

    length = length + 1;
  };

  // start returns the first node in the list
  start = () => {
    return head.value;
  };

  //tail returns the last node in the list
  tail = () => {
    let feet;
    let current = head;

    while (current.next !== null) {
      current = current.next;
    }

    feet = current;

    return feet.value;
  };

  // size returns the total length of the list
  size = () => {
    return length;
  };

  // at(index) returns the node at the given index
  at = (index) => {
    let count = 0;
    let current = head;

    if (index === count) return head;

    while (count !== index) {
      count++;
      current = current.next;
    }

    return current;
  };

  // pop removes the last element from the list
  pop = () => {
    if (!head) return null;

    if (head.next === null) {
      head = null;
    }

    at(size() - 2).next = null;
    length--;
  };

  // contains returns true if the passed in value is in the list and otherwise returns false.
  contains = (val) => {
    let current = head;

    while (current !== null) {
      if (current.value === val) {
        return true;
      }

      current = current.next;
    }

    return false;
  };

  // find(value) returns the index of the node containing value, or null if not found.
  find = (val) => {
    let current = head;
    let count = 0;

    while (current !== null) {
      if (current.value === val) {
        return count;
      }

      current = current.next;
      count++;
    }

    return null;
  };

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString = () => {
    let arr = [];
    let current = head;

    while (current !== null) {
      arr.push(`(${current.value}) ->`);
      current = current.next;
    }

    arr.push(`${null}`);

    return arr.join(" ");
  };

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt = (val, index) => {
    if (index > length) {
      return "Such an index doesn't exist";
    }

    length++;

    let newNode = Node(val);

    // if the index is 0.
    if (index === 0) {
      let tmp;
      tmp = head;
      head = newNode;
      head.next = tmp;

      return head;
    }

    // if the index is the end
    if (index === length - 1) {
      // get the second last node
      let last = at(index - 1); // get the last node
      last.next = newNode;
      newNode.next = null;

      return head;
    }

    // main case
    let count = 0;
    let current = head;

    while (current !== null) {
      if (count === index) {
        let nextNode = current;
        let beforeNode = at(count - 1);
        beforeNode.next = newNode;
        newNode.next = nextNode;

        return head;
      }

      count++;
      current = current.next;
    }
  };

  // removeAt(index) that removes the node at the given index.
  removeAt = (index) => {
    if (index > length - 1) return "node doesn't exist";

    // if the index is 0.
    if (index === 0) {
      let newhead = at(1);
      head = newhead;

      return head;
    }

    // main case
    let front = at(index - 1);
    let back = at(index + 1);

    front.next = back;

    return head;
  };

  return {
    start,
    tail,
    size,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const newlist = LinkedList();

module.exports = LinkedList;
