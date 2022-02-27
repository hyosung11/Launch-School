/* Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Problem
- input string
- output an object

Rules
- return an object with percentages of char that are lowercase, uppercase, and neither
- no empty string inputs
- return percentage as a string to two decimal places

Examples
- 'abCdef 123' => { lowercase: "50.00", uppercase: "10.00", neither: "40.00"}

Data Structure
- input string
- inside object
- output object

Algorithm
- declare `letterPercentages()` with `string` parameter
- init `percentages` to object lowercase = 0, uppercase = 0 and neither = 0

- iterate over string
  - if char is lowercase increment `lowercase` in `percentages` by 1
  - if char is uppercase increment `uppercase` in `percentages` by 1
  - else increment `neither` by 1

- iterate over `percentages`
  - divide values by length of string
  - change value to string totwo decimals places

- return `percentages`

*/

function letterPercentages(string) {
  let percentages = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach((char) => {
    if (/[a-z]/.test(char)) {
      percentages.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  });

  for (let key in percentages) {
    percentages[key] = ((percentages[key] * 100) / string.length).toFixed(2);
  }
  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(string) {
  let percentages = {};
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  string.split('').forEach((char) => {
    if (/[a-z]/.test(char)) {
      lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      uppercase += 1;
    } else {
      neither += 1;
    }
  });

  percentages['lowercase'] = ((lowercase * 100) / string.length).toFixed(2);
  percentages['uppercase'] = ((uppercase * 100) / string.length).toFixed(2);
  percentages['neither'] = ((neither * 100) / string.length).toFixed(2);
  return percentages;
}

/* Anagram Difference */
/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

PROBLEM
-return number of letters in first string that are not in second + number of letters in second string that are not in first
-all inputslowercase
-if both inputs are empty return 0

EXAMPLES
check!

DATA STRUCTURES
in: two strings
between: string copies
out: num

ALGO
- in: str1, str2
- init count = 0
- init str1Copy to slice of string1
- init str2Copy to slice of string2

-iterate through str1
  if str2copy doesnt include current char, 
    count += 1
    
  str2copy = str2copy.replace(char, '')
  
-iterate through str2
  if str1copy doesnt include current char, 
    count += 1
  str1copy = str1copy.replace(char, '')

- return count
*/

function anagramDifference (str1, str2) {

  let count = 0;
  let str1Copy = str1.slice();
  let str2Copy = str2.slice();

  for (let idx = 0; idx < str1.length; idx += 1) {
    if (!str2Copy.includes(str1[idx])) {
      count = count + 1;
    }
    str2Copy = str2Copy.replace(str1[idx], '');
  }

  for (let idx = 0; idx < str2.length; idx += 1) {
    if (!str1Copy.includes(str2[idx])) {
      count = count + 1;
    }
    str1Copy = str1Copy.replace(str2[idx], '');
  }

  return count;
}

/* My version refactored from Alex's solution */

console.log(anagramDifference('', '') === 0);
console.log(anagramDifference('a', '') === 1);
console.log(anagramDifference('', 'a') === 1);
console.log(anagramDifference('ab', 'a') === 1);
console.log(anagramDifference('ab', 'ba') === 0);
console.log(anagramDifference('ab', 'cd') === 4);
console.log(anagramDifference('aab', 'a') === 2);
console.log(anagramDifference('a', 'aab') === 2);
console.log(anagramDifference('codewars', 'hackerrank') === 10);


/* Anagram Difference

Given two words, how many letters do you have to remove from them to make them anagrams?

Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10

Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

09:34 start
09:56 solved with some testing

Problem
- input string1 and string2
- output number

Rules
- return a number representing the number of letters that have to be removed to make the two strings anagrams
- anagram occurs when two words have the same letters in the same amounts
- all lowercase letters
- two empty strings are considedred anagrams

Examples
- '', '' => 0 because no both empty strings
- 'a', '' => 1 because remove 'a' from string1 to get two empty strings
- 'ab', 'a' => 1 because remove 'b' from string1 and you get 'a', 'a'
- 'ab', 'ba' => 0 as they are already anagrams
- 'ab'. 'cd' => 4 because all different letters, so need to add 'cd' to string1 to make 'abcd' and need to add 'ab' to string2 to make 'cdab'

Data Structure
- input string
- inside array or string manipulation
- output number

Algorithm
- declare `anagramDifference` with `string1` and `string2` parameters
- init `count` to 0
- init `string1Copy` to complete slice of string1
- init `string2Copy` to complete slice of string2

- iterate over string1
  - if string2Copy does not include string1 at idx
    - increment count by 1
  - in string2Copy replace string1 at idx with empty string
  
- iterater over string2
  - if string1Copy does not include string2 at idx
    - increment count by 1 // don't increment
  - in string1Copy replace string2 at idx with empty string

- return `count`
*/

function anagramDifference (string1, string2) {

  let count = 0;

  let string1Copy = string1.slice();
  let string2Copy = string2.slice();

  for (let idx = 0; idx < string1.length; idx += 1) {
    if (!string2Copy.includes(string1[idx])) {
      count = count + 1;
    }
    string2Copy = string2Copy.replace(string1[idx], '');
  }

  for (let idx = 0; idx < string2.length; idx += 1) {
    if (!string1Copy.includes(string2[idx])) {
      count = count + 1;
    }
    string1Copy = string1Copy.replace(string2[idx], '');
  }

  return count;
}

function anagramDifference(str1, str2) {
  let word1 = str1.split('');
  let word2 = str2.split('');

  str1.split('').forEach((char) => {
    if (word2.includes(char)) {
      word2.splice(word2.indexOf(char), 1);
    }
  });

  str2.split('').forEach((char) => {
    if (word1.includes(char)) {
      word1.splice(word1.indexOf(char), 1);
    }
  });

  return word1.length + word2.length;
}

console.log(anagramDifference('', '') === 0);
console.log(anagramDifference('a', '') === 1);
console.log(anagramDifference('', 'a') === 1);
console.log(anagramDifference('ab', 'a') === 1);
console.log(anagramDifference('ab', 'ba') === 0);
console.log(anagramDifference('ab', 'cd') === 4);
console.log(anagramDifference('aab', 'a') === 2);
console.log(anagramDifference('a', 'aab') === 2);
console.log(anagramDifference('codewars', 'hackerrank') === 10);


