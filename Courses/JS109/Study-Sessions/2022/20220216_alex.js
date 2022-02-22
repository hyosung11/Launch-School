/* Mexican Wave

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat 

PROBLEM
- in: str
- out: arr

Rules 
- skip over spaces
- return an array in which the original string is repeated with each letter of the string capitalized in turn
- empty string returns an empty array

DATA STRUCTURES
- in: str
- between: arr
- out: arr
 
ALGO
- init result array

- iterate through str
  result.push(str.slice (0, idx) + str[idx].toUpperCase + str.slice(idx + 1))
*/

function wave(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === ' ') continue;
    result.push(
      string.slice(0, idx) + string[idx].toUpperCase() + string.slice(idx + 1)
    );
  }

  return result;
}

console.log(wave(' gap ')); // [" Gap ", " gAp ", " gaP "]

console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave('codewars')); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

console.log(wave('')); // []

console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]


/* Advanced B-12 complex */
/* `longestPalindrome`

Find the length of the longest substring in the given string that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

Problem
- input string
- output number

Rules
- return the length of the longest substring that is a palindrome
- assume all input letters are lowercase
- input includes numbers
- what about invalid input or empty string?

Examples
- reviewed

Data Structure
- input string
- get substrings, length of longest substring that's a palindrome
- output number

Algorithm
- declare `longestPalindrome` function with `string` parameter
- init `substrings` to `getSubstrings` helper function
- pass substring through `isPalindrome` helper function
- sort substrings that are palindromes by descending order of length
- return the first element's length

getSubstrings
- input string
- init `substrings` to empty array
- iterate outer loop over string
  - iterate inner loop over string
    - slice string at idx, jdx
    - push slice to `substrings`
- return substrings

isPalindrome
- input string
- split string into chars
- reverse char
- join chars
- return reversed string === input string

*/

function longestPalindrome (str) {

  let substrings = getSubstrings(str);
  let palindromes = substrings.filter(substring => isPalindrome(substring));

  return longest(palindromes).length;
}

function getSubstrings (string) {

  let substrings = [];
  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx  + 1; jdx <= string.length; jdx++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

function isPalindrome (string) {

  return string === string.split('').reverse().join('');
}

function longest (arr) {

  arr.sort((a, b) => b.length - a.length);
  return arr[0];
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9