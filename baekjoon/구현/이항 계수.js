const [N, K] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));

