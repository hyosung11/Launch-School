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
- return num representing the amount of times it takes to reduce a multi-digit number to a  single digit by multiplying its digits together
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
  - compute the value of multiplying `digits` together
  - transform back to string
  - split the string back into an array of digits
- return `count` */

function persistence(number) {
  let count = 0;
  let digits = String(number).split('');

  while (digits.length > 1) {
    count += 1;
    digits = String(digits.reduce((product, num) => product * num), 1).split('');
  }

  return count;
}


console.log(persistence(4) === 0);
console.log(persistence(25) === 2);
console.log(persistence(39) === 3);
console.log(persistence(999) === 4);


// function persistence(num) {
//   let count = 0;
//   let digits = String(num).split('');
//   // console.log(digits); ['9', '9', '9']

//   while (digits.length > 1) {
//     count += 1;
//     console.log(`count: ${count}`);
//     digits = String(digits.reduce((product, num) => product * num, 1)).split(
//       ''
//     );
//     // console.log(digits)
//     // [ '7', '2', '9' ]
//     // [ '1', '2', '6' ]
//     // [ '1', '2' ]
//     // [ '2' ]
//   }

//   return count;
// }

// function persistence(number) {
//   let count = 0;
//   // turn the number into a string of digits and split the digits into an array of string digits
//   let digits = String(number).split(''); // ['9', '9', '9']

//   // iterate through the digits of the array as long as the array's length is greater than 1 which is the exit condition
//   while (digits.length > 1) {
//     // 3 => 3 => 3 => 2 => 1 => exit loop
//     // if we're in the while loop, increment the counter for each iteration
//     count += 1; // 1 => 2 => 3 => 4
//     // here's the key => we need to multiply the digits of the array together to get a new number that's less than the previous number
//     // but we need the length of this number, so we convert it to a string
//     // but we want it's length as an array, so we split the string at each digit back into an array
//     digits = String(digits.reduce((product, num) => product * num, 1)).split(
//       ''
//     ); // ['7' , '2', '9'] => ['1', '2', '6] => ['1', '2'] => ['2']
//   }

//   return count; // => 4
// }