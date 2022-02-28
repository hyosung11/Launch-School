/* 13:33 start session */

/*

Complete the function that

    accepts two integer arrays of equal length
    compares the value each member in one array to the corresponding member in the other
    squares the absolute value difference between those two values
    and returns the average of those squared absolute value difference between each member pair.


Examples

[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3

[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4

[-1, 0], [0, -1]              -->   1   because (1 + 1) / 2


13:34 start
13:57 

Problem
- input array1 and array2
- output number

Rules
- return number of the average of the squared absolute value difference between each element's pairs from each array
- numbers can be negative
- array lengths are equal

Examples
- reviewed

Data Structure
- input array1 and array2
- inside arrays
- output number

Algorithm
- declare `solution()` with `array1` and `array2`

- init `result` to 0

- iterate over array1
  - result = Math.abs(array1 at idx - array2[idx];
  - square result
  - sum squares
  - divide by length of array

- return `result`
*/


/*

Problem:
  Input: two arrays
  Output: number

Algorithm:
  define `solution()` with the parameters `array1` and `array2`
    declare `differences` and initialize it to `[]`
    iterate through `array1`
      push different between array1[i] and array2[i] `differences`

    squared each value of `differences`

    sum all the squares in `squaredDifferences`

*/
function solution (array1, array2) {

  let differences = [];

  for (let i = 0; i < array1.length; i += 1) {
    differences.push(array1[i] - array2[i]);
  }

  let squaredDifferences = differences.map(element => element ** 2);

  let sum = 0;

  for (let i = 0; i < squaredDifferences.length; i += 1) {
    sum = sum + squaredDifferences[i];
  }

  return sum / array1.length;
}

// Test cases:
console.log(solution([1,2,3],[4,5,6]) === 9)
console.log(solution([10,20,10,2],[10,25,5,-2]) === 16.5)
console.log(solution([0,-1], [-1,0]) === 1)

/* ============================================

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.


14:19 start

Problem
- input string
- output new string

Rules
- return the longest substring in alphabetical order
  - the same letter repeated is considered in alphabetical order
- input is only lowercase letters
- input will be at least one char long

Examples
- reviewed

Data Structure
- input string
- inside slices of string and compare them
- output new string

Algorithm
- declare `longest()` with `string` parameter
- init `result` to empty string
- init `substring` to string[0]

- iterate over string
  - set `tempString` to string at idx
  - if char at idx < char at idx + 1
    - increment the tempString with char at idx
    
    - if tempString length is greater than result length
      - reassign result to tempString

  - reset tempString to idx + 1

- return `result`

function longest (string) {

  let result = '';
  let tempString = '';
  
  for (let idx = 0; idx < string.length; idx += 1) {
    let tempString = string[idx]; // 'a'
    
    if (string[idx] <= string[idx + 1]) {
      tempString = tempString + string[idx + 1];
      console.log(tempString)
    }
    
    if (tempString.length > result.length) {
      result = tempString;
      tempString = string[idx + 1];
    }
    
    // console.log(tempString)
  }
  // console.log(result);
  return result;
}
*/


/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `longest()` with the parameter `string`

    declare `subSrings` and initialize it to an array of substrings of `string` // findSubstrings(string)

    declare `alphabeticalSubstrings` and inittialize it to a filtered array using `isAlphabetica(string)`

    sort `alphabeticalSubstrings` by string length

    return `alphabeticalSubstrings[0]`

  define `findSubstrings()` with the parameter string // return an array of substrings

  define `isAlphabetical()` with the parameter string // return boolean
    iterate through `string` stop iteration before string.length - 1
      if string at index[i] > string[i + 1]
        return false

*/

function longest(string) {
  let subStrings = findSubstrings(string);
  let alphabeticSubstrings = subStrings.filter(string => isAlphabetical(string));
  alphabeticSubstrings.sort((a, b) => b.length - a.length)
  return alphabeticSubstrings[0]
}

function findSubstrings(string) {
  let subStrings = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j <= string.length; j += 1 ) {
      subStrings.push(string.slice(i, j));
    }
  }

  return subStrings;
}

function isAlphabetical(string) {
  for (let i = 0; i < string.length - 1; i += 1) {
    if (string[i] > string[i + 1]) return false;
  }

  return true;
}

// Test cases:
console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl');
console.log(longest('z') === 'z');
console.log(longest('zyba') === 'z');

/* [Kata Stats: Longest alphabetical substring \| Codewars](https://www.codewars.com/kata/5a7f58c00025e917f30000f1)
6 kyu

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

11:24 start
11:34 algo done but got confused
11:42 solved

Problem
- input string
- output longest substring in alphabetical order

Rules
- return longest substring in alphabetical order
- input is only lowercase letters
- input will be at least on letter long
- if multiple solutions return the one that appears first
- a repeated letter keeps alphabetical order

Examples
- 'z' => 'z'

- 'asd' => 'as' because 'd' is not in alphabetical order after 's'

- 'nab => 'ab' because n is not in alphabetical order, so start with 'a' and then concatenate 'b'

'abcdeapbcdef' => 'abcde' because the next letter is 'a'

Data Structure
- input string
- inside iterate over string
- output string

Algorithm
- declare `longest()` with `string` parameter
- init `result` to ''
- init `substring` to string at index 0

- iterate over string
  - if string at idx + 1 >= string at idx
    - substring = substring + string at idx + 1
  - else
    - if substring length is greater than result length
      - result = substring
  - substring = string at idx + 1
  
- return result

*/

function longest (string) {

  let result = '';
  // get the first letter of the string as a starting point
  let substring = string[0];

  for (let idx = 0; idx < string.length; idx += 1) {
    // check the letter at idx with letter at idx + 1
    // check in the advancing direction, so I can increment if truthy
    if (string[idx + 1] >= string[idx]) {
      // if in alphabetical order, can increment substring
      substring = substring + string[idx + 1];

    } else {
      // after hitting falsy value
      // check the length of the substring against length of result
      if (substring.length > result.length) {
        // reassign result to substring because substring is longer
        result = substring;
      }
      // now I need to start with the next letter and check again
      substring = string[idx + 1];
    }
  }

  return result;
}

// console.log(longest('asd')) // === 'as');
// console.log(longest('nab')) // === 'ab');

console.log(longest('z') === 'z');
console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('zyba') === 'z');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') ==='fgikl');