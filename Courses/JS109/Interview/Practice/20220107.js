// function isUppercase(string) {
//   return string === string.toUpperCase();
// }

// console.log(isUppercase('t')); // false
// console.log(isUppercase('T')); // true
// console.log(isUppercase('Four Score')); // false
// console.log(isUppercase('FOUR SCORE')); // true
// console.log(isUppercase('4SCORE!')); // true
// console.log(isUppercase('')); // true

// function removeVowels(strings) {
//   return strings.map(string => string.replace(/[aeiou]/gi, ''));
// }

// function removeVowels(stringArray) {
//   return stringArray.map(string => {
//     let chars = string.split('');
//     let removedVowels = deleteVowels(chars);
//     return removedVowels.join('');
//   })
// }

// function deleteVowels(array) {
//   let vowels = 'aeiouAEIOU';
//   return array
//     .map(char => {
//       if (vowels.includes(char)) return '';
//       else return char;
//     })
// }

// My solution
// function removeVowels(stringArray) {
//   return stringArray
//     .map(string => {
//       return deleteVowels(string).join('')
//     })
// }


// function deleteVowels(string) {
//   let vowels = 'aeiouAEIOU';
//   return string
//     .split('')
//     .map(char => {
//       if (vowels.includes(char)) return '';
//       return char;
//     })
// }

// function removeVowels(stringArray) {
//   return stringArray.map(string => {
//     let chars = string.split('')
//     let removedVowels = deleteVowels(chars);
//     return removedVowels.join('')
//   });
// }

// function deleteVowels(array) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'B', 'C',, 'D', 'E'];
//   return array.map(char => {
//     // indexOf looks for the char in the array, returns -1 if not found
//     if (VOWELS.indexOf(char) >= 0) return '';
//     return char;
//   })
// }

// function removeVowels(array) {
//   const vowels = 'aeiouAEIOU'
//   let result = array.map((str) => {
//     return str
//       .split('')
//       .filter((char) => !vowels.includes(char))
//       .join('');
//   });
//   return result;
// }

// function removeVowels(array) {
//   const vowels = 'aeiouAEIOU';
//   return array.map(string => {
//     return string.split('').filter(char => !vowels.includes(char)).join('')
//   });
// }
// // console.log(deleteVowels('abcde'))
// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(string) {
//   let result = { lowercase: 0, uppercase: 0, neither: 0};

//   string.split('').forEach(char => {
//     if (char >= 'a' && char <= 'z') result.lowercase += 1;
//     else if (char >= 'A' && char <= 'Z') result.uppercase += 1;
//     else result.neither += 1;
//   });

//   return result;
// }

// function letterCaseCount(string) {
//   // if no match set variable to [] so that the length property can be used in the object
//   let lowercaseChars = string.match(/[a-z]/g) || [];
//   let uppercaseChars = string.match(/[A-Z]/g) || [];
//   let neitherChars = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   }
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word =>  {
//       return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(' ');
// }

// function wordCap(words) {
//   return words
//     .split(' ')
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char === char.toUpperCase()) return char.toLowerCase()
//       if (char === char.toLowerCase()) return char.toUpperCase()
//       else return char;
//     })
//     .join('');
// }

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     })
//     .join('');
// }

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
//     .join('');
// }
// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function staggeredCase(string) {
//   return string
//     .split('')
//     .map((char, idx) => {
//       if (idx % 2 === 0) return char.toUpperCase();
//       return char;
//     })
//     .join('');
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split('')
//     .map(char => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//         needUpper = false;
//         return char.toUpperCase();
//       } else {
//         needUpper = true;
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   })
//   .join('');
// }

// console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
// console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
// console.log(
//   staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
// );

/* Big list of 109 interview prep problems from Codewars */

// Count letters in string
function letterCount(string) {
  return string
    .split('')
    .reduce((obj, char) => {
      obj[char] = obj[char] + 1 || 1;
      return obj;
    }, {});
}

console.log(letterCount('abcdeabcde'))