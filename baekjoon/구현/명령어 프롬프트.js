const [, ...data] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const length = data[0].length;
let answer = "";

for (let i = 0; i < length; i++) {
  let character = null;

  for (let c of data.map(str => str[i])) {
    if (character !== null && character !== c) {
      character = "?";
      break;
    }

    character = c;
  }

  answer += character;
}

console.log(answer);