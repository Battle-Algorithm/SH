const data = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < data.length - 1; i++) {
  console.log(checkPalindrome(data[i]) ? "yes" : "no");
}

