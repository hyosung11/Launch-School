/* JS101 - Small Problems > Easy 2 > 4. Squaring an Argument

Squaring an Argument

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself.

Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

*/

// function multiply(num1, num2) {
//   return num1 * num2;
// }

const multiply = (num1, num2) => num1 * num2;

function square(number) {
  return multiply(number, number);
}


console.log(square(5));
console.log(square(-8));