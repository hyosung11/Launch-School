/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of 
characters. No two characters may map to the same character, but a character may map to itself.

PROBLEM
- input two strings
- output boolean

Rules
- return true if letters of first string can be mapped to the second string isomorphically
  - all occurrences of a letter must be replaced with another letter while preserving the order of letters
  - a letter can only be mapped to one other letter
  - a letter may map to itself

Mental Model

EXAMPLES
- abba, zeel // false
- egg, add => true

DATA STRUCTURE
- input two strings
- intermediary: object.
- output: boolean

ALGORITHM

{
  e: "a",
  g: "d",
  f: "d",
}
We return false:
- If string are of different lengths
- If we need to remap an existing letter = Object.entries().includes

result = "a"

- input two strings
- if string are of different lengths, return false
- declare an empty `result` string
- declare an empty object to store the mapping
- iterate over the first string
  - if char is a not a key in the object
    - if `mapping` object already includes char do not put it in the object
    - add the char as the key and the char at the same index in the second string as the value
  - add the corresponding value (char) to the result string

- check if resultString is equal to string2

- return boolean
*/

function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;
  let result = '';
  let mapping = {};

  for (let idx = 0; idx < str1.length; idx++) {
    let char = str1[idx];

    if (!mapping[char]) {
      if (Object.values(mapping).includes(str2[idx])) return false;
      mapping[char] = str2[idx];
    }

    result += mapping[char];
  }

  return result === str2;
}

console.log(isIsomorphic('abc', 'abcde')); // false
console.log(isIsomorphic('egf', 'add')); // false
console.log(isIsomorphic('egg', 'add')); // true  e=>a, g=>d
console.log(isIsomorphic('foo', 'bar')); // false f=>b o=>a o=>
console.log(isIsomorphic('paper', 'title')); // true  p=>t a=>i  p=>t e=>l r=>e
