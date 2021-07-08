// More Stuff Exercises

// 1. What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // => [1, 4, 3]

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