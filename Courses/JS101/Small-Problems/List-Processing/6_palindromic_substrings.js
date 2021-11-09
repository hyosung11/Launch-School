
/* JS101 - Small Problems > List Processing > 6. Palindromic Substrings

Palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the `substrings` function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, `'AbcbA'` is a palindrome, but `'Abcba'` and '`Abc-bA'` are not. In addition, assume that single characters are not palindromes.

input: string
output: array

ALGORITHM
- initialize */

// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }
//   return substrings;
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// Examples:
console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/* Discussion

Again, this problem becomes much easier to solve with the help of the `substrings` function from the previous exercise. The solution uses the `substrings` function to get a list of all the substrings, and then just uses the `isPalindrome` function to filter out any substrings that aren't palindromes.

This series of exercises is a good example of how to break down a problem into manageable chunks. Go over these three exercises again, with that perspective in mind. */

// function palindromes(string) {
//   let substringsArray = substrings(string);
//   return substringsArray.filter(string => string.length > 1 && string === string.split('').reverse().join(''));
// }

// function substrings(string) {
//   return string.split('').map((_, idx) => leadingSubstrings(string.slice(idx))).flat();
// }

// function leadingSubstrings(string) {
//   return string.split('').map((_, idx) => string.slice(0, idx + 1));
// }