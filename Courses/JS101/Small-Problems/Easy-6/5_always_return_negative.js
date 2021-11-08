/* JS101 - Small Problems > Easy 6 > 5. Always Return Negative

Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is. */

function negative(number) {
  Math.abs(number) * -1;
}

// ternary operator
function negative(number) {
  return Math.abs(number) === number ? -number : number;
}

// Examples:
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/* Discussion

The solution uses the `Math.abs` method to convert any type of number argument to a positive number. The solution then multiplies this positive number by -1 to convert it to a negative number, and returns the result.

Further Exploration

An alternative solution would be to use the ternary operator (e.g., `a ? b : c`). If you haven't already used it, try refactoring the solution using the ternary operator.

Did you notice that `negative(0)` returns `-0`? What is this value, `-0`? Is it different from `0` in some way? Use Google to look for an explanation of `-0`. In particular, see if you can learn how to differentiate between `0` and `-0` in a program.

Bob Rodes

By the way

There's a cool trick using Math.sign when you want to return a string based on one of three possible outcomes for a comparison: */

// const compare = (num1, num2) => {
//   const result = ['equal to', 'greater than', 'less than'];
//   const index = Math.sign(num1 - num2);
//   return `${num1} is ${result.splice(index, 1)} ${num2}.`;
// };

/* This avoids a ponderous if statement along lines of if the first number is greater then 'greater than', else if the second number is greater then 'less than', else 'equal to'. */