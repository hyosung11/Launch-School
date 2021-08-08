/* Question 1

Will the code below raise an error?
*/

// let numbers = [1, 2, 3];
// console.log(numbers[6] = 5);
// console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]

// No error

// Bonus

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers[4]); // what will this line return? => undefined

/* ========
Question 2

How can you determine whether a given string ends with an exclamation mark(`!`)?
*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// function endsWithExclamationMark(string) {
//   if (string[string.length - 1] === '!') {
//   return true;
//   } else {
//     return false;
//   }
// }

// console.log(endsWithExclamationMark(str1));
// console.log(endsWithExclamationMark(str2));

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));