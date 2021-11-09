/* JS101 - Small Problems > String and Text Processing > 3. Lettercase Counter

Lettercase Counter

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

PROBLEM
- input: string
- output: object

Identify rules
- input a string
- check for uppercase, lowercase, and nonletters
- return an object that indicates how many of each are in the string

EXAMPLES / TEST CASES
'abCdef 123' => {lowercase: 5, uppercase: 1, neither: 4}

- spaces are neither
- numbers are neither

DATA STRUCTURE
- input: string
- intermediary:
- output: object

ALGORITHM
- initialize empty object
- iterate through the string
  - check each char
    - if lowercase add
    - if uppercase add
    - if neither add
- return object

CODE
- test code while programming */

// Solution 1
function letterCaseCount(string) {
  let counts = {lowercase: 0, uppercase: 0, neither: 0};

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  return counts;
}

// Examples:
console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }