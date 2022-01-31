/* Decipher This - 6 kyu

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces */

/*
INPUT: string
OUTPUT: string

RULES
- For Each Word:
  - the second and the last letter is switched (e.g. Hello becomes Holle)
  - the first letter is replaced by its character code (e.g. H becomes 72)
  - there are no special characters used, only letters and spaces

EXAMPLES
1) "72olle" -> 72, "o", "l", "l", "e"
2) "72olle" -> H, "o", "l", "l", "e"
3) "72olle" -> H, "e", "l", "l", "o"

/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
- the second and the last letter is switched (e.g. Hello becomes Holle)
- replace the character code with its letter 

(the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces 

Algo
- input string
- create an empty result array
- split string into `words` an array of substrings by space
- iterate over substrings
  - initialize `codepoint` to value of extracting the numeric chars of the current substring (regex)
  - initialize `letters` to the alphabetic chars of the current substring (regex)
  - convert the numeric chars into a letter via its codepoint and append to beginning of chars
  - swap the 2nd and last chars of `chars`
    - initialize `second` to 1 (2nd index position of chars)
    - initialize `last` to end of chars
  - join the chars of the substring
  - append the substring to the result array
- join the substrings into a string
- return the new string */

// function decipherThis(string) {
//   let result = [];
//   let words = string.split(' ');

//   for (let idx = 0; idx < words.length; idx++) {
//     let word = words[idx];
//     // `+` concatenates the digits
//     let codepoint = word.match(/[0-9]+/g) || [];
//     let letters = word.match(/[a-z]/g) || [];
//     letters.unshift(String.fromCharCode(codepoint));

//     let second = 1; // index position to change of letter
//     let last = letters.length - 1; // other letter to change

//     [letters[second], letters[last]] = [letters[last], letters[second]];

//     letters = letters.join('');

//     result.push(letters)   

//     // console.log(letters)
//   }

//   return result.join(' ');
// }



// Examples
// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
// console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Have a go at this and see how you do')


/* ALGORITHM
- create an empty result array
- break the string by whitespace into an array of strings
- iterate over the array of strings
  - extract the numeric characters of the current string
  - extract the alphabetic characters of the current string
  - convert the numeric characters into a letter
  - swap the 2nd and last characters
  - join the characters array
  - append the processed string to the result array
- join the string into a string
- return the string
*/

function decipherThis(string) {
  const words = string.split(' ');
  const result = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    const codePoint = words[idx].match(/[0-9]+/g) || [];
    const characters = words[idx].match(/[a-z]/g) || [];
    characters.unshift(String.fromCharCode(codePoint))

    const second = 1;
    const last = characters.length -1;

    [characters[second], characters[last]] = [characters[last], characters[second]];

    result.push(characters.join(''))
  }

  return result.join(' ');
}

/*
Input: string
Output: string
Rules
- the input string is a sentence that has the first letter of each word in its character code
- return the string with all the characters in it to be letters
- the second letter is also the last letter
- there are no special characters -- only letters and spaces

Algorithm
- iterate over each word in the input string. during each round of iteration:
  - obtain the first letter from the character code in each number
  - remove the number from each word
    - split the word and if is letter then return only the letters
  - append the first letter to the + remaining letters of the word
  - if the words length is greater than than 2 switch the second last and last word and return
  - if the words length is 2 or less then return the word
- append the words together in a sentence and return the sentence
*/

// function decipherThis(str) {
//   return str.split(' ').map(word => {
//     let firstLetter = String.fromCharCode(parseInt(word));
//     word = word.split('').filter(char => isLetter(char)).join('');
//     if (word.length <= 1) return firstLetter + word;
//     return firstLetter + word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
//   }).join(' ');
// };

// function isLetter(char) {
//   char = char.toLowerCase();
//   return char >= 'a' && char <= 'z';
// }

// another version with `map`
// function decipherThis(str) {
//   // let words = str.split(" ");

//   return str.split(' ').map((word) => {
//     let charCode = parseInt(word);
//     let letter = String.fromCharCode(charCode);
//     word = word.replace(charCode, letter);
//     if (word.length > 2) 
//       return word = word[0] + word[word.length - 1] + word.slice(2,word.length - 1) + word[1];
//       else return word;
//   }).join(" ");
// };

// Examples
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Have a go at this and see how you do')