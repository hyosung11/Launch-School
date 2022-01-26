/* Gave him Reversing and Combining Text - 6 kyu problem

11:03 He needs to still work on it.

/*  Repeated Substring - I couldn't figure this out.

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter

Example #1:

for string

PROBLEM
- input: string
- output: an array with the string and the number of times its repeated

Rules
- return an array of two elements
  - first element is the repeated substring from string
  - second element the number of times the substring is repeated in the input string
- input is all lowercase letters
- if no repeated substring, return the string with a count of 1

EXAMPLES
- 'ababab' --> 'ab' repeated 3 times

DATA STRUCTURE
- input string
- intermediary: array, substrings
- output: array

ALGORITHM
- input string
- initialize `result` to empty array
- initialize `count` to 0;
- initialize `middle` to a slice of the input string
- iterate through string to middle
  - if slice of substring repeated is equal to string
    - append substring to result
    - append count to result
- return array */

// not correct
function repeated(string) {
  let result = [];
  let count = 0;
  let middle = Math.floor(string.length / 2);

  for (let idx = 0; idx < middle; idx++) {
    let substring = string.substring(0, idx); // 'ab'
    // console.log(substring)
    // if (substring.repeat(idx).length === string.length)
      // result.push(substring)
  }


  return result;
}

console.log(repeated("ababab"));//, ["ab", 3])
// console.log(repeated("abcde"));//, ["abcde", 1])
