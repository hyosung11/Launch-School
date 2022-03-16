/* Largest Swap

Write a function that takes a two-digit number and determines
if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true

If 27 is our input, we should return false 
because swapping the digits gives us 72, and 72 > 27. 
On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples

largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true 

Notes

Numbers with two identical digits (third example)
should yield true (you can't do better).

6:14 start

PROBLEM
- in: num
- between: string
- out: boolean

Rules
- if first digit is greater than or equal to second, return true; otherwise return false
- (we're getting a 2-digit number)
- if nums are equal return true

ALGORITHM
- in: num
- turn into a str
- if str[0] >= str[1] return true
*/

function largestSwap(num) {
  let str = String(num);
  return str[0] >= str[1];
}

console.log(largestSwap(27) === false); // '27 < 72, so not largest swap.')
console.log(largestSwap(43) === true); // '43 > 34, so largest swap.')
console.log(largestSwap(14) === false); // '14 < 41, so not largest swap.')
console.log(largestSwap(53) === true); // '53 > 35, so largest swap.')
console.log(largestSwap(99) === true); // 'Cannot do better, so largest swap.')

/* 821. Shortest Distance to a Character - Leetcode

Given a 'string' and a char that occurs in 'string', return an arr of integers where arr.length == string.length and arr[idx] is the distance from idx to the closest occurrence of 'char' in 'string'.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.

The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.

For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

Input: s = "aaab", c = "b"
Output: [3, 2, 1, 0]

1 <= s.length <= 104
s[i] and c are lowercase English letters.
It is guaranteed that c occurs at least once in s.


6:20 start
6:38 


PROBLEM
- in: str, char
- out: arr of nums

- return an array in which each letter in the word is mapped to the distance between idx position and closest occurrence of 'char'
- all lowercase
- char guaranteed to be in str

DATA STRUCTURES
- in: str, char
- between: arr
- out: arr

ALGO
- init results arr
- split str into an arr

- iterate through arr
  - init temp arr = []
  - second loop (jdx)
    - if str[jdx] === char
      - push abs(idx - jdx) to temp arr
  - sort arr in ascending order
  - push tempArr[0] into result arr
- return result
  */

function shortestToChar (str, char) {
  let results = [];
  let arr = str.split('');
  
  for (let idx = 0; idx < arr.length; idx++) {
    let tempArr = [];
    
    for (let jdx = 0; jdx < arr.length; jdx++) {
      if (str[jdx] === char) tempArr.push(Math.abs(idx - jdx));
    }
    tempArr = tempArr.sort((a, b) => a - b);
    results.push(tempArr[0]);
  }
  return results;
}

console.log(shortestToChar('aaab', 'b'));
// Ouput: [ 3, 2, 1, 0 ]

console.log(shortestToChar('aaabaab', 'b'));
// Output: [3, 2, 1, 0, 1, 1, 0]

console.log(shortestToChar('loveleetcode', 'e'));
//  Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1 ,0]


function shortestToChar(string, letter) {
  let result = [];
  let indexes = [];

  string.split('').forEach((char, idx) => {
    if (char === letter) indexes.push(idx)
  });

  for (let idx = 0; idx < string.length; idx++) {
    let differences = indexes.map(index => Math.abs(index - idx));
    result.push(Math.min(...differences));
  }

  return result;
}

/* Scramblies - 5 kyu

Write function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2; otherwise, return false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.

06:43 start

PROBLEM
- in: str1, str2
- out: boolean

Rules
- return true if all char in str2 are in str1 (including repeated char)
- all lowercase

ALGO

- loop through str2
  - if str1 doesnt include currrent char return false
  - delete current char from str1
- return true
*/

function scramble (str1, str2) {
  for (let idx = 0; idx < str2.length; idx++) {
    if (!str1.includes(str2[idx])) return false;
    str1 = str1.replace(str2[idx], '');
  }
  return true;
}

console.log(scramble('ab', 'abc') === false); // true
console.log(scramble('jjvaass', 'jjaasq') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true