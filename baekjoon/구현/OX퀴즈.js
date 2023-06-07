const [, ...data] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

for(const history of data) {
  let score = 0;
  let points = 0;

  for(const result of history) {
    if(result === "O") {
      score += ++points;
    } else {
      points = 0;
    }
  }

  console.log(score);
}
