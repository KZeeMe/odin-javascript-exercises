const sumAll = function (num1, num2) {
  let total = 0;
  let min;
  let max;
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      min = num2;
      max = num1;
    } else {
      min = num1;
      max = num2;
    }
    for (let i = min; i <= max; i++) {
      total += i;
    }
    return total;
  }
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
