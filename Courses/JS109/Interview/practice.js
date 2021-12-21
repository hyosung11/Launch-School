/* JS109 Interview Assessment Practice Problems - Curated by Aaron Smith */

/* Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Algo
- input two strings
- compare the length of the two strings
- concatenate the shorter string, the longer string, and the shorter string together
- return new string
*/

// function shortLongShort(string1, string2) {
//   let result = '';
//   if (string1.length < string2.length) {
//     result = string1 + string2 + string1;
//   } else {
//     result = string2 + string1 + string2;
//   }
//   return result;
// }

// // Examples:
// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

/* UTF-16 String Value
Algo
- input string
- iterate through the input string
  - check the UTF-16 value of each char
  - add the values of the chars together
- return number */

// function utf16Value(string) {
//   let total = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     // total += string[idx].charCodeAt()
//     // alternatively
//     total += string.charCodeAt(idx);
//   }

//   return total;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

/* Alternating Strings / Stringy Strings
Algo
- input positive integer as `size` argument
- initialize `result` string
- iterate to value of `size`
  - start string with `1`
  - alternate with `0`
  - increment `result` string
- return `result` string */

// function stringy(size) {
//   let result = '';
//   for (let idx = 0; idx < size; idx += 1) {
//     let number = ((idx % 2 === 0) ? 1 : 0);
//     result += number;
//   }
//   return result;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

/* Double Char (Part 1)
Algo
- input string
- iterate through each char of input string
  - double each char
- return new string */

// function repeater(string) {
//   return string
//     .split('')
//     .map(char => {
//       return char.repeat(2);
//     })
//     .join('');
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

/* Double Char (Part 2)
Algo
- input string
- iterate through input string
  - if char is a consonant double it
  - return all other chars as is
- return new string */

// function doubleConsonants(string) {
//   let consonants = 'bcdfghjklmnpqrstvwxyz';
//   return string
//     .split('')
//     .map(char => {
//       return consonants.includes(char.toLowerCase()) ?  char.repeat(2) : char;
//       })
//     .join('');
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

/* Get the Middle Character
Algo
- input string
- check the length of the string
- find the middle character or characters of the string
  - if string has an odd length, return one character
  - if string has an even length, return two chars
- return string */

// function centerOf(string) {
//   let middle = Math.floor(string.length / 2);
//   if (string.length % 2 === 1) {
//     return string[middle];
//   } else {
//     return string[middle - 1] + string[middle];
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

/* Uppercase Check
Algo
- input string
- iterate through input string
  - if all alphabetic chars are uppercase, return true
  - otherwise return false
  - ignore chars that are not alphabetic
- return boolean */

// function isUppercase(string) {
//   return string.toUpperCase() === string;
// }
// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

/* Lettercase Percentage Ratio
Algo
- input string
- initialize `percents` to object with `lowercase`, `uppercase` and `neither` keys with values set to 0
- iterate through each char of input string
  - if char is lowercase, increment count of `lowercase`
  - if char is uppercase, increment count of `uppercase`
  - if char is neither, increment count of `neither`
- initialize `calculatePercents` helper function
  - iterate through the values of `percents` object
    - compute percentages of each value
    - return value to two decimal places
- return object */

