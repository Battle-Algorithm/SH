const fs = require('fs');
const [n, data] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = data.split(" ");
let min = 99999999999;
let max = -99999999999;

for (let i = 0; i < Number(n); i++) {
  const number = Number(numbers[i]);

  if (number < min) min = number;
  if (number > max) max = number;
}

console.log(min, max);

