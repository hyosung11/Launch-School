/* Playing with digits - 6 kyu

Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1 (8 + 81 = 89) / 1 === 89, so return 1

    695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

PROBLEM
Input: number (num) and number (power)
Output: number (multiple of n)

Rules
1/ Calculate the sum of the digits to the power p => p + length of n and initialize a variable `sumOfPowers`

2/ Check if `sumOfPowers` is a multiple of n, if it is return the multiple
- if it's not a multiple return -1

ALGORITHM
- input:
  - `num`
  - `power`
- convert number to string
  - iterate through digits of string
    - multiply digit at idx by the power
      - increase the power based on idx position
      - sum these values
  - divide sum by num
    - if this is a multiple of num, return the multiple
- return - 1
*/

// Laurent's Version
// function digPow(number, pow) {
//   const totalPow = (number, pow) => {
//     let total = 0;

//     for (let index = 0; index < String(number).length; index += 1) {
//       total += Number(String(number)[index]) ** pow;
//       pow += 1;
//     }

//     return total;
//   };

//   let sumOfPowers = totalPow(number, pow);
//   let multiple = 1;

//   while (number * multiple <= sumOfPowers) {
//     if (number * multiple === sumOfPowers) return multiple;
//     multiple += 1;
//   }

//   return -1;
// }

// console.log(digPow(89, 1) === 1);
// console.log(digPow(92, 1) === -1);
// console.log(digPow(46288, 3) === 51);

/* ALGORITHM
- input:
  - `num`
  - `power`

- convert number to string

- declare a `total` variable
- iterate through digits of string
  - multiply digit at idx by the power
    - increase the power based on idx position
    - add these values to `total`

- divide total by num
  - if this is a multiple of num, return the multiple

- return -1
*/

// function digPow(num, pow) {
//   let total = 0;

//   for (let idx = 0; idx < String(num).length; idx++) {
//     total += String(num)[idx] ** pow;
//     pow += 1;
//   }

//   let multiple = 1;

//   // console.log(total);
//   while (num * multiple <= total) {
//     if (num * multiple === total) return multiple;
//     multiple += 1;
//   }

//   return -1;
// }

/* Algo
- input `number` and `power`
- initialize `digits` to string of the `number`
- initialize `total` to 0
- iterate through `digits`
  - increment `total` by the return value of each `digit` at the idx to the `power`
  - increment `power` by 1
- initialize `multiple` to 1
- while `number` times 
- return `multiple` or `-1`
*/
// refactored
function digPow(number, power) {
  let digits = String(number);
  let total = 0;

  for (let idx = 0; idx < digits.length; idx++) {
    // total += digits[idx] ** pow;
    total += Math.pow(digits[idx], power)
    power += 1;
  }

  let multiple = 1;

  // console.log(total);
  while (number * multiple <= total) {
    if (number * multiple === total) return multiple;
    multiple += 1;
  }

  return -1;
}

console.log(digPow(89, 1) === 1);
console.log(digPow(92, 1) === -1);
console.log(digPow(695, 2) === 2);
console.log(digPow(46288, 3) === 51);
