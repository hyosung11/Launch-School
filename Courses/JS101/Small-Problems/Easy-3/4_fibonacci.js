/* JS101 - Small Problems > Easy 3 > 4. Fibonacci Number Location By Length

Fibonacci Number Location By Length

The Fibonacci series is a series of numbers (`1, 1, 2, 3, 5, 8, 13, 21, ...`) such that the first two numbers are `1` by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of `1`.)

You may assume that the argument is always an integer greater than or equal to `2`.

JavaScript's normal Number type can represent integers accurate up to the value of `Number.MAX_SAFE_INTEGER`, which is the 16-digit value `9007199254740991`. Any integer larger than that value loses accuracy. For instance, the following code outputs `1`, not `2` as you may expect: */

// console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER); // => 1

/* We'll be working with much larger numbers in this problem. Fortunately, JavaScript now supports a `BigInt` type that lets you work with massive integers, limited only by the amount of memory available to your program, and the time you can devote to waiting for an answer.

To use `BigInt` integers in your solution, simply append the letter `n` to any numbers you use in your solution: `1n`, `1234567890123456789012345678901234567890n`, and so on. JavaScript will take care of the rest.

// Examples:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: number (length of fibonacci output)
- output: number (index that gives that length)

Make the requirements explicit (clarifying questions)

Add the 2 last numbers of the series until the result
matches the number of digits given as input.
result.length === input

Problem Domain (including implicit requirements)

Identify rules
- the integer is always

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: number (bigInt)
- intermediary: array?
- output: number (bigInt)

ALGORITHM
Steps for converting input to output
1. Declare a function that takes a bigInt integer as an argument
2. Initialize an array to store the fibonacci results
3. loop through fibonacci series until the length of the result matches the input.

CODE
Implementation of Algorithm
- test code while programming */

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

// Examples:
console.log(findFibonacciIndexByLength(2n)) === 7n; // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) === 45n;
console.log(findFibonacciIndexByLength(16n)) === 74n;
console.log(findFibonacciIndexByLength(100n)) === 476n;
console.log(findFibonacciIndexByLength(1000n)) === 4782n;
// console.log(findFibonacciIndexByLength(10000n)) === 47847n;

/* Discussion

The function starts by initializing the first two numbers in the Fibonacci sequence, both of which are `1n`. We use the `count` variable to keep track of where we are in the sequence -- the value of `second` is the second Fibonacci number, so our count is initially `2n`.

The solution then uses a `do...while` loop to calculate the value of each subsequent Fibonacci number while the length of the number is is less than the value of the `length` argument. At every iteration the solution does the following:

- Computes the value for `fibonacci` by adding up the `first` and `second` values.
- Increments `count` by `1n`. It returns the value of `count` if the corresponding Fibonacci number is greater than or equal to the desired length.
- Sets the value of `first` to the value of `second`, and the value of `second` to the value of `fibonacci`. If the criteria for stopping the loop isn't met at the end of this iteration, it uses the two numbers for the computation of `fibonacci` in the next iteration. */

// fibonacci sequence
// function fibonacci(number) {
//   if (number < 2) return number; // 0 if number is 0, 1 if number is 1
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

// console.log(fibonacci(6)); // => 8
// console.log(fibonacci(20)); // => 6765

// Alex's Version
// function findFibonacciIndexByLength(size) {
//   let input = 0n;
//   // let array = [];
//   let count = 0n;

//   while (String(fibonacci(input)).length < size) {
//     input += 1n;
//     // array.push(fibonacci(input));
//     count += 1n;
//   }
//   // return BigInt(array.length);
//   return count;
// }

// Laurent's Version?
// function findFibonacciIndexByLength(digits) {
//   let results = [1n, 1n];

//   while (true) {
//     let length = BigInt(results.length);
//     let newResult = results[length - 2n] + results[length - 1n];
//     let newResultString = "" + newResult;
//     if (BigInt(newResultString.length) === digits) {
//       return (length + 1n);
//       break;
//     }
//     results.push(newResult);
//   }
// }