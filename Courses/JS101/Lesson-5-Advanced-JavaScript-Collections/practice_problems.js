/* Practice Problem 1

How would you order the following array of number strings by descending numeric value (largest number value to smallest)? */

let arr = ['10', '11', '9', '7', '8'];

// console.log(arr.sort((a, b) => Number(b) - Number(a))); // => [ '11', '10', '9', '8', '7' ]

/* ===============
Practice Problem 2

How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest? */

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/* PEDAC

PROBLEM
Input: array of objects
Output: array of objects

EXAMPLES

DATA STRUCTURE

ALGORITHM
need to extract the value from the key `published` and convert to a number and sort from earliest to latest
*/

console.log(books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
}));

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