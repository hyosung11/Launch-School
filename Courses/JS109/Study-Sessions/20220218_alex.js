/* Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

PROBLEM
- in: str
- out: str

Rules
- transform every written-out number under ten into the digit version of that number
- if word has punctuation, make sure only word gets changed and punctuation is preserved

DATA STRUCTURES
in: str
between: arr
out: str

ALGO
- in: str
- init nums to ['zero', 'one','two', etc]

- split str by spaces
- iterate through words
  - iterate through nums
    - if words[idx].includes nums[jdx]
      -words[idx] = words[idx].replace(nums[jdx], jdx) 
- return words joined by spaces
*/

function wordToDigit(string) {
  let numbers = [
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
    for (let jdx = 0; jdx < numbers.length; jdx += 1) {
      if (words[idx].includes(numbers[jdx])) {
        words[idx] = words[idx].replace(numbers[jdx], jdx);
      }
    }
  }

  return words.join(' ');
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* Edris */
function wordToDigit(string) {
  string = string.split(' ');
  let wordNums = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
  }

  for (let index in string) {
    let word = string[index];
    if (wordNums.hasOwnProperty(word)) {
      string[index] = wordNums[word];
    }
  }

  return string.join(' ');
}

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach((word) => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

/*
Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly. 

ALGO
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.
- init newArray to a sliced copy of arr and shift off the first element
- push the first element of arr to the newArray
- return newArray
*/


function rotateArray (arr){
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let newArray = arr.slice(1);
  newArray.push(arr[0]);
  return newArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917