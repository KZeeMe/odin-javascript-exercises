const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let total = 0;
  if (arr == []) return total;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (n) {
  if (n == 0 || n == 1) return 1;
  let fact = 1;
  while (n > 1) {
    fact *= n;
    n--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
