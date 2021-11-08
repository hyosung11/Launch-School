/* JS101 - Small Problems > List Processing > 2. Alphabetical Numbers

Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen */

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

  // => [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/* Discussion

For this exercise, the first part to consider is what data structure to use for looking up the word counterpart of each number. The solution handles this by providing an array of words mapped to their index. The second part to consider is how to sort the numbers. For this one, the solution leverages the `Array.prototype.sort` method.

The `sort` method is a higher-order function that can be passed a sorting function as a callback. In this solution, the callback function passed to `sort` is the `wordSort` function. To perform the word lookups, `wordSort` uses the `NUMBER_WORDS` array defined at the top level. The function performs the comparison by comparing the word equivalent of each number (`num1` and `num2`) accessed through their indices.

We apply `sort` to the return value of `[...array]`, which uses array deconstruction to create a shallow copy of the array. We do this since `sort` mutates the array it is called on, but we don't want to mutate the array in this code.

Further Exploration

The `Array.prototype.sort` method can also take a function expression as an argument. If you didn't use one the first time, try refactoring the solution using a function expression. */

// Alex's Solution
// function alphabeticNumberSort(arr) {
//   let key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   let words = arr.map(index => key[arr[index]]);

//   words.sort();

//   return words.map(elem => key.indexOf(elem));
// }

/*
Problem
- given an array of integers between 0 to 19
- return an array of those integers sorted based on the english
word for each number
- INput: array
- Output: array

Test Cases/Examples
- given

Data Structure
- array

Algorithm
- numbersEnglish = array that holds the numbers in english word
- sortedNumbersEnglish = numbersEnglish.slice().sort();
  sort(); sort based on string comparison
- sortedNumbers = sortedNumbersEnglish
  .map(numEnglish => numbersEnglish.indexOf(numEnglish))

Code */

// function alphabeticNumberSort(arr) {
//   const NUMBERS_ENGLISH = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//   let sortedNumbersEnglish = NUMBERS_ENGLISH.slice().sort();
//   let sortedNumbers = sortedNumbersEnglish.map(numEnglish => {
//     return NUMBERS_ENGLISH.indexOf(numEnglish);
//   })
//   return sortedNumbers;
// }

// console.log(alphabeticNumberSort(
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));