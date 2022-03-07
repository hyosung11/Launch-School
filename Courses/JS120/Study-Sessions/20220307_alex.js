/* =============================================

884. Uncommon Word from Two Sentences - Leetcode

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:

s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.


6:06 start
06:15 

PROBLEM
- in: str1, str2
- out: arrof words that occur once in str1 and str2 combine

Rules:
- return arr of all words that occur once in str1 and str2 combined
- words are seaparated by spaces
- everything is lowercase
- no punctuation

ALGO
- str = str 1 + ' ' + str 2
- init obj = {}
- split str by spaces

- iterate through; if obj[property]exists increment by 1; if not, create it

return Object keys filtered for those keys having a vaue of 1

*/
function uncommonFromSentences(str1, str2) {
  let str = str1 + ' ' + str2;
  let obj = {};

  str.split(' ').forEach((word) => {
    obj[word] ? (obj[word] += 1) : (obj[word] = 1);
  });

  return Object.keys(obj).filter((word) => obj[word] === 1);
}

console.log(uncommonFromSentences('apple apple', 'banana'));
// // Output: ["banana"]

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
// // //  Output: ["sweet","sour"]
