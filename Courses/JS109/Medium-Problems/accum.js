/* 1. Problem Description

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
