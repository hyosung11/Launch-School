/* JS101 - Small Problems > String and Text Processing > 4. Capitalize Words

Capitalize Words

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

PROBLEM
- input: string
- output: string

Identify rules
- take a string and capitalize the first letter of every word
- return with all subsequent letters of the word in lowercase

EXAMPLES / TEST CASES
'this is a "quoted" word' => 'This Is A "quoted" Word'

Edge Cases?
- string that doesn't start with a letter remains as-is

DATA STRUCTURE
- input: string
- intermediary:
- output: string

ALGORITHM
- split string into words at each space
- iterate over each word
  - transform first letter to capital letter
  - add rest of letters of the word in lowercase
- join words together
- return words

CODE
- test code while programming */

function wordCap(words) {
  return words
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Examples:
console.log(wordCap('four score and seven'));
// "Four Score And Seven"
console.log(wordCap('the javaScript language'));
// "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));
// 'This Is A "quoted" Word'

/* Discussion

The solution uses the transformation list processing strategy to capitalize the first character of each word.

The solution breaks down the `words` argument string by splitting it, using a space (`' '`) as a separator. The solution then uses the `String.prototype.slice` method to split each word into two parts: (1) the first character and (2) all subsequent characters. The solution then calls `String.prototype.toUpperCase` and `String.prototype.toLowerCase` on each part, respectively. Next, the callback function concatenates the two parts and returns the resulting string. Finally, the solution joins the array of words together into a string and returns it.

Notice that `toUpperCase` handles the scenario in which the first character is not alphabetic, and `toLowerCase` does the same for the remaining characters. */

// Other Solutions
// function wordCap(words) {
//   const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
//   return words.split(' ').map(capitalize).join(' ');
// }

// Elaine
// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }

// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word => capitalize(word))
//     .join(' ');
// }