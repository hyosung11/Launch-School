/* Repeated Substring 6 kyu

For a given nonempty string `s` find a minimum substring `t` and the maximum number `k`, such that the entire string `s` is equal to `t` repeated `k`times.

The input string consists of lowercase latin letters.

Your function should return :

    a tuple (t, k) (in Python)
    an array [t, k] (in Ruby and JavaScript)
    in C, return k and write to the string t passed in parameter

Example #1:
for string
s = "ababab";
the answer is
["ab", 3]

Example #2:
for string
s = "abcde"
the answer is
["abcde", 1]

because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

=============================================

PROBLEM
- input: string
- output: array with substring and number

Rules
- return a substring and the number of times it repeats the input string
- input is all lowercase letters

EXAMPLES
- 'ababab' => ['ab', 3]
- 'abcde' => '['abcde'. 1]
- 'abcabcabc' => ['abc', 3]

DATA STRUCTURE
- input: string
- intermediary: array
- output: array with a substring and a number

ALGORITHM
- input string
- initialize `substring` to helper function `getSubstrings` to get all leading substrings of string
- iterate through substrings
  - initialize `testString` to empty string
  - initialize `count` to 0
  - while `testString` length is less than string's length
    - set testString to the substring at the index position
    - increment the count
    - if the testString is the same as the string
      - return substring at the index and the count

getSubstrings helper function
- input string
- initialize `substrings` to empty array
- iterate through string
  - iterate through chars of string
    - slice string at string and char of string
    - push to substrings array
- return substrings array
    */

function deepEqual(string) { // 'abcabcabc'
  let substrings = getLeadingSubstrings(string);

  for (let idx = 0; idx < substrings.length; idx++) {
    let testString = '';
    let count = 0;

    while (testString.length < string.length) {
      testString += substrings[idx]; // 'a', abc' 'abc 'abc'
      count += 1;

      if (testString === string) return [substrings[idx], count];
    }
  }
}

function getLeadingSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    substrings.push(string.slice(0, idx + 1));
  }

  return substrings;
}

// [
//   'a',         'ab',
//   'abc',       'abca',
//   'abcab',     'abcabc',
//   'abcabca',   'abcabcab',
//   'abcabcabc'
// ]
console.log(getLeadingSubstrings('abcabcabc'));

// console.log(deepEqual('abcabcabc'));
// console.log(deepEqual('abcbcabc'));
// console.log(deepEqual('ababab'));
// console.log(deepEqual('abcde'));

// function deepEqual(string) {
//   let substrings = getSubstrings(string);

//   for (let idx = 0; idx < substrings.length; idx++) {
//     let newString = '';
//     let count = 0;

//     while (newString.length < string.length) {
//       newString += substrings[idx];
//       count += 1;
//       // console.log(newString, count)

//       if (newString === string) return [substrings[idx], count];
//     }
//   }
// }

// function getSubstrings(string) {
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       substrings.push(string.slice(idx, jdx));
//     }
//   }

//   return substrings;
// }

// console.log(deepEqual('abcde'));
// console.log(deepEqual('ababab'));

/*
Input: string
Output: array
Rules
- take the input string and return the shortest substring and the number of times it needs to be repeated to create the input string
- return both values in an array
- the input string consists of lowercase letters only

Algorithm
- obtain all of the substrings that start with the first letter of the string -- use substrings helper function
- iterate over all the substrings
  - during each round of iteration create reps - divide the length of the input string by the length of the current substring and
  round down
  - repeat the substring for the amount of times of reps and if that value is equal to the input string, return the current
  substring and the value of reps in an array
*/

// function leadingSubstrings(string) {
//  let substrings = [];
//   for (let idx = 0; idx < string.length; idx++) {
//     let substring = string.slice(0, idx + 1);
//     substrings.push(substring);
//   }
//   return substrings;
// }

// // console.log(leadingSubstrings('abc'))

// function deepEqual(string) {
//   let substrings = leadingSubstrings(string);

