const fs = require('fs');
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(Math.max(...numbers), numbers.indexOf(Math.max(...numbers)) + 1)