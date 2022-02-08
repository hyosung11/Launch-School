/* Allison Embrey (JS120)  12:52
Hi everyone! JS101/210 interview prep session in eight minutes.

Anything in particular?

13:06

Discussion
Understand what type of questions that will be asked - difficulty level.
Substrings; looping or nested loops and string methods.
How to use the testing environment to get a really good idea of what code is doing from line-to-line.
Where when and how to test.

PROBLEM - 01
Count Letters
Return an object whose keys are each letter in a given string and the letter's count as each key's value.
Assume that the input will only be a string.
Assume that all characters are important.
Assume that an empty string or missing input will return an empty object.

// Tests
console.log(countLetters());    // {}
console.log(countLetters(''));  // {}
console.log(countLetters("It's a bear!"));
// Returns { I: 1, t: 1, "'": 1, s: 1, ' ': 2, a: 2, b: 1, e: 1, r: 1, '!': 1 }

Deepak - lots of testing

Problem:
  input: string
  Output: object

Algorithm:
  define `countLetters()` with the parameter `string`
    declare `resultObect` and initialize it to `{}`
    split `sring` into an `arrayOfChars`
    iterate thorugh `arrayOfChars`
      if `char` is a protpert in the `resultObject`
        property value += 1
      else
        add the property value as 1

    return resultObject
*/

// function countLetters(string) {
//   let resultObject = {};
//   if (!string) return resultObject;

//   string.split('').forEach(element => {
//     // if (resultObject[element] === undefined) {
//     //   resultObject[element] = 1;
//     // } else {
//     //   resultObject[element] += 1;
//     // }
//     resultObject[element] = resultObject[element] + 1 || 1;
//   })

//   return resultObject;
// }

// // Tests
// console.log(countLetters());    // {}
// console.log(countLetters(''));  // {}
// console.log(countLetters('aaA')); // {a: 1, A: 1}
// console.log(countLetters("It's a bear!"));
// // Returns { I: 1, t: 1, "'": 1, s: 1, ' ': 2, a: 2, b: 1, e: 1, r: 1, '!': 1 }

/* PROBLEM - 02
Substring Instance Count
Return the number of times a search-string is found within the given searchable string.
Assume that both inputs will only be strings.
Assume that all characters are important.
Assume the searchable string will always be provided as an argument.
Return `-1` if the search-string is empty or missing.
Solve without using Regex. */

// Tests
console.log(countSubstring('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring('', 'abbb') === 0);
console.log(countSubstring('aaaaa', '') === -1);
console.log(countSubstring('aaaaa') === -1);
console.log(countSubstring('bbAaaaA', 'Aa') === 1);

// Tests
console.log(countSubstring2('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring2('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring2('', 'abbb') === 0);
console.log(countSubstring2('aaaaa', '') === -1);
console.log(countSubstring2('aaaaa') === -1);
console.log(countSubstring2('bbAaaaA', 'Aa') === 1);


function countSubstring2(text, search) {
  if (search === undefined || search.length === 0) return -1;
  if (text.length === 0) return 0;

  const foundStrings = [];

  for (let i = 0; i < text.length; i++) {
    const remainder = text.slice(i);
    if (remainder.includes(search)) {
      foundStrings.push(search);
      const index = remainder.indexOf(search[0]);
      i += index + search.length - 1;
    }
  }

  return foundStrings.length;
}

// PROBLEM - 02
// Substring Instance Count
// Return the number of times a search-string is found within the given searchable string.
// Assume that both inputs will only be strings.
// Assume that all characters are important.
// Assume the searchable string will always be provided as an argument.
// Return `-1` if the search-string is empty or missing.
// Solve without using Regex.


/* Problem
- input string and a substring
- output number of times substring occurs in input string

Rules
- return instance count of substrings found in string
- if string is an empty string return 0
- if substring is an empty string return -1
- if either argument is missing return -1

ALGORITHM
- input string and a substring
- initialize `result` to `[]`
- iterate through string
  - split string at substring
  - push substring into `result`
- return length of `result` array


ALTERNATE ALGORITHM
  - input string and a substring
  - initialize `result` to `[]`
  // what's my goal? 
  // - I have to find the first instantance of my substring and ignore everyting else. 
  // - How do I pull that substring out of the string? 
  // Just find a match for the first characters of both strings
  
  iterate over string // a a _ b b _ 
    grab the current character of string stored in `char`. 
    if `char` is equal to the first character of the substring 
      // does string match the rest of the substring at this point? 
      create variable `matchFound` and init to `true`
      iterate through substring starting from the second character
        grab the current character of substring and store in `subChar`
        grab the next character of string 
        if the two characters are not equal 
          reassign `matchFound` to `false`
          break
      // Did we find a match? 
      if `matchFound` is `true` 
        (push the substring onto array or increment counter)
        increment i by the length of the substring.
      end iteration
  end iteration
  
  return result.length
  
  
  ALTERNATE ALGORITHM - without regular expressions
    if the search-string is an empty string or `undefined`, return -1.
    if the searchable string is an empty string, return 0.

    declare a variable `foundStrings` and init to an empty array.

    iterate over the searchable string // aa_bb_cc_dd_bb_e_b    // aaabbbcccc
    // i === 7
      isolate the remainder of the string
      const remainder = text.split(i);
      // c
      if the search string is part of the rest of the searchable string,
        push the search string onto `foundStrings`
        jump to 'first found index' + the search-string's length iterations - 1.
        aaabbbcccc
        i = 0 + 6 + 3 - 1 = 8
    end iteration

    return `foundStrings` length
    - find every substring in an array from input string
    - filter based on given substring
*/



// function countSubstring(string, substring) {
//   let result = [];

//   // const hello = 'hello'
//   // const splitHello = hello.split('ll');
//   // console.log(splitHello);
//   const splitString = string.split(substring);
//   console.log(splitString);
//   // result.push(count);

//   return result;
// }

// Tests
console.log(countSubstring2('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring2('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring2('', 'abbb') === 0);
console.log(countSubstring2('aaaaa', '') === -1);
console.log(countSubstring2('aaaaa') === -1);
console.log(countSubstring2('bbAaaaA', 'Aa') === 1);


function countSubstring2(text, search) {
  if (search === undefined || search.length === 0) return -1;
  if (text.length === 0) return 0;

  const foundStrings = [];

  for (let i = 0; i < text.length; i++) {
    const remainder = text.slice(i);
    if (remainder.includes(search)) {
      foundStrings.push(search);
      const index = remainder.indexOf(search[0]);
      i += index + search.length - 1;
    }
  }

  return foundStrings.length;
}



// JS101 - Small ProblemsString and Text ProcessingSearch Word (Part 1)
// With regex
function countSubstring3(text, search) {
  if (search === undefined || search.length === 0) return -1;
  if (text.length === 0) return 0;

  const regex = new RegExp(search, 'g');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

function countSubstring(text, substring) {
  if (text.length === 0) return 0;
  if (!text || !substring) return -1;

  return text.split(substring).length - 1;
}

console.log(countSubstring('', 'abbb') === 0);
console.log(countSubstring('aaaaa', '') === -1);
console.log(countSubstring('aaaaa') === -1);

console.log(countSubstring('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring('bbAaaaA', 'Aa') === 1);