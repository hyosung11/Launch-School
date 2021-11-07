/* JS101 - Small Problems > Easy 6 > 3. Reverse Number

Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

function reverseNumber(number) {
  let numberStringArray = String(number).split('');
  let reversedStringedNum = numberStringArray.reverse().join('');
  return parseInt(reversedStringedNum, 10);
}

// function reverseNumber(number) {
//   return Number(String(number).split('').reverse().join(''));
// }

// Examples:
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456));  // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1

/* Discussion

Our solution leverages the `Array.prototype.reverse` method. It converts the `number` argument to a string and splits out the digits by using an empty string (`''`) as the separator. It then reverses the array, joins it together with an empty string (`''`) as a separator, passes the resulting string to `parseInt` to convert it to a number, and returns the result.

Notice the `radix` of `10` as a second argument to `parseInt`. This gives the `parseInt` function the base by which it parses the number. If the number string contains leading zeroes (e.g., `'00021'`), `parseInt` may convert the number to `17` (base 8) instead of `21` (base 10); the behavior varies based on the version of JavaScript. */

// Elaine's Solutions
// Number -> String -> Array -> Reverse -> String -> Number
// function reverseNumber(num) {
//   return Number(String(num).split('').reverse().join(''))
// }

// // push & pop
// function reverseNumber1(num) {
//   let digitArr = String(num).split('')
//   let copyArr = digitArr.slice()       // make a copy to iterate over!
//   let revArr = []

//   for (let counter = 0; counter < digitArr.length; counter++) {
//     revArr.push(copyArr.pop());        // pop - removes from the BACK of the array
//   }

//   return Number(revArr.join(''))
// }

// // unshift
// function reverseNumber2(num) {
//   let digitArr = String(num).split('')
//   let revArr = []

//   for (let counter = 0; counter < digitArr.length; counter++) {
//     revArr.unshift(digitArr[counter]);        // adds to the BEGINNING - useful for reversing
//   }

//   return Number(revArr.join(''))
// }