// function letterPercentages(string) {
//   let percents = { lowercase: 0, uppercase: 0, neither: 0 };

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (char >= 'a' && char <= 'z') {
//       percents.lowercase += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       percents.uppercase += 1;
//     } else {
//       percents.neither += 1;
//     }
//   }

//   return calculatePercents(percents, string);
// }

// function calculatePercents(object, string) {
//   let totalChars = string.length;
//   for (let key in object) {
//     object[key] = (object[key] / totalChars * 100).toFixed(2);
//   }
//   return object;
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Delete Vowels
Algo
- input array of strings
- initialize `VOWELS` string to all lower and uppercase vowels
- iterate through string array
  - iterate through each word of string array
    - split word at each char
      - if char is not a vowel return char
    - join chars
- return new words array without vowels */

// function removeVowels(array) {
//   let vowels = 'aeiouAEIOU';

//   return array
//     .map(word => word
//     .split('')
//     .filter(char => !vowels.includes(char))
//     .join(''));
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/* Leading Substrings
Algo 1
- input: string
- split string at each char
- iterate through string
  - find all leading substrings
    - slice string at index 0, index + 1
- return array of substrings */

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
// }

/* Algo 2
- input string
- initialize `substrings` to empty array
- iterate through the string
  - find leading substrings
    - slice the string at 0, idx + 1
    - push slices into `substrings`
- return array of substrings */

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// console.log(leadingSubstrings('a')); // ["a"]
// console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
// console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* All Substrings
Algo
- input string
- initialize `substrings` to an empty array
- iterate through input string
  - initialize `substring` to value of string sliced at idx
  - reassign `substrings` to substrings concatenated with leadingSubstrings helper function passed the value of the `substring` argument
- return `substrings` array of all substrings of input string */

// function substrings(string) {
//   let substrings = [];
//   for (let startIdx = 0; startIdx < string.length; startIdx += 1) {
//     let substring = string.slice(startIdx);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
// }

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

/* Palindromic Substrings
Algo
- input string
- invoke `substrings` function to find all substrings
  - invoke `leadingSubstrings` function
- invoke `isPalindrome` function
- filter and return palindromes
- return array */

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function substrings(string) {
//   let substrings = [];
//   for (let idx = 0; idx < string.length; idx += 1) {
//     let substring = string.slice(idx);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string
//     .split('')
//     .map((_, idx) => string.slice(0, idx + 1));
// }

// console.log(palindromes('abcd')); // []
// console.log(palindromes('madam')); // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/* WORDS SECTION
The End Is Near But Not Here
Algo
- input: string
- initialize `wordsArray` to the value of the string split into words at each space
- return: the second to last element in the array */

// function penultimate(words) {
//   let wordsArray = words.split(' ');
//   return wordsArray[wordsArray.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

/* Clean up the words
Algo
- input string of words
- initialize `result` to empty string
- iterate through the input string at each char
  - if char is a lowercase letter or an uppercase letter
    - append `result` with char
  - if char is not a letter
    - append `result` with space
    - unless previous char in `result` is a space
- return `result` string with only letters and spaces */

// function cleanUp(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (isLowercaseLetter(char) || isUppercaseLetter(char)) result += char;
//     else if (result[result.length - 1] !== ' ') result += ' ';
//   }
//   return result;
// }

// function isLowercaseLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isUppercaseLetter(char) {
//   return char >= 'A' && char <= 'Z';
// }

// console.log(cleanUp('a1b2_c3'));
// console.log(cleanUp('Okay**)(let--us!@#$$play$$$'))
// console.log(cleanUp("---what's my +*& line?")); // " what s my line "

/* Letter Swap
Algo
- input string of words separated by spaces
- initialize `wordsArray` to value of the words split into an array at each space
- initialize `swapped` and iterate (map) through each word of `wordsArray`
  - split the word at each char
  - reverse the chars
  - join the chars back together
- return `swapped` with the words joined at the space back together as a string */

// function swap(words) {
//   let wordsArray = words.split(' ')
//   let swapped = wordsArray.map(word => word.split('').reverse().join(''));
//   return swapped.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde')); // "ebcdA"
// console.log(swap('a')); // "a"

/* Name Swapping
Algo 1
- input string as first and last name
- split the names at the space
- reverse the names
- join the names
- return name with last name then first name

Algo 2
- input string of names
- initialize `splitName` to split names at space
- pop the first name
- join the names together
- return the names */

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// function swapName(name) {
//   let splitName = name.split(' ')
//   return `${splitName.pop()}, ${splitName.join(' ')}`
// }

// console.log(swapName('Joe Roberts')); // "Roberts, Joe"
// console.log(swapName('Omi Michelle Bidol-Lee')); // Bidol-Lee, Omi Michelle

/* Capitalize Words
- input string
- split string into words at each space
- iterate through each word
  - capitalize first char of each word and concatenate with
  - lowercase chars of the rest of the word
  - join the chars into a string
- return string */

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
- split into chars
- iterate through input string
  - if char is lowercase letter return uppercase letter of char
  - if char is uppercase letter return lowercase letter
  - if char is neither return char
- join chars together
- return new string */

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if (char >= 'a' && char <= 'z') return char.toUpperCase();
//       if (char >= 'A' && char <= 'Z') return char.toLowerCase();
//       return char;
//     })
//     .join('');
// }

// console.log(swapCase('CamelCase')); // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"

/* Staggered Caps 1
Algo
- input string
- split string into chars
- iterate through chars
  - capitalize first char at index 0 and every other char
  - lowercase second char at index 1 and every other char
  - return non-alphabetic chars as-is
- join chars together
- return new string */

// function staggeredCase(string) {
//   return string
//     .split('')
//     .map((char, idx) => {
//       if (idx % 2 === 0) return char.toUpperCase();
//       return char.toLowerCase();
//     })
//     .join('');
// }

// console.log(staggeredCase('123abcdefg'))
// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Staggered Caps 2
Algo
- input string
- initialize `needUpper` to true
- split string into chars
- iterate (map) through chars
  - initialize `char` to value of char to lowercase
  - if char is letter
    - if needUpper is true
      - change needUpper to false
      - return char to uppercase
    - else
      - needUpper is true
      - return char to lowercase
    - else
      -  return char
- join chars
- return new string  */

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
//           return char.toLowerCase();
//         }
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

// console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
// console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
// console.log(
//   staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
// );

/* How long are you?
Algo
- input string
- if argument is an empty string return an empty array
- if no argument is passed return an empty array
- split string into words at the space
- iterate through string of words
  - return word and word's length as a number
- return array */

// function wordLengths(words) {
//   return words ? words.split(' ').map(word => `${word} ${word.length}`) : [];
// }

// function wordLengths(words) {
//   if (words === '' || words === undefined) return [];

//   return words
//     .split(' ')
//     .map(word => `${word} ${word.length}`);
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

/* Search Word Part 1
Algo
- input two arguments: a word and a string of text
- initialize `count` to 0
- split the text into words at the space
- iterate through text
  - if `letters` matches word in text, increment count
- return `count` as number of occurrences of target

Algo 2
- input word and text string arguments
- split the text at each space into letters
- iterate through the text
  - filter number of occurrences when letters match word
  - return length
- return number */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(target, text) {
//   let count = 0;

//   text.split(' ').map(word => {
//     if (word.toLowerCase() === target.toLowerCase()) count += 1;
//   })

//   return count;
// }

// function searchWord(word, text) {
//   return text
//     .split(' ')
//     .filter(letters => letters.toLowerCase() === word.toLowerCase())
//     .length;
// }
// console.log(searchWord('sed', text)); // 3

/* Search Word Part 2
Algo
- input word and text strings as arguments
- split the text at each space words
- iterate through words
  - check if word to lowercase is equal to targetWord to lowercase
    - if true return word to uppercase highlighted
    - if false return word
- join words into string
- return text with every instance of the word highlighted */

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// function searchWord(targetWord, text) {
//   return text
//     .split(' ')
//     .map(word => word.toLowerCase() === targetWord.toLowerCase() ? `**${word.toUpperCase()}**` : word)
//     .join(' ');
// }

// console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"

/* Medium 1 > Word to Digit
algo
- input string
- initialize `NUM_WORDS` to object
- split string at space into words
- iterate through words
  - if word is a number word change it to its digit equivalent
  - if not a number word return the word
- output new string */

// function wordToDigit(words) {
//   const NUM_WORDS = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9
//   }

//   return words
//     .split(' ')
//     .map(word => {
//       if (Object.keys(NUM_WORDS).includes(word)) {
//         return NUM_WORDS[word];
//       } else if (Object.keys(NUM_WORDS).includes(filter(word))) {
//         return NUM_WORDS[filter(word)] + '.';
//       }
//       else return word;
//     })
//     .join(' ');
// }

// function filter(words) {
//   return words = words.toLowerCase().split('').filter(char => {
//     if (char >= 'a' && char <= 'z') return char;
//   })
//   .join('')
// }

// const NUM_WORDS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };

// function wordToDigit(words) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     words = words.replace(regex, NUM_WORDS[word])
//   });
//   return words;
// }


// console.log(wordToDigit('Please call me at five five five one two three four. The eight is weight.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* Palindromic Strings 1
- input string
- compare string to
  - split string into chars
  - reverse chars
  - join chars
- return boolean */

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('Madam')); // false (case matters)
// console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
// console.log(isPalindrome('356653')); // true

/* Palindromic Strings 2
Algo
- input string
- reassign string to value of converting chars to lowercase and removing any chars that aren't letters or numbers
- return if it's a palindrome
- initialize `removeNonLettersNumbers` helper function
  - initialize `result` to empty string
  - iterate through input string
  - initialize `isLetter` and `isNumber` helper functions to check for letters and numbers
  - if char is a letter increment the result
  - if char is a number increment the result
  - return result
- return boolean */

// function isRealPalindrome(string) {
//   string = removeNonLettersNumbers(string.toLowerCase());
//   return isPalindrome(string);
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// function removeNonLettersNumbers(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if (isLetter(char) || isNumber(char)) {
//       result += char;
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isNumber(char) {
//   return char >= '0' && char <= '9';
// }

/* Regex
- input string
- reassign string to lowercase and replace all chars that arent letters or numbers with an empty string char
- return true if palindrome
- return false otherwise */

// function isRealPalindrome(string) {
//   string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return isPalindrome(string);
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

function isRealPalindrome(string) {
  string = cleanString(string);
  return isPalindrome(string);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

/* Algo
- input string
- initialize `lettersNumbers` to letters and numbers
- reassign string to lowercase and split at each char
- initialize `result` to filter the chars for letters and numbers and join together
- return result string */

// function cleanString(string) {
//   let lettersNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   string = string.toLowerCase().split('');
//   let result = string.filter(char => lettersNumbers.includes(char)).join('');
//   return result;
// }

// console.log(isRealPalindrome('madam')); // true
// console.log(isRealPalindrome('Madam')); // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653')); // true
// console.log(isRealPalindrome('356a653')); // true
// console.log(isRealPalindrome('123ab321')); // false

/* Bubble Sort
- input array
- loop through array
- while true
  - let swapped be false
  - if array element at lower index is less than array element at next index continue
  - if array element at lower index is greater than array element at the next index swap elements
  - reassign `swapped` to true
  - if not swapped break
- output sorted array */

// function bubbleSort(array) {
//   while (true) {
//     let swapped = false;
//     for (let idx = 1; idx < array.length; idx++) {
//       if (array[idx - 1] <= array[idx]) continue;
//       // destructuring assignment
//       [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
//       swapped = true;
//     }
//     if (!swapped) break;
//   }
// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/* Alphabetic Numbers
Algo
- initialize `NUMBER_WORDS` lookup table to the number words
- input array
- return array sorted via `wordSort` helper function
  - input num1, num2
  - compare `NUMBER_WORDS` of num1 with NUMBER_WORDS of num2
    - if num1 > num2 return 1
    - if num1 < num2 return -1
    - if neither return 0
- return array */

// array of words mapped to their index
// const NUMBER_WORDS = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
//   'ten',
//   'eleven',
//   'twelve',
//   'thirteen',
//   'fourteen',
//   'fifteen',
//   'sixteen',
//   'seventeen',
//   'eighteen',
//   'nineteen',
// ];

// function alphabeticNumberSort(array) {
//   // the callback function passed to `sort` is the `wordSort` function
//   // apply `sort` to the return value of `[...array]`
//   return [...array].sort(wordSort);
// }

// function wordSort(num1, num2) {
//   // uses the `NUMBER_WORDS` array to perform word lookups
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) return 1;
//   if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) return -1;
//   return 0;
// }

// console.log(alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/* Letter Counter 1
Algo
- input string
- initialize `count` to an empty object
- split string at spaces into words
- iterate through words
  - initialize `wordSize` to length of word at idx
  - if wordSize is 0 continue
  - Ensure that the property for the current wordSize in the count object exists and has a value. If the property does not exist (i.e., count[wordSize] evaluates to undefined), set it to 0.
  - Otherwise, just set it to its current value. Note that we use bang prefix here. This prefix converts the value to a boolean and reverses it.
  - increment the count for a particular wordSize by 1.
- return result */

// function wordSizes(string) {
//   let count = {};
//   let wordsArray = string.split(' ');
//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let wordSize = wordsArray[idx].length;
//     if (wordSize === 0) continue;
//     if (!count[wordSize]) count[wordSize] = 0;
//     count[wordSize] += 1;
//   }

//   return count;
// }

// function wordSizes(string) {
//   let wordCount = {};
//   if (string === '') return wordCount;
//   string.split(' ').forEach(word => {
//     wordCount[word.length] = wordCount[word.length] + 1 || 1;
//   });
//   return wordCount;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes('')); // {}

/* Letter Counter 2
- input string
- initialize `count` to empty object
- if string is empty return count
- reassign words to value of replacing all nonletters with empty string
- split string at spaces into words
- iterate through words
  - add word length to count or increase count
- return `count` object */

// function wordSizes(words) {
//   let count = {};
//   if (words === '') return count;
//   words = words.replace(/[^a-z\s]/gi, '');

//   words.split(' ').forEach(word => {
//     count[word.length] = count[word.length] + 1 || 1;
//   });

//   return count;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes('')); // {}

/* Lettercase Counter
- input string
- initialize `count` object with lowercase, uppercase, and neither properties set to 0 for all three
- split the string at each char
- iterate through each char
  - if char lowercase increment lowercase property of count
  - if char uppercase increment uppercase property of count
  - if neither increment neither property of count
- return count object */

// function letterCaseCount(string) {
//   let count = { lowercase: 0, uppercase: 0, neither: 0 };

//   string.split('').map(char => {
//     if (char >= 'a' && char <= 'z') {
//       count.lowercase += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       count.uppercase += 1;
//     } else {
//       count.neither += 1;
//     }
//   });

//   return count;
// }

// function letterCaseCount(string) {
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 };

//   string.split('').filter(char => {
//     if (char >= 'a' && char <= 'z') return counts.lowercase += 1;
//     if (char >= 'A' && char <= 'Z') return counts.uppercase += 1;
//     return counts.neither += 1;
//   });

//   return counts;
// }
// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/* Matching Parentheses
- input string
- initialize `parens` to 0;
- split string into chars
- iterate through chars
  - if char is '(' increment parens
  - if char is ')' decrement parens
  - if parens less than zero return false
- return true if parens balanced or return false if not */

// function isBalanced(string) {
//   let parens = 0;

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if (char === '(') {
//       parens += 1;
//     } else if (char === ')') {
//       parens -= 1;
//     }
//     if (parens < 0) return false;
//   }
//   return parens === 0;
// }

// console.log(isBalanced('What (is) this?') === true);
// console.log(isBalanced('What is) this?') === false);
// console.log(isBalanced('What (is this?') === false);
// console.log(isBalanced('((What) (is this))?') === true);
// console.log(isBalanced('((What)) (is this))?') === false);
// console.log(isBalanced('Hey!') === true);
// console.log(isBalanced(')Hey!(') === false);
// console.log(isBalanced('What ((is))) up(') === false);

/* UNITS
Leap Years 1
*/

// function isLeapYear(year) {
//   if (year % 400 === 0 ) return true;
//   if (year % 100 === 0) return false;
//   if (year % 4 === 0) return true;
//   return false;
// }

// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
// }

// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) return true;
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// console.log(isLeapYear(2016) === true);      // true
// console.log(isLeapYear(2015) === false);      // false
// console.log(isLeapYear(2100) === false);      // false
// console.log(isLeapYear(2400) === true);      // true
// console.log(isLeapYear(240000) === true);    // true
// console.log(isLeapYear(240001) === false);    // false
// console.log(isLeapYear(2000) === true);      // true
// console.log(isLeapYear(1900) === false);      // false
// console.log(isLeapYear(1752) === true);      // true
// console.log(isLeapYear(1700) === true);      // false
// console.log(isLeapYear(1) === false);         // false
// console.log(isLeapYear(100) === true);       // false
// console.log(isLeapYear(400) === true);       // true