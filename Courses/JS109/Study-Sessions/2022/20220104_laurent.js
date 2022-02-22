/* 09:15 scheduled to start */

/* Common Characters

Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer. 

Input: array of strings
Output: array of single characters

ALGORITHM

optional: sort the strings so that the shortest is first

Declare a result array, initialized to an empty array
Declare a variable `iterateString`
Declare a varaibale `otherStrings`

Iterate over the first string character by character
  Declare a variable `char`
  If the character is in every string
    we add the character to results
    we remove the character from each string

Return result
*/

// function commonChars(array) {
//   let result = [];
//   let iterateString = array[0]
//   let otherStrings = array.slice(1);

//   for (let index = 0; index < iterateString.length; index += 1) {
//     let char = iterateString[index];

//     if (otherStrings.every(string => string.includes(char))) {
//       result.push(char);
//       otherStrings = otherStrings.map(string => string.replace(char, ''));
//     }
//   }

//   return result;
// }

// console.log(commonChars(['abcfhsfshdlfushflsudhfl', 'a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
// console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []

/* ==============
Roman to Integer

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

PROBLEM
- input: string representing Roman numeral
- output: an Arabic number

Rules:
- return the Arabic number equivalent of the Roman number
- if 'I' before 'V' subtract 1 to make  4
- if 'I' before 'X' subtract 1 to make 9
- if 'X' before 'L' subtract 10 to make 40
- if 'X' before 'C' subtract 10 to make 90
- if 'C' before 'D' subtract 100 to mak 400
- if 'C' before 'M' subtract 100 to make 900

EXAMPLES
- 'IV' => 4

DATA STRUCTURE
- input: string
- intermediary: object, match string to object value
- output: number

ALGORITHM
- input string
- initialize `values` to object of Roman number values
- split input string into char
- initialize `arabicNumber` to 0
- iterate by char
  - check char value in `values` object
  - increment `arabicNumber` with char's value
- return number */

function romanToInt(symbol) {
  let romanNumValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let romanDigits = symbol.split('');
  let arabicNumber = 0;

  for (let idx = 0; idx < romanDigits.length; idx++) {
    let char = romanDigits[idx];
    // check for order of symbols here
    if (char === 'I' && romanDigits[idx + 1] === 'V') {
      arabicNumber -= 1;
    } else if (char === 'I' && romanDigits[idx + 1] === 'X') {
      arabicNumber -= 1;
    } else if (char === 'X' && romanDigits[idx + 1] === 'L') {
      arabicNumber -= 10;
    } else if (char === 'X' && romanDigits[idx + 1] === 'C') {
      arabicNumber -= 10;
    } else if (char === 'C' && romanDigits[idx + 1] === 'D') {
      arabicNumber -= 100;
    } else if (char === 'C' && romanDigits[idx + 1] === 'M') {
      arabicNumber -= 100;
    } else {
      arabicNumber += romanNumValues[char];
    }
  }

  return arabicNumber;
}

console.log(romanToInt('I')); // 1
console.log(romanToInt('II')); // 2
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('XL')); // 40
console.log(romanToInt('XC')); // 90
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('MCDLXXVI')); // 1476

// Laurent's Version
function romanToInt(roman) {
  const values = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  return roman
    .split('')
    .reduce((acc, char, index, array) => {
      if (char === 'I' && array[index + 1] === "V") return acc - 1;
      if (char === 'I' && array[index + 1] === "X") return acc - 1;
      if (char === 'X' && array[index + 1] === "L") return acc - 10;
      if (char === 'X' && array[index + 1] === "C") return acc - 10;
      if (char === 'C' && array[index + 1] === "D") return acc - 100;
      if (char === 'C' && array[index + 1] === "M") return acc - 100;
      else {
        return acc + values[char];
      }
    }, 0);
}