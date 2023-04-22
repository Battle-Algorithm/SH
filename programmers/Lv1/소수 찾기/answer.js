function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.ceil(number ** 0.5); i++) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }

  return true;
}

function permutation(array, cnt) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (cnt - 1 === 0) {
      result.push([array[i]])
      continue;
    }

    const subResult = permutation([...array.slice(0, i), ...array.slice(i + 1)], cnt - 1)
    subResult.forEach(e => result.push([array[i], ...e]))
  }

  return result;
}

function solution(numberList) {
  const numbers = []

  for (let i = 1; i <= numberList.length; i++) {
    const cases = permutation(numberList, i).map(e => Number(e.join('')));
    numbers.push(...cases)
  }

  console.log([...new Set(numbers)])

  return [...new Set(numbers)].filter(n => isPrime(n)).length;
}