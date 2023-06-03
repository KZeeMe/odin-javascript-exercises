const leapYears = function (year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(2000)); // expect true
console.log(leapYears(1985)); // expect false
console.log(leapYears(1600)); // expect true
console.log(leapYears(1900)); // expect false
// Do not edit below this line
module.exports = leapYears;
