// function solve(arr) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   return arr.map((word) => {
//     let letterCount = 0;
//     for (let index = 0; index < word.length; index += 1) {
//       let char = word[index].toLowerCase();
//       if (char === alphabet[index]) {
//         letterCount += 1;
//       }
//     }
//     return letterCount;
//   });
// }

// function solve(arr) {
// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// return arr.map((word) => {
//   let counter = 0;
//   for (let i = 0; i < word.length; i += 1) {
//     if (alphabet[i].includes(word[i].toLowerCase())) {
//       counter += 1;
//     }
//   }

//     return counter;
//   });
// };

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function solve(arr) {
  let results = [];

  arr.forEach((word) => {
    let count = 0;
    word.split('').forEach((char, indx) => {
      if (indx === ALPHABET.indexOf(char.toLowerCase())) {
        count += 1;
      }
    });
    results.push(count);
  });
  return results;
}

function solve(arr){    
  return arr.map(string => {
    string = string.toLowerCase();
    return string.split('').reduce((acc, char, index) => {
      let curCharCode = getCharPosition(char);
      if (curCharCode === index + 1) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });
};

function getCharPosition(char) {
  return char.charCodeAt() - 96;
}

/*
given an array of strings check for each string, how many letters in the word
occupy the same position in the word that they do in the alphabet.

ALGORITHM:
  - set a variable = []
  - for each string in the array:
    - set counter = 0
    - set the string = string.lowerCase()
    - for each letter in the string
      - set variable = the letter's index + 1
      - find letter's position in the alphabet (HELPER)
      - if they are equal increment the counter
    - push counter to result array
*/

// Felicia Bacon
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function solve(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // return result
    let word = array[i].toLowerCase();
    let count = 0;

    for (let j = 0; j < word.length; j++) {
      // increment count variable
      let letter = word[j];
      if (j === alphabet.indexOf(letter)) {
        count += 1;
      }
    }
    result.push(count); // add count to result
  }

  return result;
}

/*
Input: array 
Output: array
Rules
- take the input array of words and return an array with numbers indicating how many letters in the corresponding word have
letters in the same position as they are in the alphabet

Algorithm
- create an alphabet array with all the letters in the alphabet lowercased
- iterate over the input array
  - declare count on each round of iteration and set it to 0
  - iterate over the letters in each word
    - if the index of the current + 1. is equal to the index of the letter in the alphabet array + 1, increment count by 1
    - after iterating over the entire word return the value of result
- after iterating on all the words in the input array, return the new array with the counts
*/

function solve(arr){  
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return arr.map(word => {
    let count = 0;
     word.split('').map((letter, idx) => {
      if (idx + 1 == alphabet.indexOf(letter.toLowerCase()) + 1) {
        count++;
      }
    });
    return count;
  });
}

function solve(arr){  
  // declare alphabet array
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  // convert all elements to lowercase
  arr = arr.map(elem => elem.toLowerCase());
  
  // use another map on the array and return the output
  return arr.map((elem, idx) => {
    // initialize a counter
    let counter = 0;
    // iterate over each individual string within the array
    for (let i = 0; i < elem.length; i++) {
      // if the current index matches the index of ALPHA's index for the current value, increment counter
      if (i === ALPHA.indexOf(elem[i])) {
        counter++
      }
    }
    // use counter as the mapped value
    return counter;
  });
};