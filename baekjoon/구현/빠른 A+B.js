const fs = require('fs');
const [, ...numbers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = numbers.reduce((acc, s) =>
    acc + s.split(" ").reduce((acc, n) => Number(acc) + Number(n)) + "\n"
  , "");

console.log(answer);