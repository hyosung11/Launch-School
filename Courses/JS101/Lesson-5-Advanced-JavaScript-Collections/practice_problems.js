/* Practice Problem 1

How would you order the following array of number strings by descending numeric value (largest number value to smallest)? */

let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a, b) => Number(b) - Number(a))); // => [ '11', '10', '9', '8', '7' ]


