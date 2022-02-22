/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

PROBLEM
input: 2 strings
output: Boolean

rules:
-compare two strings and if the same substring comprising 2 or more letters appears in both words return true
-empty strings return false
-numbers are allowed
-case doesn't matter
 
questions:
-can we assume the strings won't have spaces?

EXAMPLES
done 

DATA STRUCTURES
input: 2 strings
intermediary: substrings
output: Boolean

ALGO:
- input string1 and string2
-loop through string1 
  -take a substring from index to index + 2
  -if string2 includes substring return true
return false
- return boolean
*/

// function substringTest(str1, str2) {
//   for (let idx = 0; idx < str1.length - 1; idx += 1) {
//     let substring = str1.slice(idx, idx + 2);
//     if (str2.toLowerCase().includes(substring.toLowerCase())) return true;
//   }
//   return false;
// }

// console.log(substringTest('', '') === false); // true
// console.log(substringTest('test', '111t') === false); // true
// console.log(substringTest('', 'Something') === false); // true
// console.log(substringTest('Something', '') === false); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('Something', 'Home') === true); // true-
// console.log(substringTest('BANANA', 'banana') === true); // true
// console.log(substringTest('1234567', '541265') === true); // true
// console.log(
//   substringTest(
//     'supercalifragilisticexpialidocious',
//     'Sou dOfItIsAtrocious'
//   ) === true
// ); // true

/* Given 2 strings, your job is to find the longest substring that appears in both strings that is at least two characters long.

PROBLEM
input: 2 strings
output: longest substring common to both input strings

rules:
- compare two strings and find the longest substring common to both input string of at least two characters
- if no common substring or substring in common is less than 2 characters return an empty string
- numbers are allowed
- case doesn't matter

questions:
-can we assume the strings won't have spaces?

EXAMPLES
done

DATA STRUCTURES
input: 2 strings
intermediary: substrings
output: substring

ALGO:
- input string1 and string2
- initialize `longestString` to an empty string
- loop through string1 from 0 to length - 1
  - loop through string1 from 0 to length - 1
    -take a `substring` from 0 to index + 2
    -if string2 (lowercase) includes substring (lowercase) and substring length is greater than longestString length, reassign longestString to substring (lowercase)
- return longestString */

function substringTest(string1, string2) {
  if (string1.length < 2 || string2.length < 2) return '';
  let longestString = '';

  for (let idx = 0; idx < string1.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string1.length; jdx += 1) {
      let substring = string1.slice(idx, jdx).toLowerCase();
      // console.log(substring);
      if (string2.toLowerCase().includes(substring) && substring.length > longestString.length) {
        longestString = substring;
      } else if (longestString.length < 2) return '';
      // console.log(longestString);
      }
  }
  return longestString;
}

// console.log(substringTest('', '') === ''); // true
// console.log(substringTest('test', '111t') === ''); // true
// console.log(substringTest('', 'Something') === ''); // true
// console.log(substringTest('Something', '') === ''); // true
// console.log(substringTest('Something', 'Fun') === ''); // true
// console.log(substringTest('Something', 'Home') === 'ome'); // true-
// console.log(substringTest('BANANA', 'banana') === 'banana'); // true
// console.log(substringTest('1234567', '541265') === '12'); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === 'ocious'); // true