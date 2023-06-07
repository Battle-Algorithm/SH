function solution(d, budget) {
  let answer = d.length;
  const sorted = d.sort((a, b) => a - b)
  for(let i =0; i<d.length; i++) {
    budget -= sorted[i]

    if(budget < 0) {
      answer = i;
      break;
    }
  }

  return answer;
}