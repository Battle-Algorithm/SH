function isPrime(number) {
  for (let i = 2; i <= Math.ceil(number ** 0.5); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function combination(array, cnt) { // for^cnt
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (cnt - 1 === 0) {
      result.push([array[i]])
      continue;
    }

    const subResult = combination(array.slice(i + 1), cnt - 1)
    subResult.forEach(e => result.push([array[i], ...e]))
  }

  return result;
}


function solution(nums) {
  var answer = 0;

  const cases = combination(nums, 3) // for^3

  for (let numbers of cases) {
    const sum = numbers.reduce((a, v) => a + v) // for
    answer += isPrime(sum) // for
  }

  return answer;
}