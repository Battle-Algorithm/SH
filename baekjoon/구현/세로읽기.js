const data = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(s => s.split(""));

const maxLength = Math.max(...data.map(s => s.length));

let result = "";

for (let i = 0; i < maxLength; i++) {

  for (let j = 0; j < data.length; j++) {
    if (data[j][i] !== undefined) {
      result += data[j][i];
    }
  }
}

console.log(result)