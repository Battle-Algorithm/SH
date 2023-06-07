function calculateDistance(base, target) {
  return Math.abs(base[0] - target[0]) + Math.abs(base[1] - target[1]);
}

function solution(numbers, hand) {
  let answer = '';
  const prepareHand = hand === 'right' ? 'R' : 'L';
  const posMap = {
    '1': [3, 0], '2': [3, 1], '3': [3, 2],
    '4': [2, 0], '5': [2, 1], '6': [2, 2],
    '7': [1, 0], '8': [1, 1], '9': [1, 2],
    '*': [0, 0], '0': [0, 1], '#': [0, 2]
  };
  let leftHandPos = [0, 0];
  let rightHandPos = [0, 2];

  numbers.forEach(n => {
    const targetPos = posMap[n];
    let handPos;
    let handLetter;

    if (n === 1 || n === 4 || n === 7) {
      handPos = leftHandPos;
      handLetter = 'L';
    } else if (n === 3 || n === 6 || n === 9) {
      handPos = rightHandPos;
      handLetter = 'R';
    } else {
      const leftDistance = calculateDistance(leftHandPos, targetPos);
      const rightDistance = calculateDistance(rightHandPos, targetPos);

      if (leftDistance < rightDistance) {
        handPos = leftHandPos;
        handLetter = 'L';
      } else if (leftDistance > rightDistance) {
        handPos = rightHandPos;
        handLetter = 'R';
      } else {
        handPos = (prepareHand === 'L') ? leftHandPos : rightHandPos;
        handLetter = prepareHand;
      }
    }

    answer += handLetter;
    handPos[0] = targetPos[0];
    handPos[1] = targetPos[1];
  });

  return answer;
}