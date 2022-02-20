/* Sort Strings by Vowels - 6 kyu

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

09:17 start
09:25 I think the last example is incorrect. I don't like Codewars problems that are poorly written like this one.
09:29 algorithm
09:38 confused

Problem
- input array of strings
- output array of strings

Rules
- return an array of strings sorted in descending order based on the longest substring of contiguous vowels
- if substrings have same length, return in same order as they occur in the input array
- all letters lowercase?


Examples
- ['none', 'uuu', 'Yuuuge!!'] => ['uuu', 'Yuuuge!!', 'none']


- ["how about now","a beautiful trio of"] => the longest contiguous vowel substring is in the word 'beautiful', so that string as-is comes first in the return array

Data Structure
- input array of strings
- inside: array (sort)
- output: array

Algorithm
- declare `sortStringsByVowels` function with `array` parameter

- init `result` to array sorted by passing string elements through `longestVowels` helper function

- return `result`

`longestVowel` helper function
- input string
- init `vowels` to match vowels in string or an empty array
- sort `vowels` by longest to shortest in length
- return the length of first element in `vowels`

- return `result` array

*/

console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii'])); //,["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(['a', 'e', 'ii', 'ooo', 'u'])); //,["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels(['ioue', 'ee', 'uoiea'])); // , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels(['high', 'day', 'boot'])); // , ["boot","high","day"]);
console.log(sortStringsByVowels(['none', 'uuu', 'Yuuuge!!'])); // , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(['how about now', 'a beautiful trio of'])); // , ["a beautiful trio of","how about now"]);

// 1
// function longestVowelSubstr(str) {
//   let [count, currentVowelCount] = [0, 0];
//   for (let idx = 0; idx < str.length; idx += 1) {
//     if ('aeiouAEIOU'.includes(str[idx])) currentVowelCount += 1;
//     else currentVowelCount = 0;

//     if (currentVowelCount > count) count = currentVowelCount;
//   }

//   return count;
// }

// function sortStringsByVowels(strings) {
//   return strings.sort((a, b) => longestVowelSubstr(b) - longestVowelSubstr(a));
// }

// 2
// function sortStringsByVowels(strings) {
//   let sortedStr = [];
//   strings.forEach((el) => {
//     sortedStr.push([
//       el,
//       el
//         .replace(/[^aeiou]/gi, ' ')
//         .split(' ')
//         .reduce((a, b) => {
//           return a.length > b.length ? a : b;
//         }).length,
//     ]);
//   });

//   return sortedStr.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
// }

// 3
function sortStringsByVowels(strings) {
  var results = [...strings];

  results.sort((a, b) => {
    return longestVowels(b) - longestVowels(a);
  });

  return results;
}

function longestVowels(str) {
  let vowels = str.match(/[aeiou]+/gi) || [''];

  vowels.sort((a, b) => {
    return b.length - a.length;
  });

  return vowels[0].length;
}

// 4
// function sortStringsByVowels(strings) {
//   return strings.sort((a, b) => vowelArr(b) - vowelArr(a));
// }

// function vowelArr(string) {
//   return string.split(/[^aeiou]/gi).sort((a, b) => b.length - a.length)[0]
//     .length;
// }

