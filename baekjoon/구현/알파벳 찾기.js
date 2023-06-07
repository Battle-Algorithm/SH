const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const alphabet = input.split('').reduce((acc, v, i) => ({...acc, [v]: acc[v] ?? i}), {})

let answer = '';
for(const c of 'abcdefghijklmnopqrstuvwxyz') {
  answer += (alphabet[c] ?? -1) + " ";
}

console.log(answer.trim());