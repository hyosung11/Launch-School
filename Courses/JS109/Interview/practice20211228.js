// Sum of Digits
// function sum(number) {
//   return String(number)
//     .split('')
//     .reduce((sum, digit) => sum + Number(digit), 0);
// }

// console.log(sum(23)); // 5
// console.log(sum(496)); // 19
// console.log(sum(123456789)); // 45

// function isUppercase(string) {
//   return string === string.toUpperCase();
// }
// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// function removeVowels(array) {
//   return array
//     .map(word => deleteVowels(word))
// }

// function deleteVowels(string) {
//   let vowels = 'AEIOUaeiou';
//   return string
//     .split('')
//     .map(char => {
//       if (vowels.includes(char)) {
//         return '';
//       } else {
//         return char;
//       }
//     }).join('');
// }

// console.log(deleteVowels('Sungoh'));

/* Algo
- input array of words
- initialize `vowels` to upper and lower case vowels
- iterate through words
  - split each word into chars
  - iterate through chars of each word
  - if char is a vowel, replace with empty string
  - if char is not a vowel return char
  - join the chars back into a string
- return array of words without vowels */

// function removeVowels(words) {
//   let vowels = 'AEIOUaeiou';

//   return words
//     .map(word => {
//        return word
//         .split('')
//         .map(char => {
//           if (vowels.includes(char)) return '';
//           return char;
//         })
//         .join('')
//     });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/* Lettercase Counter
Algo
- input string
- initialize `count` object to collect occurrences of lowercase, uppercase, and neither chars from input string
- split the string into chars
- iterate through input string by char (using map or filter)
  - if char is lowercase increment count of lowercase by 1
  - if char is uppercase increment count of uppercase by 1
  - if char is neither increment count of neither by 1
- return `count` object */

// function letterCaseCount(string) {
//   let count = { lowercase: 0, uppercase: 0, neither: 0 };

//   string.split('').map(char => {
//     if (char >= 'a' && char <= 'z' ) return count.lowercase += 1;
//     if (char >= 'A' && char <= 'Z') return count.uppercase += 1;
//     return count.neither += 1;
//   });

//   return count;
// }
// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/* Capitalize Words
Algo
- input string
- split string into words at space
- iterate through words
  - convert first char of each word to capital letter
  - concatenate rest of letters as lowercase letters
  - join words at space
- output new string */

// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }
// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

/* Swap Case
Algo
- input string
- split string at char
- iterate through chars
  - if char is uppercase, return it as lowercase char
  - if char is lowercase, return it as uppercase char
  - if neither return char
  - join chars together
- return new string */

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char === char.toLowerCase()) {
//         return char.toUpperCase();
//       } else if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char;
//       }
//     })
//     .join('')
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

/* Staggered Caps 1
Algo
- input string
- split string by char
- iterate through chars
  - if index position of char is even, capitalize char
  - if index position of char is odd, lowercase char
  - if non-alphabetic char, return char
- return new string */

function staggeredCase(string) {
  return string
    .split('')
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else if (idx % 2 === 1) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"