/* JS109 Study Group with Antonina

Introductions
- Antonina
- Jonathan
- Audry, Atlanta, GA, passed written assessment
- Michael, Italy, taking the written again
- Theo, NYC, prepping for interview
- H, interview assessment preparation

Interview Prep
- write PEDAC

1. Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: string
- output: new string

Identify rules
- add each char in argument string to returned string
- repeat each char as many times as its index position + 1
- uppercase first instance of each char
- lowercase rest of instances of each char
- separate each char with a hyphen

EXAMPLES / TEST CASES
- console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- initialize `repeatCharsString`
- split string at each char
  - iterate through each char
    - check index position + 1
    - multiply char by index position + 1
    - uppercase first iteration of char
    - lowercase rest of chars in iteration
  - add hyphen between each collection of chars
- join chars together
- return `repeatCharsString` string

CODE
- test code while programming */

// function accum(string) {
//   let repeatCharsString = string
//     .split('')
//     .map((char, count) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(count);
//     });
//     return repeatCharsString.join('-');
// }

// function accum(string) {
//   return string
//     .split('')
//     .map((char, index) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(index);
//     }).join('-');
// }

function accum(string) {
  return string
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* AUDRY
input: string of alphacharacters (upper and lower cased )
output: return a string, concatenated with hyphens
rule: each char in input string will be repeated by n times, where n is the char's index position + 1.
  separate each string of repeated chars by a hyphens
  first char should be uppercased in the repeated sequence. the rest should be lowercased.
data structure - array to hold the repeated sequences of chars
algo: for each char in input string:
  repeatedSTring = repeated lowercase char by index position
    use concatenation: char.toUpperCase() + repeatedString
     push to result Array
    join array on hyphen

@hyoSung - this was my working code before I refactored it into a pretty chain---

function accum(string) {
  let result = string.split("").map((char, index) => {
    return char.toUpperCase() + char.toLowerCase.repeat(index);
  });
  return result.join("-");
}

function accum(string) {
  return string
  .split("")
  .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
  .join("-");
}

//Theo
// initialize strArr variable, which will hold the new chars in arr form, which can then be converted to str later
// let strArr = [];

// use a loop with char, and index. such as forEach
  // accum.forEach((char, index) => functionhere);
  // append toUppercase char first

  // function inside forEach will use a fill method to append each char to strArr     (index + 1)
  // number of times.

  // push a "-" at the end of each set of chars

// use Array.join("") and return the new str

function accum(str) {
  let strArr = str.split("");
  let chars = [];

  strArr.forEach(helper);

  function helper(char, index) {
    chars.push(char.toUpperCase());
    let repeatedChar = Array(index).fill(char.toLowerCase());

    chars.push(repeatedChar.join(""));
    chars.push("-");
   }

  chars = chars.join("");
  console.log(chars);
}


// Jonathan
The function takes a string as an argument.
The string should be split into an array for easy iteration,
the number of times the character is repeated should be based on the index
of it's position.
If the current character is not equal to the previous character, the current
character should be capitalized, the number of repetitions should be based off
of the index number.

In hindsight, separate each character of the string into an array, use map / repeat to create a new array with the character repeated `idx` number of times, then use toUpperCase and concatenate the strings.

Jonathan

function accum(str) {
  let result = '';
  for (let count = 0; count < str.length; count++) {
    result += str[count].toUpperCase();
    result += str[count].toLowerCase().repeat(count);
    count < str.length - 1 ? result += '-' : '';
  }
  return result;
}
//const accum = (str) => [...str].map((ele, idx) => ele.toUpperCase() + ele.toLowerCase().repeat(idx)).join('-');
*/