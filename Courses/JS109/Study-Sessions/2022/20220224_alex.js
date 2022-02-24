/* Background:

In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. 
For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, 
because there are no words that begin with ん　in the Japanese language.

English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

For example: apple -> eggs -> salmon -> nut -> turkey ...

Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. 
If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

Problem
- input array of words
- output new array of words

Rules
- return an array of words in which the last letter of the previous word is the first letter of the subsequent words
- if pattern is not followed stop iterating
- if array is empty return an empty array
- if element is an empty string stop iterating and don't include in return array

Examples
- ['dog', 'goose', 'elephant' ...]

Data Structure
- input array of words
- inside array
- output an array

Algorithm
- declare `shiritori()` with `array` parameter
- init `result` array to array[0]
- iterate over array from idx 1 to end of array
  - if array idx - 1 last letter equals idx first letter
    - push array idx to result
  - else return result
- return `result` array

*/

function shiritori(array) {
  if (array.length === 0) return [];

  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === '') return result;
    if (
      idx === 0 ||
      array[idx - 1][array[idx - 1].length - 1] === array[idx][0]
    ) {
      result.push(array[idx]);
    } else {
      return result;
    }
  }

  return result;
}

console.log(shiritori(['', '', '', '', '', ''])); // [];
console.log(
  shiritori(['dog', 'goose', 'elephant', 'tiger', 'rhino', 'orc', 'cat'])
);
//,["dog","goose","elephant","tiger","rhino","orc","cat"]);

console.log(
  shiritori(['dog', 'goose', 'tiger', 'cat', 'elephant', 'rhino', 'orc'])
);
// //,["dog","goose"]);


/* [Kata Stats: Longest alphabetical substring \| Codewars](https://www.codewars.com/kata/5a7f58c00025e917f30000f1)
6 kyu
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

PROBLEM
- in: str
- out: str

Rules:
- we need to return longest substring that is in alphabetical order
- If there are multiple solutions, return the one that appears first.
- input is only lowercase
- repeated letters still count as alphabetical
- if its a single letter return that letter

DATA STRUCTURES
in: str
between: str
out: str

ALGO
- in: str
- if str length is 1 return string

- init longest = ''

- iterate through str
  - init temp = str[idx]
  
  - iterate through str(jdx = idx +1)
    - if str[idx] is <= str[jdx], temp += str[jdx]
      else: 
      - if temp length > longest length, longest = temp
      - break
- if temp length > longest length, longest = temp
- return longest
    
*/

function longest (string) {
  if (string.length === 1) return string;
  
  let longest = '';
  let temp = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    temp = string[idx];
    // console.log(temp)

    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      if (string[jdx - 1] <= string[jdx]) {
        temp = temp + string[jdx];
      } else {
        if (temp.length > longest.length) {
          longest = temp;
        }
        break;
      }
    }
  }

  if (temp.length > longest.length) {
    longest = temp;
  }

  return longest;
}

console.log(longest('abcdeapbcdef')) // === 'abcde');

console.log(longest('asd')) // === 'as');

console.log(longest('z') === 'z');
console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') ==='fgikl');

console.log(longest('zyba') === 'z');

function longest(str) {
  let result = '';
  let substring = str[0];

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx + 1] >= str[idx]) {
      substring += str[idx + 1];
    } else {
      if (substring.length > result.length) {
        result = substring;
      }
      substring = str[idx + 1];
    }
  }

  return result;
}

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



