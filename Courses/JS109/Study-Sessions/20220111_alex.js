/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

    the first and last characters remain in original place for each word
    characters between the first and last characters must be sorted alphabetically
    punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

    words are separated by single spaces
    only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia

ALGORITHM
- input string
- initialize `punctuation` to "-',.";
- initialize `result` to empty string
- initialize `noSpecials` to empty array
- iterate through string
  - if char is included in punctuation string, continue
  - else noSpecials.push char
- initialize sortedNoSpecialsSlice to noSpecials.slice(1, noSpecials.length - 1).sort()
- iterate original string
  - if char at first or last index position, increment `result` string with char
  - if char included in the punctuation string increment result with char
  - otherwise increment result with the first element from the sortedNoSpecials
  - delete element just used
- return new string

noSpecials[0] + noSpecials.slice(1, noSpecials.length - 1).sort() + noSpecials[noSpecials.length - 1] */

// function scrambleWords(string) {
//   let arrayOfWords = string.split(' ');
//   return arrayOfWords.map((word) => scrambleWord(word)).join(' ');
// }

// function scrambleWord(string) {
//   let punctuation = "-',.'";
//   let result = '';
//   let noSpecials = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (!punctuation.includes(string[idx])) noSpecials.push(string[idx]);
//   }

//   let sortedNoSpecials = noSpecials.slice(1, noSpecials.length - 1).sort();

//   sortedNoSpecials.unshift(noSpecials[0]);
//   sortedNoSpecials.push(noSpecials[noSpecials.length - 1]);
//   // console.log(sortedNoSpecials);

//   for (let idx = 0; idx < string.length; idx++) {
//     if (punctuation.includes(string[idx])) {
//       result += string[idx];
//     } else {
//       result += sortedNoSpecials[0];
//       sortedNoSpecials.shift();
//     }

//   return result;
// }

// refactored
function scrambleWords(words) {
  return words.split(' ').map((word) => scrambleWord(word)).join(' ');
}

function scrambleWord(words) {
  let punctuation = "-',.'";
  let result = '';
  let letters = [];

  for (let idx = 0; idx < words.length; idx++) {
    let char = words[idx]
    if (!punctuation.includes(char)) letters.push(char);
  }

  let sortedLetters = letters.slice(1, letters.length - 1).sort();

  sortedLetters.unshift(letters[0]);
  sortedLetters.push(letters[letters.length - 1]);
  // console.log(sortedNoSpecials);

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (punctuation.includes(char)) {
      result += char;
    } else {
      result += sortedLetters[0];
      sortedLetters.shift();
    }
  }

  return result;
}

// console.log(scrambleWords('you'));
// console.log(scrambleWords('i') === 'i') // 'Must handle single character words')
// console.log(scrambleWords('me') === 'me'); // 'Must handle 2 character words'
// console.log(scrambleWords('you') === 'you'); // 'Must handle 3 character words')

// console.log(scrambleWords('professionals'));

console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')

console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

console.log(scrambleWords('-dcba') === '-dbca'); // 'Must handle special character at the start')

console.log(scrambleWords('dcba.') === 'dbca.'); // 'Must handle special character at the end')

console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence');

// function typoglyc(word) {
//   let alphaArr = [];
//   let puncObj = {};

//   for (let index = 0; index < word.length; index++) {
//     let char = word[index];
//     isAlpha(char) ? alphaArr.push(char) : (puncObj[index] = char);
//   }

//   if (Object.keys(puncObj).length === 0 && alphaArr.length < 4) return word; // Edge Case

//   let middleSlice = alphaArr.slice(1, -1).sort();
//   let typoArr = [].concat(alphaArr[0], middleSlice, alphaArr.slice(-1));

//   for (let indexPos in puncObj) {
//     typoArr.splice(indexPos, 0, puncObj[indexPos]);
//   }

//   return typoArr.join('');
// }

// function isAlpha(character) {
//   return character.toLowerCase() >= 'a' && character.toLowerCase() <= 'z';
// }

// function ScrambleWords(string) {
//   return string
//     .split(' ')
//     .map((word) => typoglyc(word))
//     .join(' ');
// }

/*
Algorithm
Input: String         Output: String
1. Split the String into an Array of Words separated by spaces

2a. Create a Function to check if a letter is alphabetic.

2. Iterate through each Word, and return a Transformed Word -> Transformed Word to create a New Array
  - Create an Empty Array to capture Alphabetic Letters
  - Create an Empty Object to capture Punctuation
  
    - EDGE CASE CHECK -> if the Punctuation Object is empty AND the length of the word is less than 4
      return the word
  
    - Iterate through each Character in the Word
      - If it is Alphabetic, add it to the Alphabetic Array
      - Otherwise, add the punctuation location as a Key, and the Punctuation as a Value
    
  - Within the Alphabet Array, keep the positions at the beginning and end
    - Characters in the Middle - sort alphabetically and replace the characters in the middle with the alphabetically sorted characters
    
  - Iterate through the keys in the Punctuation Object, use each key as the Index and we're going to Add the value at that particular Index

3. Return the New Array rejoined as a String
*/

// ScrambleWords = function (str) {
//   // declare array of punctuations
//   const PUNC = ["'", ',', '.', '-'];

//   // split the input by word
//   let wordArr = str.split(' ');

//   // map the word array and use an extensive callback function
//   return wordArr
//     .map((elem) => {
//       // split each word into another array of characters
//       let arr = elem.split('');
//       // declare an array to hold any punctuation
//       let puncArray = [];

//       // iterate over the arr array and see if any punctuation is present. if so, store the
//       // character and its string in a tuple in puncArray. we'll use this later to re-insert
//       for (let idx = elem.length; idx >= 0; idx--) {
//         if (PUNC.includes(arr[idx])) {
//           puncArray.push([arr[idx], idx]);
//         }
//       }

//       // filter out punctuation from arr
//       arr = arr.filter((char) => !PUNC.includes(char));

//       // at this point, if the array is less than 4 characters, just return the element as it
//       // doesn't need to be sorted
//       if (arr.length < 4) return elem;

//       // splice out all arr values except the first and last, and sort the spliced values.
//       // store this sorted array in new variable middleArr
//       let middleArr = arr.splice(1, arr.length - 2).sort();

//       // put the first/last characters into middleArr in their respective places
//       middleArr.splice(0, 0, arr[0]);
//       middleArr.push(arr[1]);

//       // add the punctuation back in by splicing them in. we splice them in at the index we
//       // stored previously.
//       if (puncArray.length) {
//         for (let idx = 0; idx < puncArray.length; idx++) {
//           middleArr.splice(puncArray[idx][1], 0, puncArray[idx][0]);
//         }
//       }

//       // for each elem in wordArr, we're returning the middleArr string joined. this is the
//       // mapped value
//       return middleArr.join('');
//     })
//     .join(' ');
//   // ^ overall we're returning the joined wordArr, so that's why that join method is there
// };
