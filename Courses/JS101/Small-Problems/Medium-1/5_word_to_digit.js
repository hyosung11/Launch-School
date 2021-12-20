/* JS101 - Small Problems > Medium 1 > 5. Word to Digit

Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

PROBLEM
- input: sentence string
- output: string

Identify rules
- return sentence string with number words converted to their digits

EXAMPLES / TEST CASES
'I am five feet 6 inches tall' => 'I am 5 feet 6 inches tall'

Edge Cases?
- only numbers zero to nine

DATA STRUCTURE
- input: string
- intermediary: array
- output: string

ALGORITHM
- initialize number words object as a lookup table for converting each numeric word to its digit counterpart
- iterate over the keys of the number words object
  - replace all instances of each numeric word in the string argument
  - during each iteration create a RegExp object and assign it to the regex variable
  - pass the regex argument to the `replace` method
    - reassign the value of sentence
- return new sentence

CODE
- test code while programming */

// const NUM_WORDS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });
//   return sentence;
// }

// // Example:
// console.log(wordToDigit('Please call me at five five five one two three four. In the zone. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* This exercise is a string processing problem. You can either convert the string into an array and use a list processing strategy—transformation perhaps?—or use regex to find and replace sequences of characters that match a particular pattern.

Discussion

The solution uses a `NUM_WORDS` object as a lookup table for converting each numeric word to its digit counterpart. The solution iterates over the keys of the `NUM_WORDS` object and iteratively replaces all instances of each numeric word in the `sentence` argument. During each iteration, the solution creates a `RegExp` object and assigns it to the `regex` variable. The solution passes this `regex` as an argument to the `String.prototype.replace` method, reassigning the value of the sentence via the statement:

sentence = sentence.replace(regex, NUM_WORDS[word]);

After looping through all the keys, the solution returns the new sentence.

If you created any additional test cases, you may have noticed that the provided solution does not handle the case where a "number word" is a part of another word, such as:

wordToDigit('The weight is done.'); // "The w8 is d1."

We can handle this case by wrapping the regex pattern with the word boundary anchor, `\b`:

regex = new RegExp('\\b' + word + '\\b', 'g');

This results in:

wordToDigit('The weight is done.'); // "The weight is done."

Note that we have to escape the string '\\b' with an extra backslash—otherwise JavaScript will interpret '\b' as a backspace character.

Further Exploration

Can you refactor the function so that it does not use a loop? */

// Edris
// function wordToDigit(string) {
//   string = string.split(' ');
//   let wordNums = {
//     one: '1',
//     two: '2',
//     three: '3',
//     four: '4',
//     five: '5',
//     six: '6',
//     seven: '7',
//     eight: '8',
//     nine: '9',
//     zero: '0',
//   };

//   for (let index in string) {
//     let word = string[index];
//     if (wordNums.hasOwnProperty(word)) {
//       string[index] = wordNums[word];
//     }
//   }

//   return string.join(' ');
// }

// function wordToDigit(string) {
//   let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     if (string.includes(numbers[idx])) {
//       string = string.replaceAll(numbers[idx], idx);
//     }
//   }
//   return string;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

PROBLEM:
input: string
output: string(digits replace words)

rules:
-for every spelled-out number zero through nine, replace it with the number's digit.
-leave rest of string unchanged

examples:
-checks out

data structures:
input: string
intermediary: array that links spelled-out numbers with the index position of that same digit;
output: string

algo:
- input: string
- initialize `NUMBER_WORDS` to an array of numbers where each spelled-out number is located at its index
- split the string into words at each space
- iterate through the words array by word
  - iterate through `NUMBER_WORDS` array
  - if word at the index is a number word
    - replace number word with its digit equivalent at that index
- join words together at spaces
- return new string */

function wordToDigit(string) {
  const NUM_WORDS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let words = string.split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    for (let jdx = 0; jdx < NUM_WORDS.length; jdx += 1) {
      if (words[idx].includes(NUM_WORDS[jdx])) {
        words[idx] = words[idx].replace(NUM_WORDS[jdx], jdx);
      }
    }
  }
  return words.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// function wordToDigit(string) {
//   let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     if (string.includes(numbers[idx])) {
//       string = string.replaceAll(numbers[idx], idx);
//     }
//   }
//   return string;
// }