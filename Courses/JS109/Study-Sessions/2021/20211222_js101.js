/* JS100/101 Study Session with PEDAC

Introductions
- Antonina, Greece
- Michelle, just learning PEDAC, reading articles, JS prep material
- Jeff, refresher, live on Long Island
- Alex, getting ready to take the written assessment
- Michael, studying for interview
- H, watched videos

Problem Description

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only alphabets and numeric digits.

PEDAC Process

PROBLEM
- Understand the Problem
  - requirements
  - ask the interviewer for clarification
  - identify the input and output

input: string
output: integer

Rules
- case-insensitive
- input string may contain letters and/or digits
- return the number of characters that occur more than once (if it occurs more than twice, just increment count once)
- empty string will return 0

EXAMPLES / TEST CASES
console.log(duplicateCount("")); // === 0
console.log(duplicateCount("abcde")); // === 0
console.log(duplicateCount("abcdeaa")); // === 1
console.log(duplicateCount("abcdeaB")); // === 2
console.log(duplicateCount("Indivisibilities")); // === 2

DATA STRUCTURE
- input: string
- intermediary:
  - object with letters as keys and counts as values
  - for loop to iterate through input string
  - Object.values
- output: number

ALGORITHM
- input string
- initialize `result` to an empty object
- iterate through string char by char
  - convert char to lowercase
  - check if char in `result` object
    - add char to `result` object
    - if char exists in `result` object increment value of char by 1
- iterate through object's values
  - filter out values greater than 1
  - get number by returning length
- return number representing chars in `result` greater than 1 */

function duplicateCount(string) {
  let result = {};

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx].toLowerCase();
    result[char] ? result[char] += 1 : result[char] = 1;
  }

  return Object.values(result).filter(charCount => charCount > 1).length;
}

console.log(duplicateCount("")); // === 0
console.log(duplicateCount("abcde")); // === 0
console.log(duplicateCount("abcdeaa")); // === 1
console.log(duplicateCount("abcdeaB")); // === 2
console.log(duplicateCount("Indivisibilities")); // === 2

//Michael's Algo
//define function
//declare a conter to be initialized to 0
//declare an object so that we can store the amount of letters
//iterate through all the letters of the string and make them lowercase
  //if char already exists as a key in object, 
  //initialize the property for the current character to 0
//incrment object by 1
//convert the object values to an array of values
  //iterate through that array
    //if the element is greater than 1; incrment the counter by 1
//return the counter

// function duplicateCount(string) {
//   let counter = 0;
//   let result = {};
//   let lowerCaseString = string.toLowerCase();

//   for (let i = 0; i < lowerCaseString.length; i++) {
//     if (!result[lowerCaseString[i]]) {
//       result[lowerCaseString[i]] = 0;
//     }
//     result[lowerCaseString[i]]++;
//   }
//   let arrayOfValues = Object.values(result);
//   for (let i = 0; i < arrayOfValues.length; i++) {
//     if (arrayOfValues[i] > 1) {
//       counter += 1;
//     }
//   }

//   return counter;
// }