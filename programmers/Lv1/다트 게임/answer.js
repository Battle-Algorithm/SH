function solution(dartResult) {
  const bonusMap = {'S': 1, 'D': 2, 'T': 3}
  const splitDartResult = dartResult.match(/(\d+[SDT][*#]?)/g) // for

  const stack = []

  for (const dart of splitDartResult) {
    const number = dart.match(/\d+/g)[0]
    const [bonus, prize] = dart.slice(number.length)

    let score = Number(number) ** bonusMap[bonus]

    if (prize === '#') {
      score *= -1
    } else if (prize === '*') {
      score *= 2
      stack[stack.length - 1] *= 2
    }

    stack.push(score)
  }

  return stack.reduce((a, v) => a + v);
}