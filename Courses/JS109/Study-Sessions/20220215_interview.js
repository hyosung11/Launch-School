/* JS109 Interview Prep

Introductions
- Antonina
- Ra'ees
- Michael
- Adhitiani
- H

Each group of two gets a problem
- one person works on PEDAC
- second person will write the code
- communicate while working on the problem

H and Adhitiani
- Adhitiani does PEDA
- H writes code
- approximately 25 minutes

maxSequence problem
10:04 Adhitiani started PEDA

* Remember that you're communicating with the interview assessor and talk to them. Don't mumble to yourself


The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
-- should be 6: [4, -1, 2, 1]

Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum. Note that the empty array is also a valid argument in the array.

// Test Cases

/*
P:
input: an array of numbers
ouput:  a number

rules:
- all the element are positive the max is the sum of all the elements
- if the element is only negative return 0
- empty array return 0

E:
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
-2 
-2 1
-2 1 -3

A:

edgecase:
- if all the element is positve return the sum of all element
- if the element is only negative return 0
- empty array return 0

- find the possible sub array from the array
  - init `subarrays` to empty array
  - iterate over the array in an outer loop
      - iterate over the array in an inner loop
        - slice the array from idx, jdx
        - append slice to `subarrays`
  - return `subarrays`

- init `maxSum` to 0

- iterate over subarrays
- find the sum of all the subarrays
  - init `currentSum` to subarrays at the idx
  - if currentSum is greater than the maxSum
    - reassign maxSum to `currentSum`
- return the max sum


*/

function maxSequence (array) {

  if (array.every(num => num > 0)) return array.reduce((sum, num) => sum + num, 0);
  if (array.every(num => num < 0)) return 0;
  if (array.length === 0) return 0;

  let subarrays = getSubarrays(array);
  console.log(subarrays)

  let maxSum = 0;

  for (let idx = 0; idx < subarrays.length; idx += 1) {
    let currentSum = subarrays[idx].reduce((sum, num) => sum + num, 0);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

function getSubarrays(array) {
  let subarrays = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
      subarrays.push(array.slice(idx, jdx));
    }
  }

  return subarrays;
}

// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/* Second Problem for Michael and Ra'ees

Find the length of the longest substring in the given string that is the same in reverse.

called `longestPalindrome`

Find the length of the longest substring in the given string that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

/*
  PROBLEM:
    input: string
    output: the length of the longest substring === substring reversed

    rules:
      -if the string is an empty string return 0;

  DATA STRUCTURE:
    input: string
    array of substring
    all reversed substrings
    output: the length; longest substring === substring reversed;

  ALGO:
    define function para string
    -init arrayOfSubRev
    -init arrayOfSubs to empty array
    -iterate through the string with an i index to be 0
    -iterate through the string with an j index = i + 1
      push all substrings into arrayOfSubs
    -iterate through arrayOfSubs
      - if the substring.split('').join('') ==== substring.reversed.split('').join('');
     push substring into arrayOfSubRev
      sort arrayOfSubRev length biggest to smallest
        return the first element arrayOfSubRev and length
*/

function longestPalindrome(string) {
  let arrayOfSubRev = [];
  let arrayOfSubs = [];

  for (let idx = 0; idx <= string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      arrayOfSubs.push(string.slice(idx, jdx));
    }
  }

  for (let idx = 0; idx < arrayOfSubs.length; idx += 1) {
    if (arrayOfSubs[idx] === arrayOfSubs[idx].split('').reverse().join('')) {
      arrayOfSubRev.push(arrayOfSubs[idx]);
    }
  }

  return arrayOfSubRev.sort((a, b) => b.length - a.length)[0].length;
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9