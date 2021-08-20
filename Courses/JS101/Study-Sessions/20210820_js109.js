/* JS109 Study Group | Fri. Aug 20th | 12:30 PM Eastern / 09:30 AM Pacific
Juliette Sinibardy ,  4 days ago

Introductions
- Juliette
- Laurent
- H
- Alex
- Ra'ees

Written Assignment
- three hour exam without a clock
- review all the study guide topics
- high level of precision
- technical and non-technical aspects
- theoretical exam
- 20 questions
  - written answers
  - no multiple choice
  - e.g., fix bug in the code

Interview Assessment
- Zoom and CoderPad
- two problems in one hour
- interview is quiet
- can ask interviewer questions to clarify
- do not check documentation; not open book
- be comfortable with lots of JS methods and functions
- `forEach`, `map`, know the most common methods
- medium problems solved in 20 minutes
- live coding practice
- use the PEDAC process
  - minimum need to write an algorithm
*/

/*

Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

*/

/*
Array.prototype.map
- called on an array
- takes a callback function as argument
- returns an array that's the result of calling that callback function (return values) on each element of the original array

Array.prototype.filter
- called on an array
- takes a callback function as argument
- returns a new array
- each element is passed to the callback as an argument
- the return value of the callback is evaluated for its truthiness by filter */

// [0, 1, 4]
//   .filter((num) => num)

// 0 is empty for falsy values

// [('ant', 'bear')].map((elem) => {
//   if (elem.length > 3) {
//     return elem;
//    }
// });

// ['ant', 'bear'].filter((elem) => elem.length > 3);

// [1, 2, 3].filter((num) => {
//   num + num;
// });

// [1, 2, 3].filter((num) => {
//   return num + num;
// });

// console.log([1, 2, 3].filter(num => num + num);

// let animal = 'dog';

// const speak = (animal) => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak(); // Bark

// variable shadowing
// invoking a function without an argument


// let greeting = 'Hello';

// const test = (str) => {
//   str = str.concat(' World!');
//   return str;
// };

// test(greeting);
// console.log(greeting);

// let greeting = ['Hello'];

// const test = (arr) => {
//   arr = arr.concat('World!');
//   return arr;
// };

// test(greeting);
// console.log(greeting);

// let greeting = ['Hello'];

// const test = (arr) => {
//   arr = arr.push('World!');
//   return arr;
// };

// console.log(test(greeting));
// console.log(greeting);

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);