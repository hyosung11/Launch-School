/* ============================
Easy 1 > 1. Isn't it Odd */

// function isOdd(number) {
//   return number % 2 !== 0;
// }

// function isOdd(number) {
//   return Math.abs(number) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

/* ============================
Easy 1 > 2. Odd Numbers */

// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }

/* ========================
Easy 1 > 3. Even Numbers */

// let number = 2;

// while (number <= 99) {
//   console.log(number)
//   number += 2;
// }

/* ========================
Easy 1 > 7. Short Long Short
JavaScript automatically coerces string primitives to String objects when needed. */

// function shortLongShort(string1, string2) {
//   if (string1.length > string2.length) return string2 + string1 + string2;
//   return string1 + string2 + string1;
// }

// function shortLongShort(str1, str2) {
//   let short = str1.length > str2.length ? str2 : str1;
//   let long = str2.length > str1.length ? str2 : str1;
//   return short + long + short;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

/* ========================
Easy 1 > 8. Leap Years (Part 1) */

// function isLeapYear(year) {
//   if (year % 400 === 0) return true;
//   if (year % 100 === 0) return false;
//   if (year % 4 === 0) return true;
//   return false;
// }

// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

/* ========================
Easy 1 > 9. Leap Years (Part 2) */

// function isLeapYear(year) {
//   if (year < 1752) return year % 4 === 0;
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true

/* ========================
Easy 1 > 10. Multiples of 3 and 5 */

// function multisum(number) {
//   let total = 0;

//   for (let idx = 1; idx <= number; idx += 1) {
//     if (idx % 3 === 0 || idx % 5 === 0)
//     total += idx;
//   }

//   return total;
// }

// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(maxValue) {
//   let sum = 0;

//   for (let number = 1; number <= maxValue; number += 1){
//     if (isMultiple(number, 3) || isMultiple(number, 5)) {
//       sum += number;
//     }
//   }

//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

/* ========================
Easy 1 > 11. UTF-16 String Value */

// function utf16Value(string) {
//   let sum = 0;
//   for (let idx = 0; idx < string.length; idx += 1) {
//     sum += string[idx].charCodeAt();
//   }
//   return sum;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

/* ========================
Easy 2 > 1. Welcome Stranger */

// function greetings(name, job) {
//   let fullName = name.join(' ');
//   let profession = `${job.title} ${job.occupation}`;

//   return `Hello, ${fullName}! Nice to have a ${profession} around.`
// }

// function greetings(name, job) {
//   return `Hello, ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`
// }

// function greetings(name, job) {
//   let fullName = name.join(' ');
//   let position = Object.values(job);
//   let title = position.join(' ');

//   return `Hello, ${fullName}! Nice to have a ${title} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/* ========================
Easy 2 > 2. Greeting a user */

// const readlineSync = require('readline-sync');

// let name = readlineSync.question("What is your name? ");

// if (name.endsWith('!')) { // `name[name.length - 1] === '!';
//   // negative index indicates an offset from the end of the sequence. `slice(0, -1)` extracts from the beginning to the second-to-last element in the sequence
//   name = name.slice(0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

/* ========================
Easy 2 > 3. Multiplying Two Numbers */

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const multiply = ((num1, num2) => num1 * num2);

// console.log(multiply(5, 3) === 15); // logs true

/* ========================
Easy 2 > 4. Squaring an Argument */

// const multiply = ((num1, num2) => num1 * num2);

// const square = (number => multiply(number, number));

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// Further Exploration
// const multiply = (num1, num2) => num1 * num2;
// const square = (number) => multiply(number, number);
// const power = (number, exponent) => exponent === 1 ? multiply(number, 1) : power(number, exponent - 1) * number;

// console.log(power(5, 3));

/* ========================
Easy 2 > 6. The End Is Near But Not Here */

// function penultimate(string) {
//   let word = string.split(' ');
//   return word[word.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Further Exploration
// function extractMiddle(str) {
//   const words = str
//     .trim()
//     .split(' ')
//     .filter(word => word !== ''); // remove array elements that are just extra spaces between words

//   // if 2 words or fewer, or empty string
//   if (words.length <= 2) {
//     return 'Please input string of 3 words or more';
//   }

//   const middleIdx = Math.ceil(words.length / 2) - 1;

//   // if even # of words, return array of two "middle" words
//   if (words.length % 2 === 0) {
//     return [words[middleIdx], words[middleIdx + 1]].join(' ');
//   } else {
//     return words[middleIdx].join(' ');
//   }
// }

// console.log(extractMiddle("last word")); // logs true
// console.log(extractMiddle("Launch School is great!")); // logs true

/* ========================
Easy 2 > 7. Exclusive Or */

// function xor(value1, value2) {
//   if ((value1 && !value2) || (!value1 && value2)) return true;
//   return false;
// }

