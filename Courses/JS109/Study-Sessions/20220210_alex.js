/* 1844. Replace All Digits with Characters

  figured it out pretty easily */

/* Second to Last Capitalized

Given a string of words or a single word
return the string with the second to last occurrence of each letter capitalized.

Examples:
'hownowbrncow' => howNOWbrncow
'chickenbiscuits' => chiCkenbIScuits
'aabab' => 'aABab' 
aa // Aa
aaa // aAa

ALGO
-split into arr
-init obj

-iterate through arr backwards
  -obj[arr[idx]]? obj[arr[idx]] += 1 : obj[arr[idx]] = 1
  -if obj[arr[idx]] === 2
    -arr[idx].toUppercase
return arr.join('')
*/

function secondToLastCap(string) {
  let array = string.split('');
  let count = {};

  for (let idx = array.length - 1; idx >= 0; idx--) {
    count[array[idx]] = count[array[idx]] + 1 || 1;
    if (count[array[idx]] === 2) array[idx] = array[idx].toUpperCase();
    console.log(count) // {w: 1}
    console.log(array); // ['h', 'o', 'w', 'n', 'o', 'w', 'b', 'r', 'n', 'c', 'o', 'w'];
  }

  return array.join('')
}

// console.log(secondToLastCap('aaa')); // aAa
// console.log(secondToLastCap('aabaa')); // aabAa
console.log(secondToLastCap('aabab')); // aABab
// console.log(secondToLastCap('hownowbrncow'));  // howNOWbrncow


// function secondToLastCap(string) {
//   let result = '';
//   let charCount = {};

//   string
//     .split('')
//     .reverse()
//     .forEach((char) => {
//       charCount[char] ? (charCount[char] += 1) : (charCount[char] = 1);
//       if (charCount[char] === 2) {
//         result += char.toUpperCase();
//       } else {
//         result += char;
//       }
//     });

//   return result.split('').reverse().join('');
// }

/* ==========================

Find the Missing Letter
Write a function that takes an array of consecutive (increasing)
letters as input and that returns the missing letter in the array.

splice(start, deleteCount, item1, item2, itemN)

ALGO
-init alphabet str
-if arr[0] === arr[0].toUpperCase, alphabet = alphabet.toUppercase
-take a slice of alphabet str from alphabet.indexOf(arr[0]), alphabet.indexOf(array[array.length - 1] + 1))

-iterate through input arr
  if arr[idx] !== alphabet[idx]
  return alphabet[idx]
*/

// function findMissingLetter(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   if (array[0] === array[0].toUpperCase()) {
//     alphabet = alphabet.toUpperCase();
//   }

//   let section = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1);

//  for (let idx = 0; idx < array.length; idx++) {
//   if (array[idx] !== section[idx]) {
//     return section[idx];
//   }
//  }
// }


// console.log(findMissingLetter(['a', 'b', 'd']) === 'c');
// console.log(findMissingLetter(['b', 'c', 'e']) === 'd');
// console.log(findMissingLetter(['Q', 'R', 'T']) === 'S');
// console.log(findMissingLetter(['a','b','c','d','f']) === 'e');
// console.log(findMissingLetter(['O','Q','R','S']) === 'P');