/* Courses JS101 > Programming Foundations with JavaScript > Lesson 3: Practice Problems > 5. Practice Problems: Medium 1

Practice Problems: Medium 1 */

/* ========================================================

Question 1

Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
 */

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }

/* ========================================================

Question 2

Starting with the string: */

let munstersDescription = 'The Munsters are creepy and spooky.';

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
