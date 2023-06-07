const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const target = Number(input[0]);

let num = target;
let cycle = 0;


while (num !== target || cycle === 0) {
  let sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  cycle++;
}

console.log(cycle);