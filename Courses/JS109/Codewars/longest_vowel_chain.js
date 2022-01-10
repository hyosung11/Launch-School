/* Codewars 7 kyu

Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

PROBLEM
- input string
- return number representing the length of the longest vowel string in the input string

Rules
- return number representing longest vowel string from input string
- input is lowercase letters only, no spaces
- vowels are 'aeiou'

EXAMPLES
- 'suoidea' => 3 because 'uoi' is three chars

DATA STRUCTURE
- input: string
- intermediary: substrings
- output: number

ALGORITHM
- input string
- initialize `vowels` to 'aeiou'
- initialize `longestChain` to 0 to track longest vowel chain length
- initialize `currentChain` to 0 track temporary vowel chain length
- iterate through string
  - initialize `char` to current index position in loop
    - if `char` is a vowel because it's in the `vowels` string
      - increment currentChain
      - if currentChain is greater than longestChain
        - reassign longestChain to currentChain
      - else reassign currentChain to 0
- return longestChain */

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let longestChain = 0;
//   let currentChain = 0;

//   string.split('').forEach(char => {
//     if (vowels.includes(char)) {
//       currentChain += 1;
//       if (currentChain > longestChain) {
//         longestChain = currentChain;
//       }
//     } else {
//       currentChain = 0;
//     }
//   });

//   return longestChain;
// }

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let longestCount = 0;
//   let currentCount = 0;

//   string.split('').forEach(char => {
//     if (vowels.includes(char)) currentCount += 1;
//     else currentCount = 0;

//     if (currentCount > longestCount) longestCount = currentCount;
//   })

//   return longestCount;
// }

// function longestVowelChain(string) {
//   let vowels = 'aeiou';
//   let vowelStringArray = [];
//   let vowelString = '';

//   string.split('').forEach(letter => {
//     if (vowels.includes(letter)) {
//       vowelString += letter;
//     } else if (vowelString.length > 0) {
//       vowelStringArray.push(vowelString);
//       vowelString = '';
//     }
//   });

//   return vowelStringArray.sort((a, b) => b.length - a.length)[0].length;
// }

// function longestVowelChain(string) {
//   // declare empty array to hold count values
//   let counts = [];
//   // declare vowels array
//   let vowels = 'aeiou'.split('');
//   // declare a counter
//   let counter = 0;
//   // iterate over the argument string
//   for (let idx = 0; idx < string.length; idx++) {
//     // if the current value is a vowel, increment counter
//     if (vowels.includes(string[idx])) counter++;
//     // if not, set counter to 0
//     else counter = 0;
//     // push the value of counter to the counts array
//     counts.push(counter);
//   }
//   // return the highest number in the counts array
//   return Math.max(...counts);
// }

// console.log(longestVowelChain('codewarriors'));
// console.log(longestVowelChain('codewarriors') === 2);
// console.log(longestVowelChain('suoidea') === 3);
// console.log(longestVowelChain('ultrarevolutionariees') === 3);
// console.log(longestVowelChain('strengthlessnesses') === 1);
// console.log(longestVowelChain('cuboideonavicuare') === 2);
// console.log(longestVowelChain('chrononhotonthuooaos') ===5);
// console.log(longestVowelChain('iiihoovaeaaaoougjyaw') === 8);

/*
INPUT: string
OUTPUT: number
- the length of longest vowel chain

RULES
- vowel are aeiou
- the argument string will:
  - have alphabetic characters only
  - be lowercase
- return the length of the longest vowel substring

EXAMPLES
"suoidea" -> "uoi" -> 3

ALGORITHM
- create a variable `longestVowelChain` and set to empty string
- create a variable `currentVowelChain` and set to empty string
- iterate over the letters in the input string
  - create a variable called `currentLetter` save the current letter
  - if the `currentLetter` is a vowel
    - concatenate the `currentLetter` with the `currentVowelChain`
  - otherwise
    - if the `currentVowelChain` is longer than the `longestVowelChain`
      - set the `longestVowelChain` equal to the `currentVowelChain`
    - set currentVowelChain to empty string
- get the length of the longest vowel chain
*/


// function solve(s){
//   let longestVowelChain = "";
//   let currentVowelChain = "";
//   let isVowel = /[aeiou]/;

//   // suoidea
//   for (let letterIndex = 0; letterIndex < s.length; letterIndex += 1) {
//     let currentLetter = s[letterIndex];

//     if (isVowel.test(currentLetter)) {
//       currentVowelChain += currentLetter;
//     } else {
//       if (currentVowelChain.length > longestVowelChain.length) {
//         longestVowelChain = currentVowelChain;
//       }
//       currentVowelChain = "";
//     }
//   }
//   return longestVowelChain.length;
// }

function longestVowelChain(string) {
  let result = [];
  let vowels = 'aeiou';
  let count = 0;

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (vowels.includes(char)) count += 1;
    else count = 0;
    result.push(count);
  }

  return Math.max(...result);
}

console.log(longestVowelChain('codewarriors'));
console.log(longestVowelChain('codewarriors') === 2);
console.log(longestVowelChain('suoidea') === 3);
console.log(longestVowelChain('ultrarevolutionariees') === 3);
console.log(longestVowelChain('strengthlessnesses') === 1);
console.log(longestVowelChain('cuboideonavicuare') === 2);
console.log(longestVowelChain('chrononhotonthuooaos') ===5);
console.log(longestVowelChain('iiihoovaeaaaoougjyaw') === 8);
