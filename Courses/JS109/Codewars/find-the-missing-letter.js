/* Find the missing letter - 6 kyu

Write a method that takes an array of consecutive (increasing) letters as input and returns the missing letter in the array.

You will always get a valid array. And it will always be missing exactly one letter. The length of the array will always be at least 2. The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

PROBLEM
- input array of letters
- return the one missing letter in the sequence as a string

Rules
- return the missing letter in the array of letters
- only one letter is missing
- length of array is two or more
- letters in array are either all caps or all lowercase
- use the 26 letters of the English alphabet
- how to handle capitalization?

EXAMPLES
- ['a','b','c','d','f'] -> 'e' => 'e' is the missing letter
- ['O','Q','R','S'] -> 'P' => 'P' is the missing letter

DATA STRUCTURE
- input: array
- intermediary: array
- output: string

ALGORITHM
- input array of letters in alphabetical order (either lowercase or uppercase)
- initialize `alphabet` to 'a-z'
- if the first value from the input array is an uppercase letter
  - reassign `alphabet` to uppercase
- initialize `firstIndex` to the first value in the input array's index in the alphabet string
- initialize `lastIndex` to the lastValue in the input array's index in the alphabet string + 1
- initialize `sequence` to the alphabet string sliced from firstIndex to lastIndex
- iterate over sequence and on each round of iteration:
  - if the current letter is not included in the input array
    - return that letter
*/
function findMissingLetter(array) {
  // initialize `alphabet` to 'a-z'
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // check if the first element of the input array is upper case (all elements will be this same case)
  if (array[0] === array[0].toUpperCase()) {
    // since the default alphabet letters are lowercase, if the first letter in the input array is uppercase, we have to change all the letters of our alphabet string lookup to uppercase
    alphabet = alphabet.toUpperCase();
  }
  // ['a', 'b', 'c', 'd', 'f']
  // set a starting index position in the alphabet lookup string as a reference for iterating through the input array. We start at the first letter in the input string which is at index position 0 of the array that corresponds with its position in the alphabet string. So if the first letter in the array is 'a' that is position 0 in the alphabet string. If the first letter in the array is 'c' that's idx[2] in the alphabet string
  let firstIndex = alphabet.indexOf(array[0]); // this is an index position which is located somewhere along the alphabet
  // + 1 to account for the missing letter?
  // we want to figure out where to end our iteration through the alphabet string based on what the last element is in the input array. Since array's have zero-based indexing and we have to account for the missing letter that we're trying to find, we need to add one to the last index position. Remember that the last element in an array is at array.length - 1, so we go to there and add 1
  let lastIndex = alphabet.indexOf(array[array.length - 1]) + 1;
  // now we have the start index and end index for our sequence; the sequence is the section of the alphabet string that we are going to use to check each element of the input array. as long as the element in the input array is in the alphabet sequence that we have defined, we move to the next element; if the element is not found in the alphabet string, we stop iterating and we return that element that was missing from the sequence
  let sequence = alphabet.slice(firstIndex, lastIndex);

  for (let idx = 0; idx < sequence.length; idx++) {
    if (!array.includes(sequence[idx])) return sequence[idx];
  }
}

// function findMissingLetter(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   if (array[0] === array[0].toUpperCase()) {
//     alphabet = alphabet.toUpperCase();
//   }

//   let firstIndex = alphabet.indexOf(array[0]);
//   let lastIndex = alphabet.indexOf(array[array.length - 1]) + 1;
//   let sequence = alphabet.slice(firstIndex, lastIndex);

//   for (let idx = 0; idx < sequence.length; idx++) {
//     if (!array.includes(sequence[idx])) return sequence[idx];
//   }
// }

// using `charCodeAt`
// function findMissingLetter(array) {
//   // set the code unit of the first element in the array
//   let first = array[0].charCodeAt(0);
//   // console.log(first); 97
//   for (let idx = 0; idx < array.length; idx++) {
//     if (first + idx !== array[idx].charCodeAt(0))
//     return String.fromCharCode(first + idx);
//   }
// }

// function findMissingLetter(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   if (array[0] === array[0].toUpperCase()) {
//     alphabet = alphabet.toUpperCase();
//   }

//   let start = alphabet.indexOf(array[0]);
//   console.log(start) // 14
//   let end = alphabet.indexOf(array[array.length - 1]) + 1;
//   console.log(end); // 19
//   let sequence = alphabet.slice(start, end);
//   console.log(sequence); // OPQRS

//   // iterate by each char of sequence (use the length property!!!!!)
//   for (let idx = 0; idx < sequence.length; idx++) {
//     // check if the array has the element of the sequence, if it doesn't that's the missing letter to return!!!!
//     if (!array.includes(sequence[idx])) return sequence[idx];
//   }
// }

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // === 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // === 'P');

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']) === 'e');
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']) === 'P');
