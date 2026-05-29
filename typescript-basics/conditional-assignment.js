/*
A classic problem
*/

const years = [1400, 2000, 1899, 2026, 300, 160];

function isLeapYear(year) {

  if (condition) {
    return true
  }

  return false
}

function main() {
  for (const year of years) {
    if (isLeapYear(year) != answer(year)) {
      throw new Error("the LeapYear function does not work as intended!");
    }
  }
}

main();

function answer(year) {
      return (year%4 == 0) ? (year % 100 == 0 ? (year % 400 == 0 ? true : false): true) : false
}