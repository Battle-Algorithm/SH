const [, ...data] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(s => s.split(" "));

for (const [cnt, string] of data) {
  console.log(string.split("").reduce((acc, c) => acc + c.repeat(cnt), ""));
}