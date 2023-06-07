function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  reserve = reserve.filter(e => !lostSet.has(e))
  lost = lost.filter(e => !reserveSet.has(e))

  let answer = n - lost.length;
  const reserveMap = reserve.reduce((acc, v)=>({...acc, [v]: true}), {})
  lost.sort((a,b)=> a-b)
    .forEach((n)=> {
      if(reserveMap[n-1]) {
        reserveMap[n-1] = false;
        answer += 1;
      } else if(reserveMap[n+1]) {
        reserveMap[n+1] = false;
        answer += 1;
      }
    })

  return answer;
}