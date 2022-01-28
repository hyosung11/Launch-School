/* 11:09 Difference of Two problem for Michael

Revised Algorithm
- input an array of numbers
- initialize `result` to an empty array
- sort the input array in ascending order
- for each number in the array
  - loop over the rest of the numbers in the array
    - if the difference between that number and the current number is 2
    - create an array of the two numbers and push it to `result`
- return `result` array */

// function differenceOfTwo(array) {
//   let result = [];

//   let sorted = array.sort((a, b) => a - b);

//   sorted.forEach((num, idx) => {
//     sorted.slice(idx).forEach((nextNum) => {
//       if (nextNum - num === 2) result.push([num, nextNum]);
//     });
//   });
//   return result;
// }

// console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4])); // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)

4 --> 0 (because 4 is already a one-digit number)

PROBLEM
- input number
- output number

Rules
- return num representing the amount of times it takes to reduce a multidigit number to a  single digit by multiplying its digits together
- number is always positive?

EXAMPLES
- reviewed examples

DATA STRUCTURE
- input number
- intermediary: string (while loop)
- output: number 

ALGORITHM
- input number
- initialize `digits` to string of number
- initialize `count` to 0
- while length of `digits` is greater than 1
  - increment `count` by 1
  - compute value of multiplying digits together
- return `count` */

/* Algo
- input num
- initialize `count` to 0
- initialize `digits` to convert number to string and split into an array of digits
- while length of `digits` is greater than 1
  - increment `count` by 1
  - compute the value of multiplying the digits together
- return `count` */

function persistence(num) {
  let count = 0;
  let digits = String(num).split('');
  // console.log(digits); ['9', '9', '9']

  while (digits.length > 1) {
    count += 1; 
    console.log(`count: ${count}`);
    digits = String(digits.reduce((product, num) => product * num, 1)).split('')
    // console.log(digits)
    // [ '7', '2', '9' ]
    // [ '1', '2', '6' ]
    // [ '1', '2' ]
    // [ '2' ]
  }

  return count;
}

// function persistence(num) {
//   let count = 0;
//   num = String(num).split('');

//   while (num.length > 1) {
//     count += 1;
//     num = String(num.reduce((product, digit) => product * digit, 1)).split('');
//   }

//   return count;
// }


// console.log(persistence(4) === 0);
// console.log(persistence(25) === 2);
// console.log(persistence(39) === 3);
console.log(persistence(999) === 4);
