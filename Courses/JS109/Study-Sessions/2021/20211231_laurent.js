/* Practice on CoderPad

Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input
string. The input string can be assumed to contain only alphabets (both
uppercase and lowercase) and numeric digits.

PROBLEM
- input: string
- output: number representing occurrences of a char that repeats twice or more

Rules
- return count of distinct case-insensitive alphabetic chars and numeric digits that occur more than once
- input string only has letters and numeric digits
- case does not matter for the letters
- if input string is an empty string return 0
- if no char repeats return 0

EXAMPLES
- 'aabbcde' => aa = 1, Bb = 1 => 2

DATA STRUCTURE
- input string
- intermediary: object?
- output number

ALGORITHM
- input string
- initialize `result` object to capture occurrences of each char
- iterate through the string
  - check for the char in the object
    - if char doesn't exist in the object add it
    - if char already exists increment the count of the char in the object
- iterate through the values of the `result` object
- return number representing occurrences of any char that appears more than once
*/

// function duplicateCount(string) {
//   let result = {};

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx].toLowerCase();
//     result[char] ? (result[char] += 1) : (result[char] = 1);
//   }

//   return Object.values(result).filter((num) => num > 1).length;
// }

// console.log(duplicateCount('')); // 0)
// console.log(duplicateCount('abcde')); // 0
// console.log(duplicateCount('aabbcde')); // 2
// console.log(duplicateCount('aabBcde')); // 2
// console.log(duplicateCount('Indivisibility')); // 1
// console.log(duplicateCount('Indivisibilities')); // 2

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

PROBLEM
- input: string
- output: number

Rules
- find the first non-repeating char in the input string
  - it occurs only once in the string
  - return the index position of the char not the char itself
- case doesn't matter
- if all chars in the string repeat, return -1

EXAMPLES
- 'leetcode' => 0 because l is in index position 0 and it does not repeat in the string
- 'aabb' return -1 because both chars repeat

DATA STRUCTURE
- input: string
- intermediary: object?
- output: number

ALGORITHM
- input the string
- initialize `result` object to capture occurrences of each char
- iterate through string
  - check each char in the string
    - if char doesn't exist in `result` add it
    - if char does exist increment count in `result`
- iterate through the string
  - find the first char in the object whose count is 1
  - return the index position of that char
- or return -1 because not found

The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway.

The idea is to go through the string and save in a hash map the number of times each character appears in the string. That would take \mathcal{O}(N)O(N) time, where N is a number of characters in the string.

And then we go through the string the second time, this time we use the hash map as a reference to check if a character is unique or not.
If the character is unique, one could just return its index. The complexity of the second iteration is \mathcal{O}(N)O(N) as well. */

function firstUniqChar(string) {
  let result = {};

  string.split('').forEach((char) => {
    result[char] ? result[char] += 1 : result[char] = 1;
  });

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (result[char] === 1) return idx;
  }

  return -1;
}

// function firstUniqChar(string) {
//   let result = {};

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     result[char] ? result[char] += 1 : result[char] = 1;
//   }

//   for (let jdx = 0; jdx < string.length; jdx += 1) {
//     let char = string[jdx];
//     if (result[char] === 1) return jdx;
//   }

//   return -1;
// }

/* ALGORITHM

Iterate over the string
  For each character, check if it exists in the remaining of the string
    If it does, continue
    If it doesn't, return the index of char

*/

// function firstUniqChar(string) {
//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     let remaining = string.split('');
//     remaining.splice(idx, 1);

//     if (remaining.includes(char)) continue;
//     else return idx;
//   }

//   return -1;
// }
console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1