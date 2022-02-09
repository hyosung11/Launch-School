/* Michael

11:03 start
11:17 continue PEDA
11:25 continue Algo
11:40 Michael stopped

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist. */

// console.log(freqAlphabets('10#11#12')); // "jkab"
// console.log(freqAlphabets('1326#')); // "acz"

/*

11:44
12:03 solved in 19 minutes */

/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

Problem
- input string
- output new string

Rules
- return a new string that changes the case of every char and reverses the word order of the input string
- assume words are split at the space

Algo
- input string of words or a word
- init `result` to []
- transform string
  - split string at space
    - transform each char
      - if char is lowercase change to uppercase
      - else change uppercase to lowercase
  - push words in reverse order to `result`
- join `result` and return
*/

function stringTransformer(string) {
  return string
    .split(' ')
    .map(word => {
      return word
        .split('')
        .map(char => {
          if (char === char.toUpperCase()) return char.toLowerCase();
          return char.toUpperCase();
      }).join('')
  }).reverse().join(' ')
}

console.log(stringTransformer('abcD eFgh')) // === 'EfGH ABCd');
// console.log(stringTransformer("Example Input") === 'iNPUT eXAMPLE');
// console.log(stringTransformer('Example string'))//, 'STRING eXAMPLE'));

