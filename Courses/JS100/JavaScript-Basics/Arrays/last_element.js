/* JS100 - JavaScript Basics > Arrays > 2.Last Element

Last Element

Write a function that returns the last element of an input array. For example:

last(['Earth', 'Moon', 'Mars']); // 'Mars'
*/

function last(array) {
  return array[array.length - 1];
}

console.log(last(['Earth', 'Moon', 'Mars', 'Pluto'])); // 'Pluto'