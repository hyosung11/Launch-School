/* JS101 - Small Problems > Easy 3 > 7. Double Doubles

Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

PEDAC

ALGORITHM
- convert number to string
- check length of string
  - if odd double the number
    - return number
  - if even
    - check if both halves equal
    - return double number */

// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   let stringNumber = String(number);
//   let center = Math.floor(stringNumber.length / 2);
//   let leftNumber = stringNumber.substring(0, center);
//   let rightNumber = stringNumber.substring(center);

//   return leftNumber === rightNumber;
// }

// Elaine's Solution
// function twice(num) {
//   let midPoint = String(num).length / 2;
//   let leftSide = String(num).slice(0, midPoint);
//   let rightSide = String(num).slice(midPoint);
//   return leftSide === rightSide ? num : num * 2;
// }

// My edited version of Elaine's solution
function twice(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber ? number : number * 2;
}

// Alex's solution
// function twice(num) {
//   let string = String(num);

//   if (string.length % 2 !== 0) {
//     return num * 2;
//   } else if (
//     string.slice(0, string.length / 2) ===
//     string.slice(string.length / 2, string.length)
//   ) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// Examples:
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

/* Discussion

The challenging part of this problem is determining how to compare the left-side numbers with the right-side numbers. The trick is to compare them as strings instead of as numbers.

Given this, the solution does the following via the `isDoubleNumber` function:

- Gets the left-side and right-side substrings by calculating the middle index of `stringNumber`.
- Returns the result of comparing the left and right substrings.
  - If the length of `stringNumber` is odd, it is not a double number.
  - If the length of `stringNumber` is even, there is a chance that it is a double number. */