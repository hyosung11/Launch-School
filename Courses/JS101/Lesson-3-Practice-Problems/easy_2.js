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

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray); // [5, 4, 3, 2, 1];
// console.log(numbers); // [1, 2, 3, 4, 5];

/* ========================================================

Question 3

Given a number and an array, determine whether the number is included in the array.

*/
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// Hint
// Read about the Array.prototype.includes() method on MDN.

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

/* ========================================================

Question 4

Starting with the string:

let famousWords = 'seven years ago...';

show two different ways to put the expected "Four score and " in front of it.
*/

// let famousWords = 'seven years ago...';

// Solution 1
// console.log("Four score and " + famousWords);
// => Four score and seven years ago...

// Solution 2
// console.log("Four score and ".concat(famousWords));
// => Four score and seven years ago...

/* ========================================================

Question 5

Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

Hint

Read about the Array.prototype.splice() method on MDN.

*/
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);

// console.log(numbers); // [1, 2, 4, 5]

/* ========================================================

Question 6

Suppose we build an array like this: */

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

// ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:

// ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles'];

// Hint 1
// Read about the Array.prototype.concat() method on MDN, and pay close attention to how concat uses its arguments.

// Hint 2
// Consider using spread syntax in your solution. If you can't get a solution with spread syntax, try using Array.prototype.reduce or Array.prototype.forEach.

// Solution 1 - Array.prototype.concat()
// flintstones = [].concat(...flintstones);
// => [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// Solution 2 - Array.prototype.reduce()
// flintstones = flintstones.reduce((accumulator, element) => {
//   return accumulator.concat(element);
// },[]);

// console.log(flintstones);

// Solution 3 - Array.prototype.forEach()
// let newFlintstones = [];
// flintstones.forEach((element) => {
//   newFlintstones = newFlintstones.concat(element);
// })

// console.log(newFlintstones);

// Solution 3 - Array.prototype.flat()
// let newFlintstones = flintstones.flat();

// console.log(newFlintstones);

/* ========================================================

Question 7

Consider the following object: */

// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

// ['Barney', 2];

// Hint

// Read about the Object.entries() method on MDN.

// console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift());

/* ========================================================

Question 8

How would you check whether the objects assigned to variables numbers and table below are arrays? */

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// Hint
// Read about the Array.isArray() method on MDN.

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Array.isArray() determines whether the passed value is an Array. You can read about this method on MDN.

/* ========================================================

Question 9

Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces? */

let title = 'Flintstone Family Members';

// Hint
// Read about the Math.floor() function on MDN. You should also read about the String.prototype.padStart method on MDN as well.

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

/*
To center some text, we need to pad it on the left with some spaces. The hard part here is determining how many spaces you need. You can determine the correct value by subtracting the length of the string from the desired width, then dividing that result by 2. That gives you the number of spaces you need on the left, and an equivalent number of spaces on the right, after allowance for rounding. Once we know how many spaces we need on the left, we can use padStart to pad the original string to a length that includes those additional spaces. */

/* ========================================================

Question 10

Write two one-line expressions to count the number of lower-case t characters in each of the following strings:
 */

let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);

// 20210812 07:38 Assignment complete