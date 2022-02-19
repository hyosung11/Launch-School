/* Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

Problem
- input array
- output phrase

Rules
- return 'Boom!' if the digit 7 appears in the array
- return 'there is no 7 in the array' if not
- 7 can be one digit in a number containing a 7 like 76 or 37

Examples
- reviewed

Data Structure
- input array
- turn numbers into strings
- output: string phrase

Algorithm
- input array of integers
- if 7 test of array is true
    - return 'Boom!'
  else
    - return 'there is no 7 in the array'
*/

/* peeked at solution using `test` */
// function sevenBoom (array) {
//   if (/7/.test(array)) return 'Boom!';
//   else return 'there is no 7 in the array';
// }

function sevenBoom (array) {
  return /7/.test(array) ? 'Boom!' : 'there is no 7 in the array';
}

function sevenBoom(array) {
  console.log(array.join(''))
  return array.join().includes('7') ? 'Boom!' : 'there is no 7 in the array';
}

// console.log(sevenBoom([2, 6, 7, 9, 3])) // === 'Boom!');
// console.log(sevenBoom([2, 6, 7, 9, 3]) === "Boom!");
// console.log(sevenBoom([33, 68, 400, 5]) === "there is no 7 in the array");
// console.log(sevenBoom([86, 48, 100, 66]) === "there is no 7 in the array");
// console.log(sevenBoom([76, 55, 44, 32]) === "Boom!");
// console.log(sevenBoom([35, 4, 9, 37]) === "Boom!");