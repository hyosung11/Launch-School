/* Scramblies - 5 kyu

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z).
No punctuation or digits will be included.
Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

PROBLEM
- input two strings
  - scrambled string
  - target word string
- output boolean
  - true if scrambled string can make the target word
  - false if it can't

Rules
- return true if letters in scrambled string can be made into word of the target string
- else return false
- only lowercase letters a-z in either string
- means no punctuation, or digits

EXAMPLES
- see below

DATA STRUCTURE
- input two strings
- intermediary: arrays
- output: boolean

ALGORITHM
- input two strings
- split strings into arrays by char and sort
- iterate through first array
  - if every char in first array is in second array
    - return true
- return false
*/

// Works but not optimized to pass performance tests on Codewars
function scramble(str1, str2) {
  let array1 = str1.split('');
  let array2 = str2.split('');

  if (array1.length < array2.length) {
    return false;
  }

  for (let idx = 0; idx < array2.length; idx += 1) {
    let char = array2[idx];

    if (array1.indexOf(char) === -1) return false;
    array1.splice(array1.indexOf(char), 1);
  }

  return true;
}

/* Alternative version
Algo
- input str1, str2
- initialize `count` to empty object
- iterate by char through str1
  - add char to `count`
  - or increment char in `count`
- iterate through str2 by char
  - subtract every instance of char from `count`
  - if every char from str2 can be subtracted from count
    - return true
- return false
*/
function scramble(str1, str2) {
  let count = {};

  str1.split('').forEach((char) => {
    count[char] ? count[char] += 1 : count[char] = 1;
  });

  return str2.split('').every((char) => {
    return count[char]--;
  });
}

console.log(scramble('rkqodlw', 'world') ===  true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
console.log(scramble('scriptsjava', 'javascripts') === true);
console.log(scramble('jscripts', 'javascript') === false);
console.log(scramble('aabbcamaomsccdd', 'commas') === true);
