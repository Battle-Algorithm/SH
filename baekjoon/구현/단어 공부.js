const data = require('fs').readFileSync("/dev/stdin").toString().trim();

const countDict = data.split("")
  .reduce((acc, v) => ({...acc, [v.toUpperCase()]: (acc[v.toUpperCase()] ?? 0) + 1}), {})

const maxValue = Math.max(...Object.values(countDict));
const maxKey = Object.keys(countDict).filter(key => countDict[key] === maxValue);

console.log(maxKey.length === 1 ? maxKey[0] : "?")

