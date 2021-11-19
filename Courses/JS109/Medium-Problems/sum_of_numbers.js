/* Sum of Numbers

Problem Instructions

Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" === 63

You can expect that the string will include only positive numbers.

ALGORITHM
- input string
- initialize `NUMBERS` array string number values
- initialize `numbersArray` to collect numbers from the string
- initialize `stringNumbers` to collect digits from string
- iterate through string
  - if char is a digit, add to `stringNumbers`
    - add consecutive digits to `stringNumbers`
  - if not a digit or digits
    - push `stringNumbers` to `numbersArray`
    - set `stringNumbers` to empty string
- if `stingNumbers` not an empty string, push `stringNumbers` to `numbersArray`
  - sum the numbers in the `numbersArray`
- return sum as a number */

function sumOfNumbers(string) {
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numbersArray = [];
  let stringNumbers = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (NUMBERS.includes(string[idx])) {
      stringNumbers += string[idx];
    } else {
      numbersArray.push(stringNumbers);
      stringNumbers = '';
    }
  }

  if (stringNumbers.length > 0) numbersArray.push(stringNumbers);

  return numbersArray.reduce((total, num) => total + Number(num), 0);
}
// Examples:
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

