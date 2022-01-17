/* Mexican Wave - 6 kyu

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules

 1. The input string will always be lower case but maybe empty.

 2. If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
- wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

PROBLEM
- input string
- output: array

Rules
- return an array of strings where the capital letter moves to the following index position of the string in the next string element of the array
- input string all lowercase letters
- input string can be empty
- if char is whitespace / empty string skip over the char as if it were an empty seat
- returned array will have as many elements as the length of the input string

EXAMPLES
- wave('abc') => ['Abc', 'aBc', 'abC']
- wave('test') => ['Test', tEst', teSt', 'testT']
- wave('st p') => ['St p', 'sT p', 'st P']

DATA STRUCTURE
- input: string
- intermediary: array
- output: array

ALGORITHM
- input string
- initialize `result` to empty array
- iterate through string by char
  - initialize first to first part of string
  - initialize `cap` to char at the index
  - initialize `last` to part of string after cap
  - push combined string to `result` array
return `result` array of strings with desired capitalization */

// function wave(string) {
//   let result = [];
//   let word = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     let letter = string[idx];
//     if (letter === ' ') {
//       continue;
//     } else {
//       word = string;
//       let cap = string[idx].toUpperCase();
//       word = word.replace(letter, cap);
//       result.push(word)
//       // result.push(string.slice(0, idx) + letter.toUpperCase() + string.slice(idx + 1));
//     }
//   }

//   return result;
// }

// function wave(string) {
//   let result = [];
//   let word = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     let letter = string[idx];
//     if (letter === ' ') {
//       continue;
//     } else {
//       word = string;
//       let cap = letter.toUpperCase();
//       word = word.replace(letter, cap);
//       result.push(word);
//     }
//   }

//   return result;
// }

// function wave(string) {
//   let result = [];

//   string.split('').forEach((char, idx) => {
//     if (/[a-z]/.test(char)) {
//       result.push(string.slice(0, idx) + char.toUpperCase() + string.slice(idx + 1));
//     }
//   })

//   return result;
// }

function wave(string) {
  let mexicanWave = [];

  for (let idx = 0; idx < string.length; idx++) {
    let words = string.split('');
    let letter = string[idx];
    if (letter === ' ') continue;
    else {
      words[idx] = words[idx].toUpperCase();
      mexicanWave.push(words.join(''));
    }
  }

  return mexicanWave;
}

/*
Input: string
Output: array
Rules
- take the input string and push it into an array with 1 letter capitalized each time with the rest lowercase
- begin with the first word, through to the last
- return the result array with the string the same amount of times as the length of the input string
- if the character is a space ignore it
- the input string will always be lowercase but can be empty

Algorithm
- if the input is an empty string return an empty array
- create an empty result array
- iterate over the characters in the input string
  - during each iteration capitalize the letter in the string thats at the number of the current index
    - turn the number into an array, caps the letter at the current index and join it back into a string
    - push the string into the result array
    - if the current element in iteration is a space, continue that round of iteration
- after each round of iteration return the result array
*/

function wave(str){
 let result = [];

  for (let idx = 0; idx < str.length; idx++) {
    let charsArr = str.split('');
    if (charsArr[idx] === ' ') continue;
    charsArr[idx] = charsArr[idx].toUpperCase();
    result.push(charsArr.join(''))
  }

  return result;
}


function wave(str) {
  // declare holding array
  let arr = [];

  // iterate over str input
  for (let idx = 0; idx < str.length; idx++) {
    // if character is whitespace, continue to next iteration
    if (str[idx] === ' ') continue;
    // split the string into an array
    let strArr = str.split('');
    // set the current character index equal to itself, uppercased
    strArr[idx] = strArr[idx].toUpperCase();
    // push the joined value to the holding array
    arr.push(strArr.join(''));
  }

  // return the holding array
  return arr;
}

function wave(str) {
  // Code here
  //input: string, may be empty
  //output: array of strings

  //Rules:
  //Return an array of strings that will have as many elements as the length of the string.
  //The first string will have the first letter capitalized
  //The second string will have the second letter capitalized
  //Continue this process until you add the string with only the last letter capitalized.

  //Algorithm:
  //Create an array called waveStrings to store the strings in.
  //start a for loop that goes until i < str.length
  //in each iteration, your going to capitalize the letter at i and return the string
  //if i is 3, we're on the fourth iteration and fourth character. to return the string
  //with the fourth character capitalized, we need to combine
  //str.slice(0,3) + str[3].toUpperCase() + str.slice(4)
  //and push it into our array.

  let waveStrings = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ') continue;
    waveStrings.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return waveStrings;
}
// console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

// console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];

// console.log(wave("")); // [];

// console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];

console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "];

// function wave(string) {
//   let result = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     let letter = string[idx];
//     if (letter === ' ') {
//       continue;
//     } else {
//       result.push(
//         string.slice(0, idx) + letter.toUpperCase() + string.slice(idx + 1)
//       );
//     }
//   }

//   return result;
// }