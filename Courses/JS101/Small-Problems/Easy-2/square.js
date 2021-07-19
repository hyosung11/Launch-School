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

// const multiply = (num1, num2) => num1 * num2;

// function square(number) {
//   return multiply(number, number);
// }

// console.log(square(5));
// console.log(square(-8));

/*
Discussion

Our implementation relies on the previous exercise's multiply() function. The return value of multiply() is the result of multiplying the two arguments we pass to it, so we can simply pass in the same number twice, which will return the squared value. Our square() function is implicitly returning the return value from multiply(number, number).

Further Exploration

What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?
*/

