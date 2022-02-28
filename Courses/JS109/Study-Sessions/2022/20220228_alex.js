/* [Kata Stats: Longest alphabetical substring \| Codewars](https://www.codewars.com/kata/5a7f58c00025e917f30000f1)
6 kyu

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

6:02 start

Problem
- input string
- output new string

Rules
- return the longest alphabetical substring
- all inputs are lowercase chars
- input at least one letter long (no empty strings)
- if multiple solutions, return the one that appears first
- the same letter repeating is alphabetical

Examples
- 'abcdeapbcdef' => 'abcde' same length as bcdef but appears first

Data Structure
- input string
- inside array (sort, filter)
- output string

Algorithm
- declare `longest()` with parameter `string`
- init `substrings` to `getSubstrings` helper function
- init `alphabeticalSubstrings` to filter `substrings with `isAlphabetical` helper function
- sort `alphabeticalSubstrings` from longest to shortest
- return the alphabeticalSubstring at index 0

`getSubstrings()`
- input string
- init `substrings` to empty array
- iterate over string with outer loop
  - iterate over string with inner loop
    - slice string at idx, jdx
    - push slice to `substrings`
- return `substrings`

`isAlphabetical()`
- return string === string.split('').sort().join('')

*/

function longest(string) {
  let substrings = getSubstrings(string);
  let alphabeticalSubstrings = substrings.filter((substring) =>
    isAlphabetical(substring)
  );

  alphabeticalSubstrings.sort((a, b) => b.length - a.length);

  return alphabeticalSubstrings[0];
}

function getSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      substrings.push(string.slice(idx, jdx));
    }
  }
  return substrings;
}

function isAlphabetical(string) {
  return string === string.split('').sort().join('');
}

console.log(longest('z') === 'z');
console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('zyba') === 'z');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl');


/* Sort Strings by Vowels

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.


06:31 start

Problem
- input array of strings
- output array of strings

Rules
- return an array of strings sorted in descending order of length based on the longest contiguous sequence of vowels in the string
- if two or more strings in the array have same length return in same order as they appeared in the input array

Examples
- reviewed

Data Structure
- input array of strings
- inside helper function
- output array

Algorithm
- declare `sortStringsByVowels()` with parameter `array`
- return array sortedb by length of longest vowel chain

`longestVowelChain()`
- input string
- get all substrings with `getSubstrings` helper function
- filter substrings that `onlyHasVowels`
- sort substrings in descending order of length
- return substrings[0]

getSubstrings()
- input string
- init `substrings`
- iterate over string outer loop
  - iterate over string inner loop
    - slice string from idx, jdx
    - push slice to `substrings`
- return `substrings`

onlyHasVowels()
- input string
- init `vowels` to 'aeiouAEIOU`
- split string into array
- return array.every(char => vowels.includes(char))

*/
// doesn't work with an array element that is an empty string
function sortStringsByVowels (array) {
  return array.sort((a, b) => longestVowelChain(b) - longestVowelChain(a));
}

function longestVowelChain (string) {
  let substrings = getSubstrings(string);
  let vowelsOnly = substrings.filter(substring => onlyHasVowels(substring));
  vowelsOnly.sort((a, b) => b.length - a.length);
  return vowelsOnly[0].length
}

function getSubstrings (string) {
  let substrings = [];
  
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

function onlyHasVowels (string) {
  let vowels = 'aeiouAEIOU';
  return string.split('').every(char => vowels.includes(char));
}

console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN'])) // === ['GREEEN', 'AIBRH','YOUNG', '']);

// console.log(sortStringsByVowels(["aa","eee","oo","iiii"]));//,["iiii","eee","aa","oo"]);
// console.log(sortStringsByVowels(["a","e","ii","ooo","u"]))//,["ooo","ii","a","e","u"]);
// console.log(sortStringsByVowels( ["ioue","ee","uoiea"]))// , ["uoiea", "ioue","ee"]);
// console.log(sortStringsByVowels( ["high","day","boot"]))// , ["boot","high","day"]);    
// console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]))// , ["uuu","Yuuuge!!","none"]);
// console.log(sortStringsByVowels(["how about now","a beautiful trio of"]))// , ["a beautiful trio of","how about now"]);
// console.log(sortStringsByVowels(['jyn', 'joan', 'jimmy', 'joey'])) //=== ['joan', 'joey', 'jimmy', 'jyn']);

// console.log(sortStringsByVowels(['uijijeoj', 'lkjlkjww2', 'iiutrqy'])) // === ['iiutrqy', 'uijijeoj', 'lkjlkjww2']);