//   for (let idx = 0; idx < substrings.length; idx++) {
//     let reps = Math.floor(string.length / substrings[idx].length);
//     if (substrings[idx].repeat(reps) === string) {
//       return [substrings[idx], reps];
//     }
//   }
// }

// console.log(deepEqual('ababab'));
// console.log(deepEqual('abcde'));

/*
1. For loop to the end string length
2. For each iteration, start 1 end string length we'd use slice method invocation on the string
 start 0 and end index
3. calculate the length of the sub string
4. divide the string length / sub string length divides evenly and if it doesn't continue
5. If it does divide evenly, then check strictly equal to the argument
6. return [substring, calculate number]

Problem
- input: String
- Output: Array first element minimum substring
second element is how many times repeated

Explicit requirements
1. Return array
2. Where the first element is the minimum substring
such that entire string is equal to the minimum substring repeated
by the second array element number of times

Examples

("ababab") => ["ab", 3]
("abcde") => ["abcde",1]

Data Structures

Arrays
Strings, repeat method

Algorithms

High overview

1. Find minimum substring
2. Determine the substring repeated is equal to the argument

Specific

1. For loop to the end string length
2. For each iteration, start 1 end string length we'd use slice method invocation on the string
 start 0 and end index
3. calculate the length of the sub string
4. divide the string length / sub string length divides evenly and if it doesn't continue
5. If it does divide evenly, the check strictly equal to the argument
6. return [substring, calculate number] */

// function deepEqual(string) {
//   for (let idx = 0; idx < string.length; idx++) {
//     let substring = string.slice(0, idx);
//     let reps = string.length / substring.length;

//     if (Number.isInteger(reps) && substring.repeat(reps) === string) return[substring, reps];
//   }
// }

// function deepEqual(string) {
//   // use a for loop to go through the string
//   for (let idx = 1; idx <= string.length / 2; idx++) {
//     // on each iteration, store the slice of the input up to the value of idx
//     // use repeat to expand it out to the length of the array
//     let testString = string.slice(0, idx).repeat(string.length / idx);
//     // if the testString matches the input, it means we found the repeated substring
//     // we return an array holding that substring, and the length of the input divided by the idx value
//     if (testString === string) return [string.slice(0, idx), string.length / idx];
//   }
//   // if we make it through the loop without any matches, we return the whole string with 1 in an array
//   return [string, 1];
// }


// function deepEqual(string) {
//   // use a for loop to go through the string
//   for (let idx = 1; idx <= string.length / 2; idx++) {
//     // on each iteration, store the slice of the input up to the value of idx
//     // use repeat to expand it out to the length of the array
//     let testString = string.slice(0, idx).repeat(string.length / idx);
//     // if the testString matches the input, it means we found the repeated substring
//     // we return an array holding that substring, and the length of the input divided by the idx value
//     if (testString === string) return [string.slice(0, idx), string.length / idx];
//   }
//   // if we make it through the loop without any matches, we return the whole string with 1 in an array
//   return [string, 1];
// }


/* Algorithm
- input string
- iterate to midpoint of string
- initialize `testString` to slice of string from 0 to index position
  - expand `testString` using `repeat` to length of string / idx
  - if testString is equal to string
    - return an array of the slice of the string from 0 to idx and the string length / idx
- otherwise return the string and count of 1 */

// function deepEqual(string) {
//   for (let idx = 1; idx <= string.length / 2; idx++) {
//     let testString = string.slice(0, idx).repeat(string.length / idx);

//     if (testString === string) return [string.slice(0, idx), string.length / idx]
//   }

//   return [string, 1];
// }

// console.log(deepEqual('abcabcabc'));
// console.log(deepEqual('abcbcabc'))
// console.log(deepEqual('ababab'));
// console.log(deepEqual('abcde'));

// console.log(repeated ("abcde")); // ["abcde", 1])
// console.log(repeated("ababab")); // ["ab", 3])
// console.log(repeated('abcabcabc')); // ['abc', 3]
// console.log(repeated('abcbcabc')) // ['abcbcabc', 1]