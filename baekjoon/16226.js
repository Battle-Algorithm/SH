let [n, ...cats] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let [n, ...cats] = `7\n1 2\n2 1\n2 3\n2 5\n3 4\n4 1\n4 2`.split('\n');
n = Number(n)
cats = cats.map((el) => el.split(' ')).map((el) => el.map(Number));

let aliveCatCount = 0
const map = {}

for (let [y, x] of cats) {
  if (map[y] === undefined) map[y] = []
  if (map[y + 1] === undefined) map[y + 1] = []

  map[y].push([x, false])
  map[y + 1].push([x, true])
}

let shouldKill = false;

for (let y in map) {
  shouldKill = false;
  map[y].sort((a, b) => a[0] - b[0])

  for (let [x, isMirror] of map[y]) {
    if (isMirror) {
      shouldKill = false;
      continue
    }

    if (shouldKill === false) {
      shouldKill = true;
      aliveCatCount += 1;
    }
  }
}


console.log(aliveCatCount)
