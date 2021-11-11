/* JS109 Interview Assessment Code and Notes */

function isLowercase(char) {
  return char >= 'a' && char <= 'z';
}

// console.log(isLowercase('%')); // false

/* ===================================================================
iterate over a string and return a new, transformed string with `map` */

// function repeatedString(string) {
//   return string
//     .split('')
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join('-');
// }

// const repeatedString = (string) =>
//   [...string]
//     .map((element, idx) => element.toUpperCase() + element.toLowerCase().repeat(idx))
//     .join('-');

// console.log(repeatedString('Today')); // 'T-Oo-Ddd-Aaaa-Yyyyy'