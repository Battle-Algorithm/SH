const [T, ...data] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const memo = {}

function countPeople(floor, ho) {
  if (memo[floor]?.[ho] !== undefined) {
    return memo[floor][ho]
  }

  if (ho === 1) {
    return 1;
  }

  if (floor === 0) {
    return ho;
  }

  const result = countPeople(floor, ho - 1) + countPeople(floor - 1, ho);

  if (memo[floor] === undefined) {
    memo[floor] = {}
  }
  memo[floor][ho] = result;

  return result;
}

for (let i = 0; i < T; i++) {
  const [k, n] = data.slice(i * 2, (i + 1) * 2).map(Number);

  console.log(countPeople(k, n))
}

