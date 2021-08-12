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

// console.log([1, 2, 3] + [4, 5]);

// Solution 2
// The above code outputs:
// 1,2,34,5

// In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.

/* ========================================================

Question 3

What will the following code output? */

let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!';
console.log(str1); // hello there

// Try to answer without running the code.

// Solution 3

// hello there

// The output is hello there since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means that JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line 2 assigns str2 a new string that happens to be a copy of str1's value. Line 3, in turn, assigns str2 to an entirely new string.