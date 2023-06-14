const [month, date] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const dateObj = new Date(`2017-${month}-${date}`);

console.log(days[dateObj.getDay()]);
