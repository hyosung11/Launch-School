/* 06:05

[Kata Stats: Count and Group Character Occurrences in a String \| Codewars](https://www.codewars.com/kata/543e8390386034b63b001f31)
6 kyu
Write a method that takes a string as an argument and groups the number of time each character appears in the string as a hash sorted by the highest number of occurrences.

The characters should be sorted alphabetically e.g:

get_char_count("cba")// => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as lowercase ones

Mississippi
{m:1, i: 4, s: 4, p: 2}

- iterate through entries
  -
*/
/* [Kata Stats: Count and Group Character Occurrences in a String \| Codewars](https://www.codewars.com/kata/543e8390386034b63b001f31)
6 kyu

Write a method that takes a string as an argument and groups the number of times each character appears in the string as a hash sorted by the highest number of occurrences.

The characters should be sorted alphabetically e.g.:

get_char_count("cba")// => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as lowercase ones.

Mississippi
firstObj = {m:1, i: 4, s: 4, p: 2}
[[m, 1], [i, 4], [s, 4], [p, 2]]
init finalObj = {1: []} 
- iterate through entries
  - finalObj[entries[idx][1]]? finalObj[entries[idx][1]].push(entries[idx][0]) : finalObj[entries[idx][1]] = [[entries[idx][0]]];

*/

function getCharCount (string) {

  let firstObject = {};

  string.toLowerCase().split('').forEach(char => {
    if (char.match(/[a-z]/gi)) {
      firstObject[char] = firstObject[char] + 1 || 1;
    }
  });

  let finalObject = {};

  let entries = Object.entries(firstObject);

  entries.forEach(entry => {
    finalObject[entry[1]] ? finalObject[entry[1]].push(entry[0]) : finalObject[entry[1]] = [entry[0]];
  });

  let finalEntries = Object.entries(finalObject);

  finalEntries.forEach(entry => {
    entry[1].sort();
  });

  finalEntries.sort((a, b) => Number(b[0]) - Number(a[0]));

  return finalEntries;
}

console.log(getCharCount("Mississippi")); // === {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(getCharCount("Hello. Hello? HELLO!!")); // === {6=>["l"], 3=>["e", "h", "]}
console.log(getCharCount("aaa...bb...c!")); // === {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(getCharCount("aaabbbccc")); // === {3=>["a", "b", "c"]}
console.log(getCharCount("abc123")); // === {1=>["1", "2", "3", "a", "b", "c"]}

console.log(getCharCount("Mississippi")); // == {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(getCharCount("Hello. Hello? HELLO!!")); // == {6=>["l"], 3=>["e", "h", "]}
console.log(getCharCount("aaa...bb...c!")); // == {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(getCharCount("aaabbbccc")); // == {3=>["a", "b", "c"]}
console.log(getCharCount("abc123")); // == {1=>["1", "2", "3", "a", "b", "c"]}


/* Gave this to Alex to solve

Sort Strings by Vowels - 6 kyu

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in descending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

Algorithm
- declare `sortStringsByVowels` function with `array` parameter

- init `result` to array sorted by passing string elements through `longestVowels` helper function

- return `result`

`longestVowel` helper function
- input string
- init `vowels` to match vowels in string or an empty array
- sort `vowels` by longest to shortest in length
- return the length of first element in `vowels`
*/

function sortStringsByVowels (array) {
  
  return array.sort((a, b) => longestVowels(b) - longestVowels(a));
  
}

function longestVowels (string) {

  let vowels = string.match(/[aeiou]+/gi) || ['']
  
  vowels.sort((a, b) => b.length - a.length);
  // console.log(vowels)
  
  return vowels[0].length;
}


// console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))//,["iiii","eee","aa","oo"]);
// console.log(sortStringsByVowels(["a","e","ii","ooo","u"]))//,["ooo","ii","a","e","u"]);
// console.log(sortStringsByVowels( ["ioue","ee","uoiea"]))// , ["uoiea", "ioue","ee"]);
// console.log(sortStringsByVowels( ["high","day","boot"]))// , ["boot","high","day"]);
// console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]))// , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]))// , ["a beautiful trio of","how about now"]);