/* JS101 - Small Problems > Medium 2 > 6. Sum Square - Square Sum

Sum Square - Square Sum

Write a function that computes the difference between the square of the sum of the first `count` positive integers and the sum of the squares of the first `count` positive integers.

(4) - square of the sum
(1 + 2 + 3 + 4)**2 = 100

sum of squares
1**2 = 1
2**2 = 4
3**2 = 9
4**2 = 16
=> 30

square of the sums - sum of squares
100 - 30 = 70

ALGORITHM
- input a number
- initializes `squareOfSums` to 0
- initialize sumOfSquares to 0
- loop through all integers between 1 and count
  - increment squareOfSums
  - compute sumOfSquares
- square the squareOfSums, and subtract sumOfSquares
- output result */

// function sumSquareDifference(count) {
//   let sumOfSquares = 0;
//   let squareOfSums = 0;

//   for (let number = 1; number <= count; number += 1) {
//     sumOfSquares += number;
//     squareOfSums += Math.pow(number, 2);
//   }
//   return Math.pow(sumOfSquares, 2) - squareOfSums;
// }

// console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(4)); // 70
// console.log(sumSquareDifference(10)); // 2640
// console.log(sumSquareDifference(1)); // 0
// console.log(sumSquareDifference(100)); // 25164150

/* Discussion

The hardest part of this exercise is figuring out what is meant by the terms "square of the sum" and "sum of the squares". The first example demonstrates the meaning of these two terms by including an extended comment that outlines the process for computing the answer.

The solution shows all the details of this process. It loops through all the integers between `1` and `count`, and computes the `sum` and the `sumOfSquares` as it goes. When the loop finishes, the solution subtracts the `sumOfSquares` from the square of the `sum`, and returns the result. */

/* Sum Square - Square Sum

Write a function that computes the difference between the square of the sum of the first `count` positive integers and the sum of the squares of the first `count` positive integers.

PROBLEM
input: number
output: number

rules:
-for a given integer input:
  first add the integers from 1 up to and including that input and then square that sum
  -second, subtract:
  each of the integers between 1 and the input individually squared and then added together
-inputs must be positive

Data structures: numbers

ALGO:
input: number
-create squareOfSums and sumOfSquares variables and initialize to 0
-while number is greater zero:
 -add number to squareOfSums
 -add number squared to sumOfSquares
-decrement by 1 after each iteration:
reassign squareOfSums to its value squared
return squareOfSums - sumOfSquares */

// function sumSquareDifference(number) {
//   let squareOfSums = 0;
//   let sumOfSquares = 0;

//   while (number > 0) {
//     squareOfSums += number;
//     sumOfSquares += number * number;
//     number -= 1;
//   }

//   squareOfSums = squareOfSums * squareOfSums;
//   return squareOfSums - sumOfSquares;
// }

function sumSquareDifference(number) {
  let squareOfSums = 0;
  let sumOfSquares = 0;

  while (number > 0) {
    squareOfSums += number;
    sumOfSquares += number * number;
    number -= 1;
  }
  squareOfSums = squareOfSums * squareOfSums;
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(4)); // 70
console.log(sumSquareDifference(10)); // 2640 */
console.log(sumSquareDifference(100)); // 25164150