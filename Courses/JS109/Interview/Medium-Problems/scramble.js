/* Scramblies - 5 kyu

Write function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2; otherwise, return false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.

PROBLEM
- input two strings
- output boolean

Rules
- if portion of characters in str1 can be rearranged to match str2 return true
- if not able to match return false
- only lowercase letters in input strings

EXAMPLES
- see below

DATA STRUCTURE
- input two strings
- output boolean

ALGORITHM
- input str1 and str2
- initialize array1 to value of splitting str1 into chars
- initialize array2 to value of splitting str2 into chars
- if length of array1 is shorter than length of array2 return false
- iterate through array2
  - if array1 does not have char in array2 return false
  - remove char from array1 that is in array2
- return true if all removed chars in array1 are in array2, false otherwise */

function scramble(str1, str2) {
  let array1 = str1.split('');
  let array2 = str2.split('');

  if (array1.length < array2.length) return false;

  for (let idx = 0; idx < array2.length; idx += 1) {
    if (array1.indexOf(array2[idx]) === -1) return false;
    array1.splice(array1.indexOf(array2[idx]), 1);
  }
  return true;
}

console.log(scramble('ab', 'abc') === false); // true
console.log(scramble('jjvaass', 'jjaasq') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true

// function scramble(str1, str2) {
//   let array1 = str1.split('');
//   let array2 = str2.split('');

//   if (array1.length < array2.length) {
//     return false;
//   }

//   for (let idx = 0; idx < array2.length; idx += 1) {
//     if (array1.indexOf(array2[idx]) === -1) {
//       return false;
//     }
//     array1.splice(array1.indexOf(array2[idx]), 1);
//   }
//   return true;
// }

// function scramble(str1, str2) {
//   let array1 = str1.split('');
//   let array2 = str2.split('');

//   if (array1.length < array2.length) {
//     return false;
//   }

//   for (let idx = 0; idx < array2.length; idx += 1) {
//     // the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
//     if (array1.indexOf(array2[idx]) === -1) {
//       return false;
//     }
//     // The splice() method changes the content of an array by removing or replacing existing elements and/or adding new element in place.
//     array1.splice(array1.indexOf(array2[idx]), 1);
//   }

//   return true;
// }

// function scramble(str1, str2) {
//   let array1 = str1.split('');
//   let array2 = str2.split('');

//   if (array1.length < array2.length) {
//     return false;
//   }

//   for (let idx = 0; idx < array2.length; idx += 1) {
//     if (array1.indexOf(array2[idx]) === -1) {
//       return false;
//     }
//     // returns an array of the deleted elements
//     console.log(array1.splice(array1.indexOf(array2[idx]), 1));
//   }
//   return true;
// }