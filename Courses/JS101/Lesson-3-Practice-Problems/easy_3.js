/* Courses > JS101 Programming Foundations with JavaScript > Lesson 3: Practice Problems > 4. Practice Problems: Easy 3

Practice Problems: Easy 3 */

/* ========================================================

Question 1

Write three different ways to remove all of the elements from the following array: */

let numbers = [1, 2, 3, 4];

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

// 20210812 12:45 Assignment complete