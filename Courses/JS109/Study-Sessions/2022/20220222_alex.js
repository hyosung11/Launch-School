/* Triple Letter Groupings

Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

Worked Example

threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!

Examples

threeLetterCollection("slap") ➞ ["lap", "sla"]

threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

threeLetterCollection("cat") ➞ ["cat"]

threeLetterCollection("hi") ➞ []

Notes

Return an empty array if given a word with less than 3 letters.

Problem
- input string
- output array of strings of three chars

Rules
- return an array of strings of three chars long sorted alphabetically from slices of the input string
- shift each slice by one char/idx position
- assume all letters are lowercase
- just letters as inputs
- if less than three chars, return an empty array
- if three letters return the input an array with the input string as the element

Examples
- reviewed

Data Structure
- input string
- inside an array sorted
- output array

Algorithm
- declare `threeLettersCollection` with `string` parameter
- init `result` to empty array
- iterate over string to string.length - 2
  - slice string from idx to idx + 3
  - push slice to result

- sort result in alphabetical order
- return `result`

*/

function threeLetterCollection(string) {
  let result = [];

  for (let idx = 0; idx < string.length - 2; idx += 1) {
    result.push(string.slice(idx, idx + 3));
  }

  return result.sort();
}

// console.log(threeLetterCollection('slap')); // ['lap', 'sla']
// console.log(threeLetterCollection('click')); // ['cli', 'ick', 'lic']
// console.log(threeLetterCollection('cat')); // ['cat']
// console.log(threeLetterCollection('hi')); //  []
// console.log(threeLetterCollection('e')); // []
// console.log(threeLetterCollection('')); // []
// console.log(threeLetterCollection('programming')); // ['amm', 'gra', 'ing', 'min', 'mmi', 'ogr', 'pro', 'ram', 'rog']

// console.log(threeLetterCollection('antidisestablishmentarianism')); // ['abl', 'ani', 'ant', 'ari', 'bli', 'dis', 'ent', 'est', 'hme', 'ian', 'idi', 'ise', 'ish', 'ism', 'lis', 'men', 'nis', 'nta', 'nti', 'ria', 'ses', 'shm', 'sta', 'tab', 'tar', 'tid']
// console.log(threeLetterCollection('zoology')); // ['log', 'ogy', 'olo', 'ool', 'zoo']
// console.log(threeLetterCollection('assassination')); // ['ass', 'ass', 'ati', 'ina', 'ion', 'nat', 'sas', 'sin', 'ssa', 'ssi', 'tio']
// console.log(threeLetterCollection('bookkeeper')); // ['boo', 'eep', 'epe', 'kee', 'kke', 'okk', 'ook', 'per']

/* Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".

-Function input: String contains only letters, uppercase letters are unique.

Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

PROBLEM
- in: str
- out: str

Rules:
- alphabetize letters in str, with Uppercase preceding same lowercase letter

ALGO

init temp = ''
init results = []
iterate through str (idx)
  temp = str[idx]
  iterate through str (jdx = idx + 1)
    if jdx lowercased ==== idx lowercased,increment temp by jdx
  push temp to results
sort each element alphabetically
join all elements and return
*/


console.log(findChildren('beeeEBb')); //BbbEeee
console.log(findChildren('uwwWUueEe')); //"EeeUuuWww"



function findChildren (string) {

  let result = '';
  let array = string.toLowerCase().split('').sort();

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] !== array[idx - 1]) {
      result = result + array[idx].toUpperCase();
    } else {
      result = result + array[idx];
    }
  }

  return result;
}

/* Original Version */
function findChildren(string) {
  let result = '';
  let sorted = string.split('').sort().join('');

  for (let idx = 0; idx < sorted.length; idx++) {
    if (sorted[idx] === sorted[idx].toUpperCase()) {
      result += sorted[idx];

      for (let jdx = 0; jdx < sorted.length; jdx++) {
        if (sorted[jdx] === sorted[idx].toLowerCase()) {
        result += sorted[jdx];
        }
      }
    }
  }

  return result;
}