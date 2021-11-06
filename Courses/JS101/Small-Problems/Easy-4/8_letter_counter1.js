/* JS101 - Small Problems > Easy 4 > 8. Letter Counter (Part 1)

Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: string
- output: object

Identify rules
- evaluate a string of zero or more words
- return an object which shows key/value pair of size of words and how many words of that size

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.
- input: string
- intermediary: array
- output: object

ALGORITHM
Steps for converting input to output
1. Split the string at every space into an array
2. Count the number of characters in each element of the array
3. for each element in the array
  - add a key to the object that represents the value of the number and initialize counter to 1
  - we add 1 to the corresponding key
4. return the object

CODE
Implementation of Algorithm
- test code while programming */

function wordSizes(words) {
  let count = {};
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

// Examples:
console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}

/* Discussion

The goal of this exercise is to count the number of words of each size. To do that, the solution first obtains a list of words by splitting the `words` argument string into an array of words. Computing the size of a word is easy, but incrementing the count for that word size is slightly trickier.

The solution stores the counts of word sizes as properties of the `count` object. It does this by iterating over the list of words and performing the following:

1. Initialize the `wordSize` variable to the `length` of the current word.
2. Check whether `wordSize` is equal to `0`. If yes, proceed immediately to the next iteration since there is no need to account for words of zero length.
3. Ensure that the property for the current `wordSize` in the `count` object exists and has a value. If the property does not exist (i.e., `count[wordSize]` evaluates to `undefined`), set it to `0`. Otherwise, just set it to its current value. Note that we use bang prefix here. This prefix converts the value to a `boolean` and reverses it.
4. Increment the count for a particular `wordSize` by `1`. */


// Laurent's Version
// function wordSizes(string) {
//   let returnedObject = {};
//   let numbersArray = string
//     .split(' ')
//     .map(string => string.length);

//   if (numbersArray.length === 1 && numbersArray[0] === 0) return returnedObject;

//   numbersArray.forEach(element => {
//     if (Object.keys(returnedObject).includes(String(element))) {
//       returnedObject[element] += 1;
//     } else {
//       returnedObject[element] = 1;
//     }
//   });

//   return returnedObject;
// }