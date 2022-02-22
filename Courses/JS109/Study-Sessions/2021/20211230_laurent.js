/* PROBLEM DESCRIPTION

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in the array. The order of the numbers in the input array should not matter.

Input: array
Output: array (of arrays) or an empty array

Rules:
 - all pairs with a difference of 2
 - return arrays in ascending order
 - no duplicate number
 - result, we can use a number 2 times

Algorithm
Sort the given array in ascending order
Declare a variable `result` assigned to an empty array

For each number of the array, check if this number + 2 exists
  If it does not match, we continue
  If it does match, we want to add the number and number + 2 to the `result` array, add the pair as an array

Return the `result` array */

function differenceOfTwo(nums) {
  let sortedNums = nums.slice(0).sort((a, b) => a - b);
  let result = [];

  for (let idx = 0; idx < sortedNums.length - 1; idx += 1) {
    let number = sortedNums[idx];
    // check the sorted array not the result array which has nothing until we push to it. Ugh. Get it.
    if (!sortedNums.includes(number + 2)) continue;
    else result.push([number, number + 2]);
  }

  return result;
}

// function differenceOfTwo(array) {
//   array.sort((a, b) => a - b);
//   let result = [];

//   for (let index = 0; index < array.length - 1; index += 1) {
//     let number = array[index];
//     if (!array.includes(number + 2)) continue;
//     else result.push([number, number + 2]);
//   }

//   return result;
// }

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

/* ===========
Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Input: string
Output: string

Rules:
 - words separated by a space
 - only lowercase words
 - return the first match if scores are equal
 
Data structure
 - string
 - array = [_abcdefghijklmnopqrstuvwxyz];
 - object
 
Algorithm 
APPROACH 1
Declare a variable `alphabet` [_abcdefghijklmnopqrstuvwxyz]
Declare a variable `highScore` to track the highest score
Declare a variable `highScoreIndex` to track the index of the word in the `wordArray`

Declare a variable `wordArray` by splitting the string

Iterate over the array, for each word, we want to sum the score of their individual characters
  Declare a variable `wordScore` to keep track of the word score and assign it to 0
  For each letter of the word
    Get the score of the letter (finding the index of the character in the array alphabet
    Add this score to `wordScore`
  If wordScore is higher than highScore, 
    reassign highScore to wordScore
    reassign highScoreIndex to index of the word

Return the word at the highScoreIndex place */

function alphabetScore(string) {
  if (string === '') return '';

  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  let highScore = 0;
  let highScoreIndex = null;

  let wordArray = string.split(' ');

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let wordScore = 0;
    let word = wordArray[idx];

    for (let jdx = 0; jdx < word.length; jdx += 1) {
      let char = word[jdx];
      wordScore += alphabet.indexOf(char);
    }

    if (wordScore > highScore) {
      highScore = wordScore;
      highScoreIndex = idx;
    }
  }

  return wordArray[highScoreIndex];
}

// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');