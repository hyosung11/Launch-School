/* Courses > JS101 Programming Foundations with JavaScript > Lesson 3: Practice Problems > 4. Practice Problems: Easy 3

Practice Problems: Easy 3 */

/* ========================================================

Question 1

Write three different ways to remove all of the elements from the following array: */

// let numbers = [1, 2, 3, 4];

// Solution 1
// numbers.length = 0;
// console.log(numbers);

// Solution 2
// numbers.splice(0, 4);
// console.log(numbers);

// Solution 3
// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

/* ========================================================

Question 2

What will the following code output? */

console.log([1, 2, 3] + [4, 5]);

// The above code outputs:
// 1,2,34,5

// In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.
