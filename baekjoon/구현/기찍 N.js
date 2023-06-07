const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let str = "";
for (let i = N; i >= 1; i--) {
  str += i + "\n";
}
console.log(str);

