/* https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript

Sort Strings by Most Contiguous Vowels

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in descending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:
str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the original array. */

// console.log(alphabetScore('aa b') === 'aa');

/* Input: array of strings
Output: the same (or a new one?) array sorted

Rule: 
 - sort the array by the number of contiguous vowels in descending order
 - what happens when same number of contiguous letters ??? ascending

['a', 'aa', 'aba'] => ['aa', 'a', 'aba']

[1, 2, 1]

2 problems
  first to get the number of contiguous vowels in a word
  Second one to order the array according to that number

1st problem
'a' 1
'aa' 2
'aba' 1

APPROACH 1
initiate a `max counter` to 0

initiate a counter to 0
iterate over the string
  if the letter is a vowel set the counter to 1
  while the next is a vowel
    increment count
  if the counter is different than 0, we want to compare it to `max counter`
    if it's higher than max counter, we replace max counter by counter
  if it's not reset count to 0
  
APPROACH 2
'beautiful' replace everything that is not a vowel by a single space
' eau i u ' split this and get the length of each string


Get an array of the length of all string

['a', 'aa', 'aba']
[1, 2, 1]

Then, we sort the first array with the return value from the countContiguousVowels */

// Approach 1
function countContiguousVowels(string) {
  let vowels = 'aeiouAEIOU';
  let maxCounter = 0;
  
  let counter = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (vowels.includes(char)) {
      counter += 1;
      if (counter > maxCounter) maxCounter = counter;
    }
    else counter = 0;
  }
  
  return maxCounter;
}

function sortStringsByVowels(array) {
  return array.sort((a, b) => countContiguousVowels(b) - countContiguousVowels(a));
}

// Approach 2
function countContiguousVowels(string) {
  string = string.replace(/[^aeiou]+/gi, ' ');
  return Math.max(...string.split(' ').map(bit => bit.length));
}

function sortStringsByVowels(array) {
  return array.sort((a, b) => countContiguousVowels(b) - countContiguousVowels(a));
}

console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii']) === ['iiii', 'eee', 'aa', 'oo']);

console.log(sortStringsByVowels(['a', 'e', 'ii', 'ooo', 'u']) === ['ooo', 'ii', 'a', 'e', 'u',]);

console.log(sortStringsByVowels(['ioue', 'ee', 'uoiea']) === ['uoiea', 'ioue', 'ee']);

console.log(sortStringsByVowels(['high', 'day', 'boot']) === ['boot', 'high', 'day']);


console.log(sortStringsByVowels(['none', 'uuu', 'Yuuuge!!']) === [ 'uuu','Yuuuge!!', 'none']);

console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN']) === ['GREEEN', 'AIBRH','YOUNG', '']);

console.log(sortStringsByVowels(['jyn', 'joan', 'jimmy', 'joey']) === ['joan', 'joey', 'jimmy', 'jyn']);

console.log(sortStringsByVowels(['uijijeoj', 'lkjlkjww2', 'iiutrqy']) === ['iiutrqy', 'uijijeoj', 'lkjlkjww2']);

sortStringsByVowels(['how about now', 'a beautiful trio of'])
  ['a beautiful trio of', 'how about now']
);


sortStringsByVowels(['every', 'bataux', 'is', 'waaaay', 'loose']),
  ['waaaay', 'bataux', 'loose', 'every', 'is']
);