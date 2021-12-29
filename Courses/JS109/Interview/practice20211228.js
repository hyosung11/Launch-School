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

