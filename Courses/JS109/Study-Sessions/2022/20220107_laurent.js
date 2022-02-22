/*
Replace

- A character in a string
- A character in an array
- All characters
- Some characters
*/

let string = 'abcbe'; // 'aecee'
// function that replace every 'b' with an 'e'

// function replace(string) {
//   return string.replace(string[1], 'e');
// }

/*
function replace(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char === 'b') {
      result += 'e'
    } else {
      result += char;
    }
  }
  return result;
}
*/

function replace(string) {
  return string
    .split('')
    .map((char) => {
      if (char === 'b') return (char = 'e');
      else return char;
    })
    .join('');
}

console.log(replace(string));

 /*
Given an array and a string, return the number of times each letter of the array is encountered in the string. If the array is empty, return null. Case does not matter, any case counts for a given letter.

PROBLEM
- input: 
  - an array of letters
  - string
- output: object

Rules
- return the number of times each letter of the array is occurs in the string
- if array is empty return null
- case does not matter; upper or lower case letters each count once

EXAMPLES
- ['h'], 'Hi' => { h: 1 }

DATA STRUCTURE
- input an array and a string
- intermediary: populate an object
- output: object

ALGORITHM
- input array of strings, and a string
- initialize `result` to an empty object
- iterate through the string
  - convert string to lowercase
  - check each char of the string
    - if char exists in `result` increment its value in `result`
    - otherwise set char value in `result` to 1
- return `result` object
*/

/*
function countChars(array, string) {
  if (array.length === 0) return null;
  let result = {};

  for (let idx = 0; idx < array.length; idx ++) {
    let arrayLetter = array[idx].toLowerCase();

    for (let jdx = 0; jdx < string.length; jdx++) {
      let letter = string[jdx].toLowerCase();
      if (arrayLetter === letter) {
        result[letter] ? result[letter] += 1 : result[letter] = 1;
      }
    }
  }

  // if the char is in the array and not in the result object, add a property result[char] = 0
  array.forEach(char => {
    if (!Object.keys(result).includes(char)) result[char] = 0;
  })

  return result;
}
*/

function countChars(array, string) {
  let result = {};

  array.forEach(char => result[char.toLowerCase()] = 0);

  for (let key in result) {
    for (let index = 0; index < string.length; index += 1) {
      if (string[index].toLowerCase() === key) result[key] += 1;
    }
  }

  return result;
}

/*
Iterate over the array
  set result[char] to 0
{ a: 0, h: 0, b: 0 }

Iterate over the key of the object
  for each count the letters

*/

console.log(countChars([], 'Hi')); // null
console.log(countChars(['a'], '')); // { a: 0 }
console.log(countChars(['a', 'b'], '')); // { a: 0, b: 0 }
console.log(countChars(['a', 'b'], 'cd')); // { a: 0, b: 0 }
console.log(countChars(['h'], 'Hi')); // { h: 1 }
console.log(countChars(['H'], 'Hi, John')); // { h: 2 }
console.log(countChars(['a', 'b', 'o'], 'Bonjour, mon ami')); // { a: 1, b: 1, o: 3 }