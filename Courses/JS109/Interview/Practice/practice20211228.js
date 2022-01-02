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
- join chars into a string
- return new string */

// function staggeredCase(string) {
//   return string
//     .split('')
//     // To determine the appropriate case, the solution uses the index value provided by the Array.prototype.map method.
//     .map((char, idx) => {
//       if (idx % 2 === 0) {
//          // The String.prototype.toUpperCase and String.prototype.toLowerCase methods handle both alphabetic and non-alphabetic characters.
//         return char.toUpperCase();
//       } else {
//         return char.toLowerCase();
//       }
//     })
//     //  After the transformation, the solution joins the characters back together using the Array.prototype.join method, and returns the resulting string.
//     .join('');
// }

// console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Staggered Caps 2
Algo
- input string
- initialize `needUpper` to true
- split string into chars
  - iterate by char
    - convert char to lowercase
    - if char is lowercase
      - if needUpper is true
        - toggle needUpper to false
        - return char to uppercase
      - else
        - toggle needUpper to true
        - return char (to lowercase) already lowercase
    - else
      - return char
- join chars to string
- return new string */

// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split('')
//     .map(char => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char;
//         }
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

// console.log(staggeredCase('AB_CD')) // 'Ab_Cd'
// console.log(staggeredCase('I Love Launch School!'));
// console.log(staggeredCase('AB_CD') === 'Ab_Cd') // 'Ab_Cd'
// console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
// console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
// console.log(
//   staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
// );

// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split('')
//     .map((char) => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char;
//         }
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

/* How long are you?
Algo
- input string
- if argument is an empty string or if no argument is passed return an empty array
- words are separated by a single space
- split string at space into words
- iterate through words
  - return word and
  - return word.length
- return array of words and their lengths */

// function wordLengths(words) {
//   if (words === '' || words === undefined) return [];

//   return words
//     .split(' ')
//     .map(word => `${word}  ${word.length}`);
// }

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []
// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

