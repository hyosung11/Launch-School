/* Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Algo
- input number
- convert number to string
- while the length of digits is greater than 1
  - compute the sum of the digits
- return the integer of the value in base 10
*/

// function digital_root(num) {
//   let root = String(num);

//   while (root.length > 1) {
//     root = String(root
//       .split('')
//       .reduce((sum, num) =>  sum + Number(num), 0))
//   }

//   return parseInt(root, 10);
// }

// function digital_root(num) {
//   while (String(num).length > 1) {
//     num = String(num).split('').reduce((sum, num) => sum + Number(num), 0);
//   }

//   return num;
// }

/*
Notes: 
- input is a number
- output is a number

Examples: 
25 => 2 + 5 = 7
1994 => 1 + 9 + 9 + 4 => 2 + 3 = 5

Algorithm: 
- let sum = n
- if sum number converted to string len is more than 1
  - split the number to digits
  - get the sum of digits
  - reassign the sum of digits to new value
- return sum
*/

function digital_root(num) {
  let sum = num;
  while (String(sum).length > 1) {
    sum = String(sum).split('').reduce((sum, num) => sum + Number(num), 0);
  }

  return sum;
}

// recursive version
// function digital_root(num) {
//   if (num % 10 === num) return num;

//   let result = String(num)
//     .split('')
//     .map(digit => Number(digit))
//     .reduce((sum, num) => sum + num, 0);
//   console.log(result)

//   return digital_root(result);
// }

// console.log(digital_root(16)) // === 7);
console.log(digital_root(456)) // === 6);

// console.log(digital_root(16) === 7);
// console.log(digital_root(456) === 6);