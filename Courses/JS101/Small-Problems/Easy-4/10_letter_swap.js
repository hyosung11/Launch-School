/* JS101 - Small Problems > Easy 4 > Letter Swap

Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: string of words
- output: string of words

Identify rules
- for each word in the string, swap the first and last letters
- every word contains at least one letter
- each string contains at least one word
- each string contains only words and spaces
  - no leading, trailing, or repeated spaces

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.
- input
- intermediary
- output

ALGORITHM
Steps for converting input to output
- initialize `wordsArray` to split the string into an array
- loop through the `wordsArray`
  - check the length of the word
    - if word length is 1, return the word
    - for each word longer than 1 letter
      - make last letter the first letter
      - return the middle letters
      - make the last letter the first
- return `wordsArray` as a string

CODE
Implementation of Algorithm
- test code while programming */

// function swap(words) {
//   let wordsArray = words.split(' ');

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     wordsArray[idx] = swapFirstLastLetters(wordsArray[idx]);
//   }

//   return wordsArray.join(' ');
// }

// function swapFirstLastLetters(word) {
//   if (word.length === 1) {
//     return word;
//   }

//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }

// Refactor with `Array.prototype.map`
function swap(words) {
  return words
    .split(' ')
    .map((word) => {
      if (word.length === 1) return word;
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    })
    .join(' ');
}

// Examples:
console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde')); // "ebcdA"
console.log(swap('a')); // "a"

/* Discussion

The solution splits the string into words using a space (`" "`) as a separator. It then iterates through all of the words and produces an array of modified words. It then applies `Array.prototype.join` to that array to produce the return value.

The tricky part is the swapping of the first and last characters. During the iteration, the `swapFirstLastCharacters` function handles this. The function takes a word argument and returns the swapped word. The swap happens by building a string composed of the last character (`word[word.length - 1]`), the middle characters (`word.slice(1, -1)`), and the first character (`word[0]`). The function also has a guard clause that checks if the `word` argument is only a single character; if it is, it immediately returns that value since it does not need to swap the letters.

You might have noticed that we are modifying the contents of the array while iterating through the array. This is perfectly fine in this example, as we are simply changing the values of the array elements, but we're not mutating the array.

The solution uses the `String.prototype.slice` method. If you haven't seen this method before, you may refer to the MDN Documentation.

`slice(start, end)`
- `end
  - a negative index can be used, indicating an offset from the end of the sequence. `slice(1, -1)` extracts the second element through the second-to-last element in the sequence.


Further Exploration

How can you refactor this problem using the Array.prototype.map method instead? */