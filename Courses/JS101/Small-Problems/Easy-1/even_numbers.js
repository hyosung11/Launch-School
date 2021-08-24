/* JS101 - Small Problems > Easy 1 > 3. Even Numbers

Even Numbers
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

*/

// for (let number = 2; number < 100; number += 2) {
//   if (number % 2 === 1) {
//     continue;
//   }

//   console.log(number);
// }

// for loop
// for (let number = 2; number <= 99; number += 2) {
//   console.log(number);
// }

let number = 2;

while (number < 100) {
  console.log(number);
  number += 2;
}

//while loop
// let number = 2

// while (number <= 99) {
//   console.log(number)
//   number += 2;
// }

// Launch School solution
// for (let number = 1; number < 100; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }

//   console.log(number);
// }

/* Discussion

This is similar to the previous problem, but takes a different approach. The main difference is that this solution iterates over all of the numbers, instead of only the specified ones (in this case, even numbers). This solution also makes use of the continue statement to terminate execution of the current iteration and move on to the next when it encounters an odd number. */

// function evenNumbers(number) {
//   [number].reduce((accumulator, current) => {
//     while (accumulator < current) {
//       console.log(accumulator);
//       accumulator += 2;
//     }
//   }, 0);
// }

// advanced solution
// [...Array(99).keys()].filter(number => number % 2 === 0)
//                      .slice(1)
//                      .forEach(number => console.log(number));