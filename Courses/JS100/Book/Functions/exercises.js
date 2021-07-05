// Exercises

// 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar); // => 1

// Solution
// The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope. Thus, the bar variable on line 3 is not the same as the one on line 1. In the end, foo() has no bearing on the final output.

// Compare this result to the following code:

// let bar = 1;
// function foo() {
//   bar = 2;
// }

// foo();
// console.log(bar); // => 2

// In this case, console.log would log 2 since bar on line 1 is now in scope within the function. Thus, line 3 changes the global variable bar to 2.

// 4. What does the following code log to the console?

// function scream(words) {
//   words = words + "!!!!";
//   return;
//   console.log(words);
// }

// scream("Yipeee"); // It doesn't log anything. The return on line 32 terminates the function before it can log anything.

// 5. What does the following code log to the console?

// function scream(words) {
//   return words + "!!!!";
// }

// scream("Yipeee"); // This program also doesn't log anything. The function returns a value, Yipeee!!!!, but it doesn't do anything with it. In particular, it doesn't write it to the console.

function scream(words) {
  words = words + "!!!!";
  console.log(words);
  return;
}

scream("Yipeee"); // => Yipeee!!!!