// function xor(arg1, arg2) {
//   if (arg1 && arg2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// const xor = (oper1, oper2) => (!!oper1 === !!oper2 ? false : true);

// const xor = ((value1, value2) => !!value1 !== !!value2);

// // all should return `true`
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

/* ========================
Easy 2 > 8. Odd Lists */

// function oddities(array) {
//   let oddElements = [];

//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }

//   return oddElements;
// }

// function oddities(array) {
//   return array.filter((_, idx) => idx % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

/* =========================================
Easy 2 > 9. Convert a String to a Number! */

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   }
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/* =========================================
Easy 2 > 10. Convert a String to a Signed Number! */

// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-':
//       return -stringToInteger(string.slice(1, string.length));
//     case '+':
//       return stringToInteger(string.slice(1, string.length));
//     default:
//       return stringToInteger(string);
//   }
// }

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   }
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

/* =========================================
Easy 2 > 11. Convert a Number to a String! */

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// function integerToString(number) {
//   let digits = '0123456789';
//   let result = [];

//   while (number > 0) {
//     result.unshift(digits[number % 10]);
//     number = Math.floor(number / 10);
//   }
//   return result.join('');
// }

/* =========================================
Easy 2 > 12. Convert a Signed Number to a String! */

// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case +1:
//       return `+${integerToString(number)}`;
//     case -1:
//       return `-${integerToString(-number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// function integerToString(number) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

/* =========================================
Easy 3 > 1. ddaaiillyy ddoouubbllee */

// function crunch(text) {
//   let crunchText = '';

//   for (let idx = 0; idx < text.length; idx += 1) {
//     if (text[idx] !== text[idx + 1]) {
//       crunchText += text[idx];
//     }
//   }

//   return crunchText;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// // console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

/* =========================================
Easy 3 > 3. Stringy Strings */

// function stringy(size) {
//   let result = '';

//   for (let idx = 0; idx < size; idx += 1) {
//     let number = ((idx % 2) === 0) ? 1 : 0;
//     result += number;
//   }
//   return result;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function signedIntegerToString(number) {
//   switch(Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// function integerToString(number) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

/* =========================================
Easy 3 > 4. Fibonacci Number Location By Length */

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci
//   } while (String(fibonacci).length < length);

//   return count;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

/* =========================================
Easy 3 > 5. Right Triangles */

// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;

//   while (height > 0) {
//     console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
//     spaces -= 1;
//     stars += 1;
//     height -= 1;
//   }
// }

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

/* =========================================
Easy 3 > 7. Double Doubles

Algo
- input number
- check length of number
  - if odd-length, multiply number by two
  - if even-length
    - check left side against right side
      - if left-side digits are exactly the same as right-side digits
        - return number as-is
      - if not the same
        - multiply number by two
- return number */

// function twice(number) {
//   let stringNumber = String(number);
//   let center = Math.floor(stringNumber.length / 2);
//   let leftNumber = stringNumber.slice(0, center);
//   let rightNumber = stringNumber.slice(center);
//   return leftNumber === rightNumber ? number :number * 2;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

/* =========================================
Easy 3 > 8. Grade Book

Algo
- input three numbers
- calculate the mean of three numbers
  - assign letter grade to mean
- output letter as grade */

// function getGrade(...scores) {
//   let mean = scores.reduce((total, score) => total + score, 0) / scores.length;

//   if (mean >= 90) return 'A';
//   if (mean >= 80) return 'B';
//   if (mean >= 70) return 'C';
//   if (mean >= 60) return 'D';
//   return 'F'
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

/* =========================================
Easy 3 > 9. Clean up the words

Algo
- input string
- iterate through string
  - if char non-alphabetic replace with space
      - if consecutive non-alphabetic char, replace with only one space
  - if alphabetic char, add to string
- output new string */

// function cleanUp(string) {
//   let result = '';
//   let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx]
//     if (letters.includes(char)) {
//       result += char;
//     } else if (result[result.length - 1] !== ' ') {
//       result += ' ';
//     }
//   }

//   return result;
// }

// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

// function cleanUp(text) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   // `for..of` returns a list of values of the numeric properties of the object being iterated
//   for (let char of text) {
//     if (ALPHABET.includes(char.toLowerCase())) {
//       result.push(char);
//     } else if (result[result.length - 1] === ' ') {
//       continue;
//     } else {
//       result.push(' ');
//     }
//   }

//   return result.join('');
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
// console.log(cleanUp("WTF-ck*  Really!")); // "wtf ck Really

/* ===============================
Easy 3 > 10. What Century is That?

Algo
- input number representing a year
- calculate century
  - current year divided by 100 plus 1
  - if multiple of 100, the century is the current year divided by 100
- append the suffix
  - check the last digit of the century
  - if remainder of dividing the century by 100 ends in either 11, 12, or 13 add `th`
  - otherwise value of centuryNumber % 10
- output string of century number and suffix */

