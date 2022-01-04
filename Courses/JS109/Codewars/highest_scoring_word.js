/* Highest Scoring Word aka Alphabet Score - 6 kyu

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


/* rasodha
input: string
output: string
Rules / Requirements
- given a string of words, you need to find the highest scoring word
- each letter of a word scores points according to its position in the alphabet: a = 1, b = 2...
- you need to return the highest scoring word as a string
- if two words score the same, return the word that appears the earliest in the original string
- all letters will be lowercase and all inputs will be valid
Examples / Test Cases
- high('man i need a taxi up to ubud') => 'taxi'
Questions / Implicit Reqs
- will the input always be provided? -- yes
- will the input always be a string? -- yes
- will the input string always contain at least one word? -- yes
Data Structure
- array -- iteration methods, HOF
Algorithm
1. create wordsArray and init to the input string split by a single space into an array of words
- create highestScore and init to the first element in wordsArray
- iterate over wordsArray from the first index to the last and on each round of iteration:
  - if the current word in iteration passed to getScore is greater than highestScore passed to get score
    - reassign highestScore to the current word in iteration
- once the loop has terminated, return highest score

2. create getScore HF - takes string, returns number
- create alphabet and init to a string with all letters from the alphabet in lowercase
- create totalScore and init to 0
- iterate over the characters in the input string and on each round of iteration:
  - obtain the index of the current letter in the alphabet string, add 1 to it and add it to totalScore
- once the loop has terminated, return totalScore
*/
function getScore(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').reduce((totalPoints, letter) => totalPoints + (alphabet.indexOf(letter) + 1), 0);
}

function high(x){
  let wordsArr = x.split(' ');
  let highestScore = wordsArr[0];
  
  for (let idx = 1; idx < wordsArr.length; idx++) {
    if (getScore(wordsArr[idx]) > getScore(highestScore)) {
      highestScore = wordsArr[idx];
    }
  }
  
  return highestScore;
}

// Felicia Bacon

function high(sentence) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let wordScores = {};

  sentence.split(' ').forEach((word) => {
    let score = 0;
    word.split('').forEach((character) => {
      if (character.match(/[a-z]/i)) {
        let points = ALPHABET.indexOf(character.toLowerCase()) + 1;
        score += points;
      }
    });
    wordScores[word] = score;
  });

  let highestScore = Math.max(...Object.values(wordScores));
  return Object.keys(wordScores).filter(
    (word) => wordScores[word] === highestScore
  )[0];
}

// Ainaa
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function high(sentence) {
  let words = sentence.split(' ');
  let highestWord = words[0];

  words.forEach((word) => {
    let currentScore = tallyScore(word);

    if (currentScore > tallyScore(highestWord)) {
      highestWord = word;
    }
  });

  return highestWord;
}

function tallyScore(word) {
  let score = 0;

  for (char of word) {
    score += ALPHABET.indexOf(char) + 1;
  }

  return score;
}

/* Sergio Pichardo

INPUT: string
OUTPUT: string

RULES
- you need to find the highest scoring word.
- Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
- all letters are lowercase
- all inputs will be valid (no empty string as input)
- If two words score the same, return the word that appears earliest in the original string.

EXAMPLES
- highest scoring: 'aa' --> 1 + 1 = 2
- highest scoring: 'aa', 'b' --> 2, 2

ALGORITHM
- create a variable and set to empty string to track highest scoring word
- create a variable and set to 0 to track highest score

- split the string by single space into an array of strings
- traverse the array of strings
  - for each string calculate the total score and store in variable (HELPER function)
  - if the current word has a higher score than the highest score variable 
    - reassign highestScore to equal the current score 
    - reassign highestScoreWord to equal the current score word
- return highestScoreWord

calculateAlphabeticScore(string): string -> number 
- split the input string into an array of characters
- create a variable and store string with all alphabetic characters (a-z)
- create a variable and set to 0 to store the total sum 
- traverse through the letters in the array of characters 
  - get the index of the current letter in the alphabet string + 1
  - add the current value to the running total sum variable
- return total sum 
*/
function high(x) {
  let highestScoreWord = '';
  let highestScore = 0;

  x.split(' ').forEach(word => {
    let curWordScore = calculateAlphabeticScore(word);
    if (curWordScore > highestScore) {
      highestScoreWord = word;
      highestScore = curWordScore;
    }
  });
  return highestScoreWord;
}

function calculateAlphabeticScore(string) {
  const VARYING_CHAR_DIFFERENCE = 96;
  return string.split('').reduce((acc, char) => {
    let curScore = char.charCodeAt() - 96;
    return acc + curScore;
  }, 0);
}

