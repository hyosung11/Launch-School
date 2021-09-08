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

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subArray => {
  return subArray.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}));

// [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]