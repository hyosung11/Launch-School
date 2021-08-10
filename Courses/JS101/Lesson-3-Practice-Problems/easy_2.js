/* Courses > JS101 Programming Foundations with JavaScript > Lesson 3: Practice Problems > 3. Practice Problems: Easy 2

Practice Problems: Easy 2

==========
Question 1
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
*/

// let advice =
//   'Few things in life are as important as house training your pet dinosaur.';

// console.log(advice.replace('important', 'urgent'));
// => Few things in life are as urgent as house training your pet dinosaur.

// Note that if the string contains two or more occurrences of important, this code only replaces the first. Can you figure out how to replace all occurrences?

// let moreAdvice =
//   'Few things in life are as important as house training your pet dinosaur as an important mission.';

// console.log(moreAdvice.replaceAll('important', 'urgent'));

/* ========================================================

Question 2

The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

Hint

- For the first way, read about the Array.prototype.slice() method on MDN.

- For the second way, read about Spread syntax on MDN.

*/

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Array.prototype.slice()
// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();
// console.log(reversedArray); // [5, 4, 3, 2, 1];
// console.log(numbers); // [1, 2, 3, 4, 5];

// Array.prototype.sort() - changes the array
// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Spread syntax
// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers); // [ 1, 2, 3, 4, 5 ]

/* Bonus Question: Can you do it using the Array.prototype.forEach() method? */

let numbers = [1, 2, 3, 4, 5];
