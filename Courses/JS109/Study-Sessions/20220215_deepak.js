/* 12:30 Deepak teaches exam prep

Deepak's Interview
- Jessica Chang

first question

feedback
- write the rules
- run through a test case with your algorithm before writing your code

some questions we've practiced are more difficult than what we have practiced

2-3 step problems at most
level 6 codewars problems

focus on approach to solving the problem

prime your schedule and practice the routine before the exam
live the test day for a week before the assessment

finished both problems in 30 minutes

speak and explain your code throughout the assessment
think out loud

string processing questions
- simple regex can be helpful

*/

// let char = 'a';

// /[^a-z]/.test(char);
// /[^a-z]/.test(char);
// /[0-9]/.test(char);
// /[.!?]/.test(char);

// RegExp.prototype.test();
// String.prototype.replace(); // use /g flag to replace all instances of a match

// String.prototype.match();

// > let a = 'hello'
// undefined
// > a.replace(/l/g, '')
// 'heo'
// > a.replace(/[a-z]/g, '')
// ''
// >

/* strong start
tunneled into map

Mexican Wave

practice making substrings using `slice`

know how the methods work confidently
go through algorithm steps

*/

/* Mexican Wave

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Problem
- input a string
- output an array of elements whose count is the same as the amount of letters in the string

Rules
- return an array of words with each successive char by index position capitalized
- input string is all lowercase letters, but can be an empty string
- ignore whitespace for capitalization of char

Examples
- 'hello' => ['Hello', 'hEllo', 'heLlo' ... ]

Data Structure
- input string
- intermediary: map?
- output: array

repeat?
`map`?

Algorithm
- declare function `wave` with parameter `string`
- init `result` to empty array

- iterate over the string
  - init `capLetter` to ''
  - if char is an empty space continue

  - else capitalize letter at idx
    - slice 

- return `result` array

Alternative Algo
- split string into chars
- transform each char at idx to uppercase
  - if char is a space continue
  - else concatenate char at idx to rest of string

*/


function wave (string) {
  
}

// Test cases:

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

console.log(wave("")); // []

console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]

>  let a 
undefined
>  a = 'hello'
'hello'
>  a.slice(1, 5)
'ello'
>  a[0] + a[1].toUpperCase()
'hE'
>  a.slice2,
... 
>  a.slice(2, 5)
'llo'
>  a.slice(0, 2)
'he'
>  a
'hello'
>  'hello'.slice(0, 1)
'h'
>  'hello'.slice(0, 2)
'he'
>  'hello'.slice(0, 3)
'hel'
>  'hello'.slice(1, 3)
'el'
>  'hello'.slice(1, 4)
'ell'
>

function wave(string) {
  let resultArray = [];
  
  for (let i = 0; i < string.length; i += 1) {
    
    if (string[i] === ' ') continue;
    
    resultArray.push(string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1));
    
  }
  
  return resultArray;
}

function wave (string) {

  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[a-z]/.test(string[idx])) {
      result.push(string.slice(0, idx) + string[idx].toUpperCase() + string.slice(idx + 1))
    }
  }

  return result;
}