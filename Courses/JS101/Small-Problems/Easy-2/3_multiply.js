/* JS101 - Small Problems > Easy 2> 3. Multiplying Two Numbers

Multiplying Two Numbers

Create a function that takes two arguments, multiplies them together, and returns the result.

Example:

console.log(multiply(5, 3) === 15); // logs true

*/

// my solution
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// LS solution 1
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// LS solution 2
const multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(11, 11)); // 121

/*
Discussion

The solution here is quite simple. We use an ordinary function that returns the computed result when the function is called. In the second solution we used an arrow function. As you can see, the arrow function in this case shrinks our code to only one line. Also, since the arrow function has only a single expression as the function body, the resulting value will be returned implicitly when the function is called.
*/