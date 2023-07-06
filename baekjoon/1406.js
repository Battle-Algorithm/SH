class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function insertAfter(node, value) {
  const newNode = new Node(value);
  newNode.prev = node;
  newNode.next = node.next;
  if (node.next) {
    node.next.prev = newNode;
  }
  node.next = newNode;
  return newNode;
}

function deleteNode(node) {
  const prevNode = node.prev;
  const nextNode = node.next;
  if (prevNode) {
    prevNode.next = nextNode;
  }
  if (nextNode) {
    nextNode.prev = prevNode;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [str, n, ...list] = input;
list = list.map((el) => el.split(' '));

// Create a dummy node as the head of the linked list
const head = new Node(null);
let cursor = head;

for (let i = 0; i < str.length; i++) {
  cursor = insertAfter(cursor, str[i]);
}

for (let i = 0; i < n; i++) {
  let el = list[i];
  if (el[0] === 'P') {
    cursor = insertAfter(cursor, el[1]);
  } else if (el[0] === 'L' && cursor.prev) {
    cursor = cursor.prev;
  } else if (el[0] === 'D' && cursor.next) {
    cursor = cursor.next;
  } else if (el[0] === 'B' && cursor.prev) {
    const prevNode = cursor.prev;
    deleteNode(cursor);
    cursor = prevNode
  }
}

let result = '';
let currentNode = head.next;
while (currentNode) {
  result += currentNode.value;
  currentNode = currentNode.next;
}

console.log(result);