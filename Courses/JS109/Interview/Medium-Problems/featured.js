/* LS Medium Problems - Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. 

PROBLEM
input: integer
output: integer

rules: 
- int % 2 !== 0
- int % 7 === 0
- digits of number have no duplicates
- int must be less than 9876543201
- must be greater than int

DATA STRUCTURES
input: integer
intermediary: string, object, object values(array - use every())
output: integer

ALGO
- input a number
- while number is less than 9876543201
  - num += 1
  - if number divided by 2 remainder 0, continue
  - if number divided by 7 remainder !0, continue
  - initialize `result` to an empty object
  - convert number to string of digits
  - split digits by char
  - iterate through digits
    - check if digit in `result`
      - if not add with value of 1
      - if in `result` increment
  iterate through `result` object's values
    - if every value equal 1, return number
- return "There is no possible number that fulfills those requirements."
*/

function featured(number) {
  while (number < 9876543201) {
    number += 1;
    if (number % 2 === 0) continue;
    if (number % 7 !== 0) continue;

    let result = {};

    let numberString = String(number)
      .split('')
      .forEach((digit) => {
        result[digit] ? (result[digit] += 1) : (result[digit] = 1);
      });

    if (Object.values(result).every((val) => val === 1)) {
      return number;
    }
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