// function century(year) {
//   let centuryNumber = Math.ceil(year / 100);
//   return `${centuryNumber}${centurySuffix(centuryNumber)}`;
// }

// function centurySuffix(year) {
//   if ([11, 12, 13].includes(year % 100)) return 'th';

//   switch (year % 10) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"

/* ===============================
Easy 4 > 1. How Old Is Teddy? */

// function randomAge(min, max) {
//   let age = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log(`Teddy is ${age} years old`);
// }

// randomAge(20, 120);

// Easy 4 > 4. Palindromic Strings (Part 1)
// function isPalindrome(string) {
//   return string.split('').reverse().join('') === string;
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

/* ========================================
Easy 4 > 5. Palindromic Strings (Part 2) */

// function isRealPalindrome(string) {
//   string = removeNonLettersNumbers(string.toLowerCase());
//   return isPalindrome(string)
// }

// function removeNonLettersNumbers(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if ((isLetter(char)) || isNumber(char)) {
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

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isRealPalindrome('madam')); // true
// console.log(isRealPalindrome('Madam')); // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653')); // true
// console.log(isRealPalindrome('356a653')); // true
// console.log(isRealPalindrome('123ab321')); // false

/* ========================================
Easy 4 > 6. Palindromic Numbers */

// function isPalindromicNumber(number) {
//   let stringNumber = String(number);
//   return stringNumber === stringNumber.split('').reverse().join('');
// }

// function isPalindromicNumber(number) {
//   return isPalindrome(String(number));
// }

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

/* ========================================
Easy 4 > 7. Running Totals */

// function runningTotal(numbers) {
//   let total = 0;
//   return numbers.map(element => total += element)
// }

// function runningTotal(numbers) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     resultArray.push(sum += numbers[idx]);
//   }

//   return resultArray;
// }

// function runningTotal(array) {
//   let sum = 0;
//   return array.map(number => sum += number);
// }

// console.log(runningTotal([2, 5, 13]));  // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
// console.log(runningTotal([3])); // [3]
// console.log(runningTotal([])); // []
// console.log(runningTotal([1, 1, 2, 3, 5])); // [1, 2, 4, 7, 12]

/* ========================================
Easy 4 > 8. Letter Counter (Part 1) */

// function wordSizes(words) {
//   let result = {};

//   if (words === '') return result;

//   words.split(' ').forEach(word => {
//     result[word.length] = result[word.length] + 1 || 1;
//   });

//   return result;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes('')); // {}

/* ========================================
Easy 4 > 8. Letter Counter (Part 2) */

// function wordSizes(words) {
//   let count = {};
//   if (words === '') return count;
//   words = words.replace(/[^a-z\s]/gi, '');

//   words.split(' ').forEach((word) => {
//     count[word.length] = count[word.length] + 1 || 1;
//   });

//   return count;
// }

// console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes('')); // {}

/* ========================================
Easy 4 > 10. Letter Swap

Algo
- input string of words
- iterate through the words
  - split the string into space-delimited words
  - for each word
    - slice last char of word
    - slice middle of word
    - slice first char of word
- join the words back together
- return new string */

// function swap(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (word.length === 1) return word;
//       word.slice(word.length - 1) +
//     })
// }

// function swap(words) {
//   return words
//     .split(' ')
//     .map(word => {
//       if (word.length === 1) return word;
//       return word.slice(word.length - 1) + word.slice(1, word.length - 1) + word.slice(0, 1);
//     })
//     .join(' ');
// }

// function swap(words) {
//   return words
//     .split(' ')
//     .map((word) => {
//       if (word.length === 1) {
//         return word;
//       } else {
//         // last letter + middle letters + first letter
//         return (
//           word.slice(word.length - 1) +
//           word.slice(1, word.length - 1) +
//           word.slice(0, 1)
//         );
//       }
//     })
//     .join(' ');
// }

// console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde')); // "ebcdA"
// console.log(swap('a')); // "a"

/* ========================================
Easy 5 > 1. Cute Angles

Algo
- input number
- convert number into an angle between 0 and 360 degrees
  - return whole number as degrees 30.00 => 30 degrees
  - return fractional component as minutes and seconds
    - 76.73 degrees => (.73 * 60) 43.8 minutes => (.8 * 60) 48 seconds
- output string */

// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = 
// function dms(number) {

// }
// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

/* ==============
Alex's Problem
Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0. */

function maxMultiple (divisor, bound) {
  while (true) {
    if (bound % divisor === 0) return bound;
    bound -= 1;
  }
}


// Test Cases

// console.log(maxMultiple(2, 7));
// console.log(maxMultiple(3, 10));
// console.log(maxMultiple(7, 17));
// console.log(maxMultiple(10, 50));
// console.log(maxMultiple(37, 200));
// console.log(maxMultiple(7, 100));

console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);