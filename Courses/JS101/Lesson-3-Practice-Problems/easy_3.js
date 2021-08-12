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
while (numbers.length) {
  numbers.pop()
}

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

// let str1 = 'hello there';
// let str2 = str1;
// str2 = 'goodbye!';
// console.log(str1); // => hello there - correct answer

// Try to answer without running the code.

// Solution 3

// hello there

// The output is hello there since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means that JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line 2 assigns str2 a new string that happens to be a copy of str1's value. Line 3, in turn, assigns str2 to an entirely new string.

/* ========================================================

Question 4

What will the following code output? */

// let arr1 = [{ first: 'value1' }, { second: 'value2' }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// // The output will be:
// [{ first: 42 }, { second: 'value2' }, 3, 4, 5];

/* Internally, arr1 looks something like this after line 1 runs:

+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+

Notice that the first two elements of the array are pointers to objects that appear somewhere in the computer's memory. The values of those objects are not stored in the array. (Since arrays are objects, this applies to elements with array values too.) However, the primitive values are stored directly in the array.

There are two kinds of copy operations when working with objects and arrays: a deep copy and a shallow copy.

A deep copy makes a duplicate of every item in an existing array or object. In particular, it creates completely new instances of any subarrays or subobjects in the source object. If we performed a deep copy on arr1, we would have two different arrays as well as four separate objects.

A shallow copy only makes a duplicate of the outermost values in an array or object. If we perform a shallow copy on arr1, we end up with two different arrays, but we still only have one occurrence each of { first: 42 } and { second: 'value2' }. In this case, both arr1[0] and arr2[0] point to the same object in memory. Likewise, arr1[1] and arr2[1] point to the { second: 'value2' } object.

The slice method performs shallow copies. Thus, when we call arr1.slice(), we end up with something like this:

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+

arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus, when we replace the value of the first property by using arr2[0].first, the change shows up in arr1 as well. In the end, we get the following results:

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> |    { first: 42 }    | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+

*/

/* ========================================================

Question 5

The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false? */

// function isColorValid(color) {
//   if (color === 'blue' || color === 'green') {
//     return true;
//   } else {
//     return false;
//   }
// }

// Try to come up with at least two different solutions.

// My solution with ternary operator works
// function isColorValid(color) {
//   return (color === 'blue' || color === 'green') ? true : false;
// }

// console.log(isColorValid('green'));

// We can simplify this function like this:
// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// console.log(isColorValid("green"));

// In functions that return a boolean value, you often don't need separate return statements for the true and false cases. Instead, you can return the value of a conditional expression directly.

// We can also use an arrow function to simplify the code even more:
// const colorIsValid = color => color === 'blue' || color === 'green';

// Another tweak you can make is to use the Array.prototype.includes method; this works especially well when you have more than 2 choices:
const isColorValid = color => ['blue', 'green'].includes(color);

// All of these functions have the same results.

// 20210812 12:45 Assignment complete