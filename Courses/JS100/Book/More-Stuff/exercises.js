// More Stuff Exercises

// 1. What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
// console.log(array2); // => [1, 4, 3]

// This result demonstrates that `array1` and `array2` reference the same array: if we change an element using `array1`, it also changes that element in `array2`. The opposite is also true: if we change an element in `array2`, that also changes the element in `array1`.

// This code also demonstrates that assignment of an array to another array doesn't create a new array, but instead copies a reference from the original array (`array1` above) into the target array (`array2`).

array1[1] = 4 // => 4

array1 // ==> [ 1, 4, 3 ]

array2 // => [ 1, 4, 3 ]

// 2. What do the following error messages and stack trace tell you?

// $ node exercise2.js
// /Users/wolfy/tmp/exercise2.js:4
//   console.log(greeting);
//               ^

// ReferenceError: greeting is not defined
//     at hello (/Users/wolfy/tmp/exercise2.js:4:15)
//     at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
//     at Module._compile (internal/modules/cjs/loader.js:721:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
//     at Module.load (internal/modules/cjs/loader.js:620:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:552:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
//     at executeUserCode (internal/bootstrap/node.js:342:17)
//     at startExecution (internal/bootstrap/node.js:276:5)

// Solution
// An error occurred in the exercise2.js program on line 4 of the program; a ^ points to where JavaScript thinks the error is in the code: it's pointing to the argument list for console.log.

// More specifically, line 6 in the output tells you that a ReferenceError exception occurred and that the name greeting isn't defined. Line 7 repeats some earlier information: JavaScript detected the error at column 15 of line 4 of the program, but it also tells you that the code is in the hello function. Line 8 tells you that hello was called from line 13 of the program in an anonymous function, namely the global-level of the program.

// The rest of the output comes from running the code in node and probably isn't useful to you as an application programmer.

// 3. Write some code to output the square root of 37.

// console.log(Math.sqrt(37)) // => 6.082762530298219

// 4. Given a list of numbers, write some code to find and display the largest numeric value in the list.

// List            | Max
// 1, 6, 3, 2      | 6
// -1, -6, -3, -2	| -1
// 2, 2	          | 2

// console.log(Math.max(1, 6, 3, 2));
// console.log(Math.max(-1, -6, -3, -2))
// console.log(Math.max(2, 2))

// 5. What does the following function do?

function doSomething(string) {
  return string
    .split(' ')
    .reverse()
    .map((value) => value.length);
}

// console.log(doSomething('Pursuit of happiness')) // => [ 5, 3, 6, 7 ] the lengths of each word in reverse order

// 6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

// Example
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
 // Solution 1
function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }
  
  return matches;
}

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// Solution 2
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// 7. What is exception handling and what problem does it solve?

// Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the try/catch statement to catch exceptions that the code in the try block raises, and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.

// 8. Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

// console.log(Number.isNaN(NaN)); => true
// console.log(Object.is(5, NaN)); => false

// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

function isNotaNumber(value) {
  return value !== value;
}

console.log(isNotaNumber(0)); // => false

// This works since NaN is the only JS value that is not === to itself.

