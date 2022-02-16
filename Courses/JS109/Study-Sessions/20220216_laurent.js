/* 9:05 start
09:17 algorithm
09:27 code

Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is in words.

Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).

Example 1:

Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
Output: [[3,7],[9,13],[10,17]]

- 'story' starts at idx 3 and ends at idx 7
- 'fleet' starts at idx 9 and ends at idx 13
- 'leetcode' starts at idx 10 ends at idx 17


Example 2:

Input: text = "ababa", words = ["aba","ab"]
Output: [[0,1],[0,2],[2,3],[2,4]]

- 'ab' => [0, 1]
- 'aba' => [0,2]
- 'ab' => [2, 3]
- 'aba' => [2, 4]

Explanation: Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].

Constraints:

1 <= text.length <= 100
1 <= words.length <= 20
1 <= words[i].length <= 50
text and words[i] consist of lowercase English letters.
All the strings of words are unique.


Rules
- return the start and end index positions of the words as a nested array
- words can overlap
- input is all lowercase letters
- all the strings of words are unique

Examples
- reviewed

Data Structure
- input string and array
- intermediary array: 
- output nested array of index positions

Algorithm
- declare `indexPairs` function with `string` and `array` parameters
- init `result` array to `[]`
- iterate through array
  - if string includes array[idx]
    result.push(string.indexOf([string[array[idx]]]), string.indexOf(string[array[idx).length -1)
- return `result` array
*/

function indexPairs(string, array) {
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    console.log(array[idx]);
    if (string.includes(array[idx])) {
    }
  }

  return result;
}

console.log(
  indexPairs('thestoryofleetcodeandme', ['story', 'fleet', 'leetcode'])
); // [[3,7],[9,13],[10,17]]

// console.log(indexPairs("ababa", ["aba","ab"])); // [[0,1],[0,2],[2,3],[2,4]]

/** Leetcode 1065. Index Pairs of a String
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 
find all occurences
sort them

for each word, look for the word and get their index of occurence

declare an array desult and assign it to an empty array

for each word, iterate over each letter of the string
  declare a variable startIndex to store the startIndex
  
  if letter is the same in the word and string and startIndex is undefined
    store start index
  if letter is the same as the word nth letter
    add a letter to reconstructedWord
  if letter is different
    reset startIndex to null
    break the loop and get to the next letter

  if length of the 
"abc", "bc" => [[1, 2]]
*/

var indexPairs = function(string, words) {
  let result = [];

  words.forEach(word => { // "a"
    let lastSearchedIndex = 0;
    let index = 0;
    let reconstructedWord = '';
    let startIndex = null;

    while(index <= string.length) {  // 0 < 1
      if (string[index] === word[0] && startIndex === null) {  // 'b'
        startIndex = index;
        reconstructedWord += string[index];
      } else if (string[index] === word[reconstructedWord.length] && startIndex !== null) {
        reconstructedWord += string[index];
      } else {
        reconstructedWord = '';
        startIndex = null;
        index = lastSearchedIndex;
        lastSearchedIndex += 1;
      }

      if (reconstructedWord.length === word.length) {
        result.push([startIndex, startIndex + word.length - 1]);
        reconstructedWord = '';
        startIndex = null;
        index = lastSearchedIndex;
        lastSearchedIndex += 1;
      }

      index += 1;
    }
  });

  return result.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    }
  );
};

console.log(indexPairs("thestoryofleetcodeandme", ["story","fleet","leetcode"])) // [[3,7],[9,13],[10,17]]
console.log(indexPairs("ababa", ["aba","ab"])); // [[0,1],[0,2],[2,3],[2,4]]
console.log(indexPairs("baabaaaaaa", ["b","a","ba","bb","aa"]));
