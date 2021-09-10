/* ===============
Practice Problem 1

How would you order the following array of number strings by descending numeric value (largest number value to smallest)? */

// let arr = ['10', '11', '9', '7', '8'];

// console.log(arr.sort((a, b) => Number(b) - Number(a))); // => [ '11', '10', '9', '8', '7' ]

/* ===============
Practice Problem 2

How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest? */

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

/* PEDAC

PROBLEM
Input: array of objects
Output: array of objects

EXAMPLES

DATA STRUCTURE

ALGORITHM
need to extract the value from the key `published` and convert to a number and sort from earliest to latest
*/

// console.log(books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// }));

// [
//   {
//     title: 'The Book of Kells',
//     author: 'Multiple Authors',
//     published: '800',
//   },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     published: '1925',
//   },
//   {
//     title: 'One Hundred Years of Solitude',
//     author: 'Gabriel Garcia Marquez',
//     published: '1967',
//   },
// ];

/* ================
Practice Problem 3

For each of these collection objects, demonstrate how you would access the letter `g`. */

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

// Solution

// console.log(arr1[2][1][3]);

// console.log(arr2[1]['third'][0]);

// console.log(arr3[2]['third'][0][0]);

// console.log(obj1.b[1]);
// console.log(obj1['b'][1]);

// console.log(Object.keys(obj2['third'])[0]);
// console.log(Object.keys(obj2.third)[0]);

/* ================
Practice Problem 4

For each of these collection objects, demonstrate how you would change the value `3` to `4`.
*/

// let arr1 = [1, [2, 3], 4];

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let obj1 = { first: [1, 2, [3]] };

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// console.log(arr1[1][1] = 4);
// console.log(arr1); // => [ 1, [ 2, 4 ], 4 ]

// console.log(arr2[2] = 4);
// console.log(arr2); // => [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]

// console.log(obj1.first[2][0] = 4);
// console.log(obj1) // => { first: [ 1, 2, [ 4 ] ] }

// console.log(obj2.a.a[2] = 4); // => 4
// console.log(obj2); // => { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }

/* ================
Practice Problem 5

Consider the following nested object: */

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female' },
// };

// Compute and display the total age of the male members of the family.

// There are several ways to accomplish this task. One way is to use the `for/in` loop and add up the ages:
// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member]['age'];
//   }
// }

// console.log(totalMaleAge);

// Another way to do it would be to use the `Object.values` method along with a `forEach` or a loop:
// let memberTraits = Object.values(munsters);
// let totalMaleAge = 0;

// memberTraits.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });

// console.log(totalMaleAge); // => 444

/* ===============
Practice Problem 6

One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member: */

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

// Object.entries(munsters).forEach(character => {
//   let name = character[0];
//   let age = character[1].age;
//   let gender = character[1].gender;

//   console.log(`${name} is a ${age}-year-old ${gender}.`)
// });

/* ===============
Practice Problem 7

Given the following code, what will the final values of `a` and `b` be? Try to answer without running the code. */

// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // => [2, [5, 8] ]
// console.log(arr);

// console.log(arr[0] += 2); // => 4
// console.log(arr[1][0] -= a); // => 3

// a // => 2
// b // => [ 3, 8 ]

/* ===============
Practice Problem 8

Using the `forEach` method, write some code to output all vowels from the strings in the arrays. Don't use a `for` or `while` loop. */

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

/* PEDAC

Problem
- input: object
- output: vowels

Examples
- strings in the arrays

Data Structure
- input: object with arrays as values with strings as elements
- output: vowels

Algorithm
- declare variable `vowels` and assign it the value of `aeiou`
- iterate through the object
  - check the object's value which is an array of strings for vowels in the strings
  - return the vowels

Hint
You can use the `String.prototype.split` method to convert the words to arrays of individual characters.

*/
// let vowels = 'aeiou';

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o

/* ================
Practice Problem 9

Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order. */

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/* Notes
need to access the elements in each subarray and order them either alphabetically or numerically
map?
sort
*/

// console.log(arr.map(subArray => {
//   if (typeof subArray[0] === 'string') {
//     return subArray.slice().sort();
//   } else {
//     return subArray.slice().sort((a, b) => a - b);
//   }
// }));

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]

/* ================
Practice Problem 10

Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.*/

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr.map(subArray => {
//   return subArray.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }

//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }));

// [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

/* ================
Practice Problem 11

Given the following data structure, use the `map` method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

return a new array
increment each number by 1
don't mutate the original data structure
*/

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// })
// );

// [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]
// console.log(arr); // => [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/* ================
Practice Problem 12

Given the following data structure, use a combination of methods, including `filter`, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

if (num % 3 === 0)
*/

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(subArray => {
//   return subArray.filter(num => num % 3 === 0)
// }));

// [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

/* ================
Practice Problem 13

Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

Notes:
- copy the array
- sort the subarrays in place
- add the odd numbers in each subarray
- compare the odd number values in each subarray
- return array with subarrays in descending order of odd number values
*/
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/* Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
*/

// console.log(arr.sort((a, b) => {
//   let oddSumA = a.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);
//   let oddSumB = b.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);

//   return oddSumA - oddSumB;
// }));

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

/* ================
Practice Problem 14

Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

Notes
- input: object
- output: array

reach into each type of produce
if the type is fruit
- return the colors of that fruit with the colors capitalized
if the type is vegetable
- return the size of the vegetable in uppercase

*/

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

/* The return value should look like this:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"] */


// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// let result = Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });

// console.log(result);

// [
//   [ 'Red', 'Green' ],
//   'MEDIUM',
//   [ 'Red', 'Green' ],
//   [ 'Orange' ],
//   'LARGE'
// ]

/* ================
Practice Problem 15

Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

Notes:
- input: array with nested objects with nested arrays
- output: array of the objects where all the numbers are even

reach into the array
look at the objects and check the values which are arrays
- if all the values in the arrays are even
  - return that object

//  expected output => [ { e: [8], f: [6, 10] } ]
*/

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// console.log(arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// }));

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

/* ================
Practice Problem 16

Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

Notes:
- input: array
- output: object

- need an empty object
- return object
- iterate through the array
  - map through the subarrays
  -forEach?
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let object = {};
// arr.forEach(subarray => {
//   let key = subarray[0];
//   let value = subarray[1];

//   object[key] = value;
// });

// console.log(object);
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

console.log(Object.fromEntries(arr));

/* ================
Practice Problem 17

A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/

