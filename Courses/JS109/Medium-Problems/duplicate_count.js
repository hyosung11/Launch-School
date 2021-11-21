/* Duplicate Count

Problem Description
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits. */

// Test Cases
console.log(duplicateCount("")) == 0
console.log(duplicateCount("abcde")) == 0
console.log(duplicateCount("abcdeaa")) == 1
console.log(duplicateCount("abcdeaB")) == 2
console.log(duplicateCount("Indivisibilities")) == 2

/* Javi
input: string
output: number

Must return the number of character that repeat more than once

algorithm

- split the string to an array
- create an empty object
- iterate over the array
  -If there isn't a key with the character name on the object create it an assign the value 1
  -If there is a key with the character name, add one to the value
- Look how many keys has values grater than 1
- Return that value
*/

function duplicateCount(str) {
  let splitString = str.split('');
  let obj = {};
  splitString.forEach(char => {
    if (Object.keys(obj).includes(char.toLowerCase())) {
      obj[char.toLowerCase()] += 1;
    } else {
      obj[char.toLowerCase()] = 1;
    }
  });
  let result = Object.entries(obj);
  let count = 0;
  result.forEach(arr => {
    if (arr[1] > 1) count += 1;
  });
  return count;
}

/*
function does too much
create a helper function
use toLowerCase just once
*/