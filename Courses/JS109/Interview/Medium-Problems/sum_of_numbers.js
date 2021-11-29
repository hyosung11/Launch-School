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
  const NUMBERS = '0123456789';
  let numbersArray = [];
  let stringNumber = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (NUMBERS.includes(char)) {
      stringNumber += char;
    } else {
      numbersArray.push(stringNumber);
      stringNumber = '';
    }
  }

  if (stringNumber.length > 0) numbersArray.push(stringNumber);

  return numbersArray.reduce((total, num) => total + Number(num), 0);
}

// Examples:
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// Another Version
function sumOfNumbers(str) {
  let chars = str.split('');

  let delim = '-';
  let numbersChar = '0123456789';

  let nums = chars.map((char) => {
    if (numbersChar.includes(char)) {
      return char;
    } else {
      return delim;
    }
  });

  let numbers = nums
    .join('')
    .split(delim)
    .map((str) => Number(str));

  let result = numbers.reduce((sum, num) => sum + num);
  return result;
}

console.log(sumOfNumbers('HE2LL3O W1OR5LD')) // === 11);
// 2 + 3 + 1 + 5

console.log(
  sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
    3635
);
console.log(sumOfNumbers('') === 0);

// regex
// str.match(/\d+/g);

function sumOfNumbers(str) {
  let delim = '-';

  let nums = str.split('').map((char) => {
    if ('0123456789'.includes(char)) {
      return char;
    }

    return delim;
  });

  let numbers = nums
    .join('')
    .split(delim)
    .map((str) => Number(str));

  let result = numbers.reduce((sum, num) => sum + num);
  console.log(result);
  return result;
}

console.log(sumOfNumbers('HE2LL3O W1OR5LD') === 11);
// 2 + 3 + 1 + 5

console.log(
  sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
    3635
);
console.log(sumOfNumbers('') === 0);
