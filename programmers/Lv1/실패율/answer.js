function sum(array) {
  return array.reduce((a, b) => a + b, 0)
}

function solution(N, stages) {
  const counter = stages.reduce((ac, v) => ({...ac, [v]: 1 + (ac[v] || 0)}), {})

  const users = [...Array(N + 1).keys()].map(k => counter[k + 1] || 0)
  const passedUsers = users.map((v, i) => v + sum(users.slice(i + 1)))

  const failure = [...Array(N).keys()].map(k => [k + 1, users[k] / passedUsers[k]])


  return failure
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0])
}
