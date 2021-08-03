/* JS100 - JavaScript Basics > Arrays> 1. First Element

First Element

Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?
*/

function first(array) {
  return array[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// console.log(first([])); // undefined