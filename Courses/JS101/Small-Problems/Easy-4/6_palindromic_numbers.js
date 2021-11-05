/* JS101 - Small Problems > Easy 4 > 6. Palindromic Numbers

Palindromic Numbers

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards. */

function isPalindrome(number) {
  return number === number.split('').reverse().join('');
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// Examples:
console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true

/* Discussion

The hardest part of this exercise is recognizing that the easiest way to tell if a number is palindromic is by first converting it to a string, and then checking if that string is palindromic. Realizing this, the solution just uses the `isPalindrome` function from the previous exercise.

Further Exploration

Suppose the number argument begins with one or more `0`s. Will the solution still work? Why or why not? Is there any way to address this? */

// Boris - all in one function
// function isPalindromicNumber(number) {
//   let strNum = String(number);
//   return strNum === strNum.split('').reverse().join('');
// }