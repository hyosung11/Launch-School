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

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

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

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' },
};

// Compute and display the total age of the male members of the family.

// There are several ways to accomplish this task. One way is to use the `for/in` loop and add up the ages:
let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member]['age'];
  }
}

console.log(totalMaleAge);

// Another way to do it would be to use the `Object.values` method along with a `forEach` or a loop:
// let memberTraits = Object.values(munsters);
// let totalMaleAge = 0;

// memberTraits.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });

// console.log(totalMaleAge); // => 444