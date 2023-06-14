const [start, end] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function getNumber(index) {
  return Math.ceil((Math.sqrt(1 + 8 * index) - 1) / 2)
}

function getNumberLimit(number) {
  return number * (number + 1) / 2;
}

let number = getNumber(start);
let limit = getNumberLimit(number);

let answer = 0;
for (let i = start; i <= end; i++) {
  answer += number;

  if (i === limit) {
    number++;
    limit = limit + number;
  }
}

console.log(answer);
