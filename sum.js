function Node(data) {
  let value = data || null;
  let next = null;

  return {
    value,
    next,
  };
}

module.exports = Node;
