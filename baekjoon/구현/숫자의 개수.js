const numbers = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const result = Array(...String(numbers.reduce((acc, v) => acc * v)))
  .reduce((acc, v) => ({...acc, [v]: (acc[v] || 0) + 1}), {})

for (let i = 0; i < 10; i++) {
  console.log(result[i] || 0);
}