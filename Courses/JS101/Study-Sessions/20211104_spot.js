/* SPOT Study Session with Josh Keller

Introductions
- Josh Keller, Kalamazoo, MI, finished Core this week
- Alex, NJ, lost some momentum going back to teaching, commune with other people, activate dormant part of my brain
- Manny, CA, joining groups, need to review a lot
- Danny, Phoenix, JS101 L3, no expectations, meet people
- Michael, Italy, studying for JS109 written assessment, breaking down snippets
- H,
- Ben Perrault, JS210

/* 1. Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- reverse the words in the string

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary: array
- output: string

ALGORITHM
Steps for converting input to output
- split the string at each word into an array
- reverse the elements in the array
- join the elements of the array into a string at each space
- return the string

CODE
Implementation of Algorithm
- test code while programming
*/

// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/* 2. Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string of words
- output: string of words

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- return a new string of words containing the words from the string argument
- if word has 4 or less letters, return that word
- if word has 5 or more letters, reverse the order of the letters

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary: array
- output: string

ALGORITHM
Steps for converting input to output
- initialize variable to an empty array
- split the string of words into an array at each space
- loop through the array of words
  - check the length of the element in the array
    - if element 4 or less letters
      - add to the array as is
    - if element 5 or more letters
      - reverse the letters
      - add element to the array
  - join elements to a string
- return string

CODE
Implementation of Algorithm
- test code while programming */

function reversedWord(word) {
  return word.split('').reverse().join('');
}

function reverseWords(words) {
  let arrayOfWords = [];
  words = words.split(' ');

  words.forEach((word) => {
    if (word.length <= 4) {
      arrayOfWords.push(word);
    } else if (word.length > 4) {
      arrayOfWords.push(reversedWord(word));
    }
  });

  return arrayOfWords.join(' ');
}
console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

// Josh's Version
// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

// function reverseWord(word) {
//   let letters = word.split('');
//   let reversedLetters = letters.reverse();
//   return reversedLetters.join('');
// }

// function reverseWords(words) {
//   let arrayOfWords = [];
//   words = words.split(' ')

//   for (let index = 0; index < words.length; index += 1) {
//     if (words[index].length <= 4) {
//       arrayOfWords.push(words[index]);
//     } else {
//       if (words[index].length > 4) {
//         let reversedWord = reverseWord(words[index]);
//         arrayOfWords.push(reversedWord);
//       }
//     }
//   }
//   return arrayOfWords.join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// Version with helper function - I like this version
// function reverseWord(word) {
//   // let letters = word.split('');
//   // let reversedLetters = letters.reverse();
//   // return reversedLetters.join('');
//   return word.split('').reverse().join('');
// }

// function reverseWords(words) {
//   let arrayOfWords = [];
//   words = words.split(' ');

//   words.forEach(word => {
//     if (word.length <= 4) {
//       arrayOfWords.push(word);
//     } else {
//       arrayOfWords.push(reverseWord(word));
//     }
//   });

//   return arrayOfWords.join(' ');
// }

// function reverseWord(word) {
//   return word.split('').reverse().join('');
// }

// function reverseWords(words) {
//   let arrayOfWords = [];
//   words = words.split(' ');

//   words.forEach((word) => {
//     if (word.length <= 4) {
//       arrayOfWords.push(word);
//     } else {
//       arrayOfWords.push(reverseWord(word));
//     }
//   })

//   return arrayOfWords.join(' ');
// }

// console.log(reverseWords('Professional')); // "lanoisseforP"
// console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School')); // "hcnuaL loohcS"
