/* Decipher This - 6 kyu

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    replace the character code with its letter (e.g. 72 becomes H)

Note: there are no special characters used, only letters and spaces

Examples



decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go 

PROBLEM:
  return the letter asscociated with its charcater code.
  return the second portion of the word second and the last letter that is switched... join
  
  EXAMPLE / TEST CASES
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));

DATA STRUCTUE:
an array of words
slice the first portion of the word which is a number; return the letter
slice the second and the last letter is switched
join all together

ALGORITHM
  first define function with para string
    iterate through array of words
    let numbers = [1,2,3...
      let numArray = [];
      let finalSecond =
      extract the first portion of the word so we get a number... charCodeAt
        initialize to a variable numberPos =
        switch the second and the last letter
          initialize the second portion of string to secondStr =
            iterate through my variable numberPos return secondStr

*/

// function decipherThis(string) {
//   let numbers = '1234567890'.split('');
//   let result = [];

//   let arrayWords = string.split(' ');

//   let numArray = arrayWords.map((word) => {
//     return word
//       .split('')
//       .map((letter) => {
//         if (numbers.includes(letter)) {
//           return letter;
//         } else {
//           return letter.replace(letter, '');
//         }
//       })
//       .join('');
//   });

//   let secondStr = arrayWords.map((wordSecond) => {
//     return wordSecond
//       .split('')
//       .map((letterSecond) => {
//         if (numbers.includes(letterSecond)) {
//           return letterSecond.replace(letterSecond, '');
//         } else {
//           return letterSecond;
//         }
//       })
//       .join('');
//   });

//   let finalSecond = secondStr.map((ele) => {
//     return ele[ele.length - 1] + ele.slice(1, -1) + ele[0];
//   });

//   for (let i = 0; i < numArray.length; i++) {
//     result.push(String.fromCharCode(Number(numArray[i])) + finalSecond[i]);
//   }

//   return result.join(' ');
// }

// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
// console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Have a go at this and see how you do'

// function decipherThis(str) {
//   let result = [];
//   let words = str.split(' ');

//   for (let idx = 0; idx < words.length; idx++) {
//     let word = words[idx];
//     let codepoint = word
//       .split('')
//       .filter((char) => char >= '0' && char <= '9')
//       .join('');
//     let firstLetter = String.fromCharCode(Number(codepoint));
//     let combined = firstLetter + word.slice(codepoint.length);

//     if (combined.length > 2) {
//       word =
//         combined[0] +
//         combined[combined.length - 1] +
//         combined.slice(2, -1) +
//         combined[1];
//       result.push(word);
//     } else {
//       result.push(combined);
//     }
//   }

//   return result.join(' ');
// }

// function decipherThis(str) {
//   const strings = str.split(' ');
//   const result = [];

//   for (let idx = 0; idx < strings.length; idx += 1) {
//     const codePoint = strings[idx].match(/[0-9]+/g) || [];
//     const characters = strings[idx].match(/[a-z]/g) || [];
//     characters.unshift(String.fromCharCode(codePoint));

//     const second = 1;
//     const last = characters.length - 1;

//     [characters[second], characters[last]] = [
//       characters[last],
//       characters[second],
//     ];

//     result.push(characters.join(''));
//   }

//   return result.join(' ');
// }
