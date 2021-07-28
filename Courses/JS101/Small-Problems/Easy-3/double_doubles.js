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
1. declare a function with one parameter that takes a number argument
2. check whether the length of the string version of the number is even
3. If first half of string equals the second half
  - return number
  otherwise return number * 2
*/

function twice(number) {
  let result = String(number);

  if (result.length % 2 === 1) {
    return number * 2;
  }
}

// Alex's solution
function twice(num) {
  let string = String(num);

  if (string.length % 2 !== 0) {
    return num * 2;
  } else if (
    string.slice(0, string.length / 2) ===
    string.slice(string.length / 2, string.length)
  ) {
    return num;
  } else {
    return num * 2;
  }
}

// Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676