/* Search Word 1
Algo
- input `target` and `text`
- split the text into words at spaces
- iterate through words of `text`
  - filter words that match target via lowercase comparison (eliminates punctuation)
  - return length
- return count as length of filter method return value */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(target, text) {
//   return text
//     .split(' ')
//     .filter(word => word.toLowerCase() === target.toLowerCase())
//     .length;
// }

// console.log(searchWord('sed', text));      // 3

/* Algo
- input target and text
- split text into words at spaces
- iterate through words of text
  - compare word to lowercase with target word to lowercase
    - if strictly equal, highlight word and convert to uppercase
    - else return word
- join words back into string
- return string with highlighted words */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// function searchWord(target, text) {
//   return text
//     .split(' ')
//     .map(word => word.toLowerCase() === target.toLowerCase() ? `**${word.toUpperCase()}**` : word)
//     .join(' ');
// }

// console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"

/* Three-way comparison
Algo
- input string1 and string2
- compare the lengths of the two strings
  - if string1 is shorter return -1
  - if string2 is shorter return 1
  - if string1 and string2 are equal in length return 0 */

// function compareByLength(str1, str2) {
//   if (str1.length < str2.length) return -1;
//   if (str1.length > str2.length) return 1;
//   if (str1.length === str2.length) return 0;
// }

// console.log(compareByLength('patience', 'perseverance')); // -1
// console.log(compareByLength('strength', 'dignity'));      //  1
// console.log(compareByLength('humor', 'grace'));           //  0

/* Transformation */

// console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));
// console.log('Captain Ruby'.substring(0, 8) + 'JavaScript');
// console.log('Captain Ruby'.slice(0, 8) + 'JavaScript');
// console.log('Captain Ruby'.split(' ')[0] + ` JavaScript`);
// console.log('Captain Ruby'.split(' ')[0] + ' JavaScript');

// function greet(code) {
//  switch (code) {
//    case 'en': return 'Hi'
//    case 'fr': return 'Salut'
//  }
// }

// console.log(greet('en')); // 'Hi!'
// console.log(greet('fr')); // 'Salut!'
// console.log(greet('pt')); // 'Olá!'
// console.log(greet('de')); // 'Hallo!'
// console.log(greet('sv')); // 'Hej!'
// console.log(greet('af')); // 'Haai!'

/* Vowel Count

Given a string of one or more words, return an array that contains the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

PROBLEM
- input: string
- output: array of numbers

Rules
- return an array of numbers representing the number of vowels in each word of the argument string
- implicit that a word is space delimited
- case doesn't matter
- if word doesn't have vowels, return 0

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array
  - map?
- output: array

ALGORITHM
 - input string
 - if string is an empty string return an empty array
 - split the string into words at each space
 - iterate through each word
  - count the number of vowels in each word with `vowels` helper function
 - return array of numbers representing the number of vowels in each word

`vowels` helper function
- input word
- iniitalize `count` to 0
- initialize `vowels` to lower and upper case vowels
- split the word by char
- iterate through the word by char
  - if char is a vowel
    - increment count
- return count */

// function vowelCount(string) {
//   if (string === '') return [];
//   let words = string.split(' ');
//   return words.map(word => vowels(word)); // for each word in the input string, check its vowel count and then return an array of the counts of each of the words
// }

// function vowels(word) {
//   let count = 0;
//   let vowels = 'aeiouAEIOU';

//   word.split('').forEach(char => {
//     if (vowels.includes(char)) count += 1;
//   });

//   return count;
// }

// // Examples
// console.log(vowelCount('')); // []
// console.log(vowelCount('grrr!')); // [0]
// console.log(vowelCount('WhaTs yOur enneagram?')); // [1, 2, 4]
// console.log(vowelCount('Colonel Sanders feeds me well !!')); // [3, 2, 2, 1, 1, 0]

// console.log(vowelCount('ZoInkies!! There are monsters in here.')); // [4, 2, 2, 2, 1, 2]

/* Three by Three Problem Description

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4] from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12] so our function would return true. See the below test cases for more examples

PROBLEM
- input: array of string numbers
- output: boolean

Rules
- if at least three elements in an an array have digits whose sum is divisible by 3 return true
- false otherwise
- elements are only string of digits 0-9

EXAMPLES
- ['35', '01110', '126', '57', '13'] => [8, 3, 9, 12, 13] => divisible by 3 [-, 1, 2, 3, -] = 3 elements

DATA STRUCTURE
- input: array of string digits
- intermediary: split sets of digits into strings and sum
- output: boolean

ALGORITHM
- input array of digit strings
- iterate through the array
  - split the elements into digits
  - iterate through digits of each element
    - compute the sum of digits of each element
    - check if sum is divisible by 3 without a remainder
      - if true add to length of array elements
      - continue otherwise
- return true if three or more elements' digits are divisible by 3 without a remainder
- return false if less than three */

// function threeByThree(array) {
//   let result = array
//     .map(string => {
//       return string.split('').reduce((sum, digit) => sum + Number(digit), 0);
//     })
//     .filter(num => num % 3 === 0)
//     .length;

//   if (result > 2) return true;
//   return false;
// }

// console.log(threeByThree(['0']) === false) // true
// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']) === true); // true
// console.log(threeByThree(['01112', '2043', '12043']) === false); // true
// console.log(threeByThree(['01112', '2043']) === false); // true
// console.log(threeByThree(['93', '9', '1', '25', '1212']) === true); // true

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Algo
- input string
- initialize `result` to empty object
- iterate over string
  - check for char
    - if exists in `result` increment
    - else add to `result` and set value to 1
- iterate through string again
  - check for first char in object whose value is 1
  - return index position
- return -1 if not found */

// function firstUniqChar(string) {
//   let result = {};

//   string.split('').forEach(char => {
//     result[char] ? result[char] += 1 : result[char] = 1;
//   });

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if (result[char] === 1) return idx;
//   }

//   return -1;
// }

// console.log(firstUniqChar("leetcode")) // 0
// console.log(firstUniqChar("loveleetcode")) // 2
// console.log(firstUniqChar("aabb")) // -1

// function duplicateCount(string) {
//   let result = {};

  // for (let idx = 0; idx < string.length; idx += 1) {
  //   let char = string[idx].toLowerCase();
  //   result[char] ? (result[char] += 1) : (result[char] = 1);
  // }

//     string.split('').forEach(char => {
//       char = char.toLowerCase();
//       result[char] ? result[char] += 1 : result[char] = 1;
//     });

//   return Object.values(result).filter((num) => num > 1).length;
// }

// console.log(duplicateCount('')); // 0)
// console.log(duplicateCount('abcde')); // 0
// console.log(duplicateCount('aabbcde')); // 2
// console.log(duplicateCount('aabBcde')); // 2
// console.log(duplicateCount('Indivisibility')); // 1
// console.log(duplicateCount('Indivisibilities')); // 2

/* Max Multiple Problem Description

Given a divisor and a bound, find the largest number N such that:

N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

Algo
- input two numbers
  - divisor
  - bound
- iterate from bound to divisor descending
- find highest multiple of divisor that divides into bound without a remainder
- return number */

// function maxMultiple(divisor, bound) {
//   while (true) {
//     if (bound % divisor === 0) return bound;
//     bound -= 1;
//   }
// }

// function maxMultiple(divisor, bound) { // 3 and 10
//   let result = 0;
//           // 3 = 3; 3 <= 10; 3 += 3, 6, 9, 12
//   for (let current = divisor; current <= bound; current += divisor) {
//     result = current
//   }

//   return result;
// }

// Test Cases
// console.log(maxMultiple(2, 7) === 6); // true
// console.log(maxMultiple(3, 10) === 9); // true
// console.log(maxMultiple(7, 17) === 14); // true
// console.log(maxMultiple(10, 50) === 50); // true
// console.log(maxMultiple(37, 200) === 185); // true
// console.log(maxMultiple(7, 100) === 98); // true

/* Common Elements

Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

Algo
- input array1 and array2
- initialize `result` array
- iterate through array1
  - iterate through array2
    - check if number exists in both arrays and is not already in `results` array
    - if not in `results` array push number into results array
- return new array */

// function commonElements(nums1, nums2) {
//   let result = [];

//   nums1.filter(num1 => {
//     nums2.filter(num2 => {
//       if (num1 === num2 && !result.includes(num2)) result.push(num2);
//     })
//   })

//   return result;
// }

// function commonElements(array1, array2) {
//   let result = [];

//   array1.filter((num1) => {
//     array2.filter((num2) => {
//       if (num1 === num2 && !result.includes(num1)) result.push(num1);
//     });
//   });

//   return result;
// }

// Examples/test cases:
// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // => [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2])); // ➞ [1, 2]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

// function commonElements(array1, array2) {
//   let result = [];

//   for (let idx = 0; idx < array1.length; idx++) {
//     let num1 = array1[idx];

//     for (let jdx = 0; jdx < array2.length; jdx++) {
//       let num2 = array2[jdx];
//       if (num1 === num2 && !result.includes(num1)) result.push(num1);
//     }
//   }

//   return result;
// }

// function commonElements(array1, array2) {
//   let result = [];

//   array1.filter((num1) => {
//     array2.filter((num2) => {
//       if (num1 === num2 && !result.includes(num1)) result.push(num1);
//     });
//   });

//   return result;
// }

// function repeat(num, string) {
//   let result = '';
//   for (let idx = 0; idx < num; idx++) {
//     result += string;
//   }

//   return result;
// }

// function repeat(num, string) {
//   return string.repeat(num);
// }
// console.log(repeat(3, 'ha')); // 'hahaha'

// let single = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

// console.log(single);

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// console.log(energy.shift());
// energy.splice(0, 1);
// console.log(energy.push('geothermal'));
// energy = energy.slice(1);
// energy.push('geothermal')
// console.log(energy);

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let letters = Array.from(alphabet);
// console.log(letters);

// console.log(Array.from([1, 2, 3], num => num * 2));

// let scores = [96, 47, 113, 89, 100, 102];

// let count = 0;

// // scores.forEach(num => {
// //   if (num >= 100) count += 1;
// // });

// for (let index = 0; index < scores.length; index++) {
//   let num = scores[index];
//   if (num >= 100) count += 1;
// }

// console.log(count);
// console.log(scores.filter(num => num >= 100).length);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
//   let synonyms = vocabulary[vocabularyIdx];

//   for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
//     console.log(synonyms[synonymIdx]);
//   }
// }
// Expected output:
// happy
// cheerful
// merry
// etc...

// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);

// function filter(input) {
//   // Is input an array?
//   return Array.isArray(input);
// }

// console.log(filter('yes'));

// let someValue1 = [0, 1, 0, 0, 1];
// let someValue2 = 'I leave you my Kingdom, take good care of it.';

// console.log(Array.isArray(someValue1)); // true
// console.log(Array.isArray(someValue2)); // false

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

// function contains(city, destinations) {
//   if (destinations.includes(city)) return true
//   return false;
// }

// function contains(city, destinations) {
//   for (let idx = 0; idx < destinations.length; idx++) {
//     if (destinations[idx] === city) return true;
//   }
//   return false;
// }

// function contains(element, list) {
//   // returns -1 if not found which means false
//   // if found it will return the index position of the element which will be at 0 or more in the array
//   return list.indexOf(element) >= 0;
// }

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// console.log(passcode.join('-'));
// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let joinedPasscode = '';

// for (let i = 0; i < passcode.length; i += 1) {
//   if (i > 0) {
//     joinedPasscode += '-';
//   }

//   joinedPasscode += passcode[i];
// }

// console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// while (groceryList.length > 0) {
//   let checkedItem = groceryList.shift();

//   console.log(checkedItem);
// }

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// console.log(groceryList); // []

// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!
//                       // should log: Hello, world!

// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(`${greeting}, ${recipient}!`);
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`);
// }

// // console.log(greet());
// greet();

// function calculateBMI(heightInCentimeters, weightInKilograms) {
//   let heightInMeters = heightInCentimeters / 100;
//   let bmi = weightInKilograms / heightInMeters**2;

//   return bmi.toFixed(2);
// }

// console.log(calculateBMI(180, 80));

/* Calculate Cat Age
Algo
- input number (as human years)
- 1 human year equals 15 cat years
- 2nd human year equals 9 cat years
  - 2 human years equals 24 cat years
- every year after two human years adds 4 cat years
- return number (as cat years)  */

// function catAge(humanYears) {
//   switch (humanYears) {
//     case 0: return 0;
//     case 1: return 15;
//     case 2: return 24;
//     default: return 24 + (humanYears - 2) * 4;
//   }
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

// Remove Last Char
// function removeLastChar(string) {
//   // return string.slice(0, string.length - 1);
//   return string.substring(0, string.length - 1);
// }

// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

/* Arrow Functions 1 */
const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// const sentence = ((verb, noun) => {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// })

// let sentence = ((verb, noun) => template
//   .replace('VERB', verb)
//   .replace('NOUN', noun));

// console.log(sentence('like', 'birds'));
// // logs: I like birds.

// let initGame = () => ({
//   level: 1,
//   score: 0
// });

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// // console.log(student['courses'])
// console.log(student.courses);
// console.log(student.locker); // undefined

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus',
//   },
//   occupation: 'engineer',
// };

// // console.log(jane.location.country);
// console.log(jane['location']['country']);

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// // Add property 'age'.
// fido.age = 2;
// // Add property 'favorite food'.
// // simple assignment syntax
// fido['favorite food'] = 'steak';

// console.log(fido);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // a property value can be a function expression
//   greet: function(name) {
//     console.log(`Hej, ${name}`);
//   },
// };

// // method invocation
// jane.greet('Bobby'); // Hej, Bobby!

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // => { prefix: 'Pacific'}

// let ocean = {};
// let prefix = 'Indian';
// let suffix = 'test';

// // bracket notation accepts expressions, including variables
// ocean[prefix] = 'Pacific';
// ocean[suffix] = 'Atlantic';

// console.log(ocean); // { 'Indian': 'Pacific'}

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function () {
    console.log('Harr Harr!');
  },
};

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }

// for (let prop in obj) {
//   console.log(`${prop} (${typeof prop})`)
// }

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7,
// };

// // let keys = [];

// // for (let prop in vehicle) {
// //   keys.push(prop);
// // }

// let keys = Object.keys(vehicle);

// console.log(keys);

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// // let nestedPerson = Object.entries(person)
// let nestedPerson = [];

// for (let property in person) {
//   nestedPerson.push([property, person[property]]);
// }


// console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let person = {}

// for (let idx = 0; idx < nestedArray.length; idx++) {
//   let keyValue = nestedArray[idx];
//   person[keyValue[0]] = keyValue[1];
// }

let person = Object.fromEntries(nestedArray);

console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }